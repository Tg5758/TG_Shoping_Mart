import React from "react";
import "./style.css";
import { useCategoryData } from "../hooks/useCategoryData";

function Header({ categoryName, searchText, setCategoryName, setSearchText }) {
  const { data } = useCategoryData();
  const categoryList = data?.data || [] 

  const handleChange = (e) => {
    setSearchText(e?.target?.value);
    setCategoryName("");
  };
    
  return (
    <>
      <ul className="header">
        <li>
          <span class="active" href="#home">
            TG shoping Mart
          </span>
        </li>

        <li>
          <span>
            <select
              className="text-black"
              value={categoryName}
              onChange={(e) => {
                setCategoryName(e?.target?.value);
                setSearchText("");
              }}
            >
              {!categoryName && <option>Select</option>}
              {categoryList.map((item) => {
                return <option>{item}</option>;
              })}
            </select>
          </span>
        </li>
        <li>
          <span>
            <input
              className="text-black"
              type="search"
              placeholder="Search Here.."
              value={searchText}
              onChange={handleChange}
            />
          </span>
        </li>
      </ul>
    </>
  );
}

export default Header;
