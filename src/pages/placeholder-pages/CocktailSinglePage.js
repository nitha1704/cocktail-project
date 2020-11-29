import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// Component
import Loading from "../../components/Loading";

const CocktailSinglePage = () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [cocktailData, setCocktailData] = useState(null);

  const fetchSingleCocktail = async () => {
    try {
      const data = await fetch(`${url}${id}`).then((res) => res.json());
      const { drinks } = data;

      if (drinks) {
        const newDrink = drinks.map((item) => {
          return {
            id: item.idDrink,
            name: item.strDrink,
            thumbnail: item.strDrinkThumb,
            category: item.strCategory,
            alcoholType: item.strAlcoholic,
            instructions: item.strInstructions,
            glassType: item.strGlass,
            ingredients: [
              item.strIngredient1,
              item.strIngredient2,
              item.strIngredient3,
              item.strIngredient4,
              item.strIngredient5,
            ],
          };
        });
        setCocktailData(newDrink);
      } else {
        setCocktailData(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setCocktailData(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleCocktail();
  }, [id]);

  console.log(cocktailData);

  if (loading) {
    return <Loading />;
  }

  if (!cocktailData) {
    return <h1>No Cocktails Matched Your Search Criteria or Wrong ID</h1>;
  }

  const {
    name,
    thumbnail,
    category,
    alcoholType,
    instructions,
    glassType,
    ingredients,
  } = cocktailData[0];

  return (
    <div className="cocktail-single-page-item">
      <div className="inner">
        <div className="title">{name}</div>
        <div className="row">
          <div className="col-lg-5 wrap-thumbnail">
            <img src={thumbnail} alt={name} className="img-fit" />
          </div>
          <div className="col-lg-7">
            <div className="name drink-data">
              <span className="drink-info">Name :</span>
              <span className="bold">{name}</span>
            </div>
            <div className="category drink-data">
              <span className="drink-info">Category :</span>
              <span className="bold">{category}</span>
            </div>
            {/* <div className="alcoholType drink-data">
              <span className="drink-info">Drink Type :</span>
              <span className="bold">{alcoholType}</span>
            </div> */}
            <div className="glassType drink-data">
              <span className="drink-info">Glass Type :</span>
              <span className="bold">{glassType}</span>
            </div>
            <div className="instructions drink-data">
              <span className="drink-info">Instructions :</span>
              <span className="bold">{instructions}</span>
            </div>
            <div className="ingredients drink-data">
              <span className="drink-info">Ingredients :</span>
              {ingredients.map((item, index)=>{
                return (  item ?
                  <span className="bold">
                    {(index ? ", " : "") + item}
                  </span>
                  : null
                );
              })}
            </div>
          </div>
        </div>
        <div className="wrap-button">
          <Link to="/" className="btn btn-success">Back Home</Link>
        </div>
      </div>
    </div>
  );
};

export default CocktailSinglePage;
