import React from "react";
import { BsSearch } from "react-icons/bs";

export default function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <h1 className="header__text">Contacts</h1>
        <h1 className="header__search">
          <BsSearch />
        </h1>
      </div>
    </div>
  );
}
