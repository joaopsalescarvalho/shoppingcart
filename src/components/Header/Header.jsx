import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import "./Header.css";
import Cartbutton from "../Cart/Cartbutton";

function Header() {
  return (
    <header className="header">
      <div className="conteiner">
        <Searchbar />
        <Cartbutton />
      </div>
    </header>
  );
}

export default Header;
