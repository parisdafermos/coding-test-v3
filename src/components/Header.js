import React from "react";
import "../App.css";
import hardwareTools from "../images/hardwareTools.jpg";
function Header() {
  return (
    <>
      <header className="header">
        <h1> Smart Hardware Shop</h1>
      </header>
      <div className="main-image">
        <img src={hardwareTools} alt="a variety of hardware tools" />
      </div>
      <section className="summary">
        <h2>World's best hardware shop</h2>
        <p>
          Choose your favorite gadget from a wide selection of smart gadgets.
        </p>
        <p>
          All our gadgets are of the highest quality and come with a 100 year
          warranty.
        </p>
      </section>
    </>
  );
}

export default Header;
