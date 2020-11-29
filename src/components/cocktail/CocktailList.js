import React from "react";
import { useAppContextGlobal } from "../../context";

// Component
import Loading from "../Loading";
import CocktailItem from "./CocktailItem";


const CocktailList = () => {
  const { loading, cocktails } = useAppContextGlobal();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return <h1>No Cocktails Matched Your Search Criteria</h1>;
  }
  
  return (
    <>
      <div className="cocktail-list-item">
          <div className="cocktail-list-title">
              <h1>Cocktails</h1>
          </div>
        <div className="row">
          {cocktails.map((cocktail)=>{
              return <CocktailItem key={cocktail.id} {...cocktail} />
          })}
        </div>
      </div>
    </>
  );
};

export default CocktailList;
