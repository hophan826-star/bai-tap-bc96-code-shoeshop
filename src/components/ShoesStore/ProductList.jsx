import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    const { productsData, setStateModal } = this.props;

    return (
      <div className="row g-4">
        {productsData.map((product) => (
          <div className="col-12 col-md-6 col-lg-4" key={product.id}>
            <ProductItem item={product} setStateModal={setStateModal} />
          </div>
        ))}
      </div>
    );
  }
}
