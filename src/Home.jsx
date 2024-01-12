import React, { useState } from "react";
import Header from "./Component/Header";
import GridBox from "./Component/GridBox";
import { Pagination } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import "./index.css";
import { useProductList } from "./hooks/useProductList";
import Banner from "./Component/Banner";
import SmartPhoneBanner from "./Component/SmartPhoneBanner";

function Home() {
  const perPage = 10;
  const [page, setPage] = useState(0);
  const [categoryName, setCategoryName] = useState("");
  const [searchText, setSearchText] = useState("");

  let params = "";

  if (categoryName !== "") {
    params = `/category/${categoryName}`;
  }
  if (searchText !== "") {
    params = `/search?q=${searchText}`;
  }
  if (categoryName === "" && searchText === "") {
    params = `/?limit=${perPage}&skip=${page}`;
  }
  
  const { isLoading, data } = useProductList(params, {
    categoryName,
    searchText,
    page,
  });
  const {products,total} = data?.data || {
    products:[],
    total:0
  }
  
  return (
    <>
      <Header
        categoryName={categoryName}
        setCategoryName={setCategoryName}
        setSearchText={setSearchText}
        searchText={searchText}
      />
<Banner />
{categoryName === "smartphones" && <SmartPhoneBanner/>}
      {categoryName && (
        <div className="product-header">
          <h2 style={{ textTransform: "capitalize" }}>
            Category: {categoryName.replace("-", ` `)}
          </h2>
          <button
            onClick={() => {
              setCategoryName("");
            }}
            >
            X
          </button>
        </div>
      )
    }
      {isLoading ? (
        <div className="IsLoadingg">
          <CircularProgress disableShrink style={{ alignItems: "center" }} />
        </div>
      ) : (
        <div className="product-list-page">
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-3 ">
            {products.map((item, i) => {
              return (
                <div item>
                  <GridBox item={item} />
                </div>
              );
            })}
          </div>
          {searchText === "" && categoryName === "" && (
            <div className="pagination MuiPagination-ul">
              <Pagination
                count={total / perPage}
                variant="outlined"
                color="primary"
                style={{ background: "white" }}
                onChange={(_, value) => {
                  setSearchText("");
                  setCategoryName("");
                  setPage((value - 1) * 10);
                }}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Home;
