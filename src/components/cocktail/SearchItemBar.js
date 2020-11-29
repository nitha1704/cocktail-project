import React from 'react'
import {useAppContextGlobal} from '../../context'

const SearchItemBar = () => {

  const {setSearchTerm} = useAppContextGlobal();

  React.useEffect(() => {
    document.getElementById('cocktailName').focus();
  }, []);

    return (
      <div className="search-cocktail-bar">
        <form className="search-cocktail-form">
          <div className="form-group">
            <label htmlFor="cocktailName" className="search-cocktail-label">Search Your Favorite Cocktail</label>
            <input type="text" id="cocktailName" onChange={(e)=>setSearchTerm(e.target.value)} />
          </div>
        </form>
      </div>
    );
}

export default SearchItemBar
