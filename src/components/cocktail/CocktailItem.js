import React from "react";
import {Link} from 'react-router-dom';

const CocktailItem = ({
  id,
  name,
  thumbnail,
  glassType,
  alcoholType,
  instructions,
  ingredients,
}) => {
  return (
    <div className="col-md-6 cocktail-item">
      <div className="wrap-cocktail-item">
        <div className="cocktail-thumbnail">
          <img src={thumbnail} alt={name} className="img-fit" />
        </div>
        <div className="cocktail-detail">
          <p className="cocktail-name">{name}</p>
          <p className="cocktail-glass-type">{glassType}</p>
          <p className="cocktail-alcohol-type">{alcoholType}</p>
          <div className="wrap-more-detail-btn">
            <Link to={`/cocktail/${id}`}>
              <button className="btn btn-success more-detail-btn">
                More Detail
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocktailItem;
