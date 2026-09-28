import React, { Component } from "react";
import productsData from "./data.json";
import ProductList from "./ProductList";
import Modal from "./Modal";

export default class ShoesStore extends Component {
  state = {
    productDetail: productsData[0],
  };

  setStateModal = (product) => {
    this.setState({
      productDetail: product,
    });
  };

  render() {
    return (
      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-2 border-end pe-3">
            <ul className="nav flex-column nav-pills">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active bg-light text-dark fw-bold border"
                  href="#shop"
                >
                  Shop
                </a>
              </li>
            </ul>
          </div>

          <div className="col-10 ps-4">
            <h1 className="text-center mb-4 fs-3">Shoes shop</h1>
            <ProductList
              productsData={productsData}
              setStateModal={this.setStateModal}
            />
          </div>
        </div>

        <Modal content={this.state.productDetail} />
      </div>
    );
  }
}
