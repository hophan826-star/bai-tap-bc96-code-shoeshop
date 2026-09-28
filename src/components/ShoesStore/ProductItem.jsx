import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { item, setStateModal } = this.props;

    return (
      <div className="card h-100 shadow-sm">
        <img
          src={item.image}
          className="card-img-top p-3"
          alt={item.name}
          style={{ objectFit: "contain", height: "220px" }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title fs-6 fw-bold">{item.name}</h5>
            <p className="card-text text-muted">{item.price} $</p>
          </div>
          <button
            className="btn btn-dark w-100 mt-2"
            data-bs-toggle="modal"
            data-bs-target="#productDetailModal"
            onClick={() => setStateModal(item)}
          >
            add to carts <i className="bi bi-cart-plus"></i>
          </button>
        </div>
      </div>
    );
  }
}
