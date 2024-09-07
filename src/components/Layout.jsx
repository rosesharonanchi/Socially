import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar container  navbar-expand-lg navbar-light bg-white border-bottom box-shadow">
      <Link className="navbar-brand" to="/">
        Best Store
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <Link className="nav-link text-dark" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/admin/products">
              Products
            </Link>
          </li>
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form> */}
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <Link
              className="nav-link text-dark dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/">
                Products
              </Link>
              <Link className="dropdown-item" to="/profile">
                Profile
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/logout">
                Logout
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <div text-center p-4 border-top>
      Best Store
    </div>
  );
}
