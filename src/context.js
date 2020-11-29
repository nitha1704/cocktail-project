import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("sol");

  const fetchCocktail = async () => {
    setLoading(true);
    try {
      const cocktailData = await fetch(`${url}${searchTerm}`).then((res) =>
        res.json()
      )
      const {drinks} = cocktailData;
      
      if(drinks) {
        const newDrinks = drinks.map((item)=>{
          return {
            id: item.idDrink,
            name: item.strDrink,
            thumbnail: item.strDrinkThumb,
            glassType: item.strGlass,
            alcoholType: item.strAlcoholic,
          };
        })
        setCocktails(newDrinks);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setCocktails([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCocktail();
  }, [searchTerm]);

  return (
    <AppContext.Provider value={{ loading, cocktails, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContextGlobal = () => {
  return useContext(AppContext);
};

export { AppContext, AppContextProvider, useAppContextGlobal };
