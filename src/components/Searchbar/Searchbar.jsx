import React, { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import "./Searchbar.css";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";

function Searchbar() {

  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue("");
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue}
        className="search-input"
        placeholder="Buscar produtos"
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />

      <button type="submit" className="search-button">
        <BsSearch />
      </button>
    </form>
  );
}

export default Searchbar;
