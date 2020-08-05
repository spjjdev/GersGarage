import React, { Component } from "react";
import SuppliesDataService from "../services/supplies.service";
import { Link } from "react-router-dom";

export default class SuppliesList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchSuppliesId = this.onChangeSearchSuppliesId.bind(this);
    this.retrieveSupplies = this.retrieveSupplies.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveSupply = this.setActiveSupply.bind(this);
    this.onChangeSearchSuppliesId = this.onChangeSearchSuppliesId.bind(this);

    this.state = {
      supplies: [],
      currentSupply: null,
      currentIndex: -1,
      searchSuppliesId: "",
    };
  }

  componentDidMount() {
    this.retrieveSupplies();
  }

  onChangeSearchSuppliesId(e) {
    const searchSuppliesId = e.target.value;

    this.setState({
      searchSuppliesId: searchSuppliesId,
    });
  }

  retrieveSupplies() {
    SuppliesDataService.getAll()
      .then((response) => {
        this.setState({
          supplies: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveSupplies();
    this.setState({
      currentSupply: null,
      currentIndex: -1,
    });
  }

  setActiveSupply(supplies, index) {
    this.setState({
      currentSupply: supplies,
      currentIndex: index,
    });
  }

  searchSuppliesId() {
    SuppliesDataService.findBySuppliesId(this.state.searchSuppliesId)
      .then((response) => {
        this.setState({
         supplies: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const {
      searchSuppliesId,
      supplies,
      currentSupply,
      currentIndex,
    } = this.state;
    console.log(supplies);

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Supply ID"
              value={searchSuppliesId}
              onChange={this.onChangeSearchSuppliesId}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchSuppliesId}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <h4>Supplies List</h4>

          <ul className="list-group">
            {supplies &&
            supplies.map((supplies, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveSupply(supplies, index)}
                  key={index}
                >
                  {supplies.supplies_name}
                </li>
              ))}
          </ul>
        </div>

        <div className="col-md-6">
          {currentSupply? (
            <div>
              <h4>Supply</h4>
              <div>
                <label>
                  <strong>Supply ID</strong>
                </label>{" "}
                {currentSupply.supplies_id}
              </div>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentSupply.supplies_name}
              </div>
              <div>
                <label>
                  <strong>Quantity:</strong>
                </label>{" "}
                {currentSupply.quantity}
              </div>
              <div>
                <label>
                  <strong>Price €
                  </strong>
                </label>{" "}
                {currentSupply.price}
              </div>

              
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Supply...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
