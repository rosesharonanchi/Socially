import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateProduct() {
  const navigate = useNavigate();
  const [validationErrors, setValidationErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Validation: Ensure that all fields are filled
    if (
      !formData.get("name") ||
      !formData.get("brand") ||
      !formData.get("category") ||
      !formData.get("price") ||
      !formData.get("description") ||
      !formData.get("image").name
    ) {
      alert("Please fill all the fields");
      return;
    }

    // Log the formData to check its structure
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await fetch("http://localhost:3004/products", {
        method: "POST",
        body: formData, // Send formData directly
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/admin/products");
      } else if (response.status === 400) {
        setValidationErrors(data);
      } else {
        alert("Unable to create product!");
      }
    } catch (error) {
      alert("Unable to connect to the server");
    }
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-3 mx-auto rounded-border p-4">
          <h2 className="text-center mb-5">Create Product</h2>

          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Name</label>
              <div className="col-sm-8">
                <input className="form-control" name="name" />
                <span className="text-danger">{validationErrors.name}</span>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Brand</label>
              <div className="col-sm-8">
                <input className="form-control" name="brand" />
                <span className="text-danger">{validationErrors.brand}</span>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Category</label>
              <div className="col-sm-8">
                <select name="category" id="" className="form-select">
                  <option value="Other">Other</option>
                  <option value="Phones">Phones</option>
                  <option value="Computer">Computer</option>
                  <option value="Access">Access</option>
                  <option value="Printers">Printers</option>
                  <option value="Cameras">Cameras</option>
                </select>
                <span className="text-danger">{validationErrors.category}</span>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Price</label>
              <div className="col-sm-8">
                <input
                  className="form-control"
                  name="price"
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
                  rows="4"
                />
                <span className="text-danger">
                  {validationErrors.description}
                </span>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Image</label>
              <div className="col-sm-8">
                <input className="form-control" name="image" type="file" />
                <span className="text-danger">{validationErrors.image}</span>
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
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
