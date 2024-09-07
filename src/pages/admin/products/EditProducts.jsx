import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditProducts() {
  const navigate = useNavigate();
  const params = useParams();
  const [validationErrors, setValidationErrors] = useState({});
  const [initialData, setInitialData] = useState();

  function getProducts() {
    fetch("http://localhost:3004/products/" + params.id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then((data) => {
        setInitialData(data);
      })
      .catch((error) => {
        alert("Unable to read the products details");
      });
  }

  useEffect(getProducts, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const product = Object.fromEntries(formData.entries());
    // Validation: Ensure that all fields are filled
    if (
      !formData.get("name") ||
      !formData.get("brand") ||
      !formData.get("category") ||
      !formData.get("price") ||
      !formData.get("description")
    ) {
      alert("Please fill all the fields");
      return;
    }

    // Log the formData to check its structure
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await fetch(
        "http://localhost:3004/products/" + params.id,
        {
          method: "PATCH",
          body: formData, // Send formData directly
        }
      );

      const data = await response.json();

      if (response.ok) {
        navigate("/admin/products");
      } else if (response.status === 400) {
        setValidationErrors(data);
      } else {
        alert("Unable to update product!");
      }
    } catch (error) {
      alert("Unable to connect to the server");
    }
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-3 mx-auto rounded-border p-4">
          <h2 className="text-center mb-5">Edit Product</h2>
          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">ID</label>
            <div className="col-sm-8">
              <input
                readOnly
                className="form-control-plaintext"
                defaultValue={params.id}
              />
            </div>
          </div>
          {initialData && (
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <label className="col-sm-4 col-form-label">Name</label>
                <div className="col-sm-8">
                  <input
                    className="form-control"
                    name="name"
                    defaultValue={initialData.name}
                  />
                  <span className="text-danger">{validationErrors.name}</span>
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-4 col-form-label">Brand</label>
                <div className="col-sm-8">
                  <input
                    className="form-control"
                    name="brand"
                    defaultValue={initialData.brand}
                  />
                  <span className="text-danger">{validationErrors.brand}</span>
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-4 col-form-label">Category</label>
                <div className="col-sm-8">
                  <select
                    name="category"
                    defaultValue={initialData.category}
                    id=""
                    className="form-select"
                  >
                    <option value="Other">Other</option>
                    <option value="Phones">Phones</option>
                    <option value="Computer">Computer</option>
                    <option value="Access">Access</option>
                    <option value="Printers">Printers</option>
                    <option value="Cameras">Cameras</option>
                  </select>
                  <span className="text-danger">
                    {validationErrors.category}
                  </span>
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-4 col-form-label">Price</label>
                <div className="col-sm-8">
                  <input
                    className="form-control"
                    name="price"
                    defaultValue={initialData.price}
                    type="number"
                    step="0.01"
                    min="1"
                  />
                  <span className="text-danger">{validationErrors.price}</span>
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-4 col-form-label">Description</label>
                <div className="col-sm-8">
                  <textarea
                    className="form-control"
                    name="description"
                    defaultValue={initialData.description}
                    rows="4"
                  />
                  <span className="text-danger">
                    {validationErrors.description}
                  </span>
                </div>
              </div>
              {/* copied */}
              <div className="row mb-3">
                <div className="offset-sm-4 col-sm-8">
                  <img
                    src={
                      "http://localhost:3004/images/" +
                      initialData.imageFilename
                    }
                    width="150"
                    alt="..."
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-4 col-form-label">Image</label>
                <div className="col-sm-8">
                  <input className="form-control" name="image" type="file" />
                  <span className="text-danger">{validationErrors.image}</span>
                </div>
              </div>
              {/* Copied */}
              <div className="row mb-3">
                <label className="col-sm-4 col-form-label">Created At</label>
                <div className="col-sm-8">
                  <input
                    readOnly
                    className="form-control-plaintext"
                    defaultValue={initialData.createdAt.slice(-1, 9)}
                  />
                </div>
              </div>

              <div className="row">
                <div className="offset-sm-4 col-sm-4 d-grid">
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
                <div className=" col-sm-4 d-grid">
                  <Link
                    className="btn btn-secondary"
                    type="submit"
                    to="/admin/products"
                  >
                    Cancel
                  </Link>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditProducts;
