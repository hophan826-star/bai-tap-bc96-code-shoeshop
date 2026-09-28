import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { content } = this.props;

    if (!content) return null;

    return (
      <div
        className="modal fade"
        id="productDetailModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold">{content.name}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row align-items-center">
                <div className="col-12 col-md-5 text-center">
                  <img
                    src={content.image}
                    alt={content.name}
                    className="img-fluid"
                  />
                </div>
                <div className="col-12 col-md-7">
                  <p>
                    <strong>Giá:</strong>{" "}
                    <span className="text-danger fw-bold">
                      {content.price} $
                    </span>
                  </p>
                  <p>
                    <strong>Số lượng:</strong> {content.quantity}
                  </p>
                  <p>
                    <strong>Mô tả ngắn:</strong> {content.shortDescription}
                  </p>
                  <p>
                    <strong>Mô tả:</strong> {content.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
