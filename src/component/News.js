import React, { useState } from "react";
import axios from "axios";

function News() {
  const [state, setState] = useState([]);

  function onClickHandler() {
  
    axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=5f6540a1b63140d382d8a8f301a898f1"
      )
      .then((response) => {
        // console.log(response);
        setState(response.data.articles);
      });

    // console.log("its work your button ");
  }

  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={onClickHandler}>
              Current News
            </button>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <div className="row">
          {state.map((value) => {
            return (
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <a href={value.url} className="btn btn-primary">
                      Go more
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default News;
