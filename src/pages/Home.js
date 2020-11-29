import React from "react";
import SearchItemBar from "../components/cocktail/SearchItemBar";
import CocktailList from "../components/cocktail/CocktailList";

const Home = () => {
  return (
    <section className="home-section1">
      <div className="inner container-cocktail-section">
        <SearchItemBar />
        <div className="cocktail-list">
          <CocktailList />
        </div>
      </div>
    </section>
  );
};

export default Home;
