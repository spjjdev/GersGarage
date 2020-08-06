// code from https://bezkoder.com/react-crud-web-api/
import React, { Component } from "react";
import SuppliesDataService from "../services/supplies.service";

export default class AddSupply extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.saveSupply = this.saveSupply.bind(this);
    this.newSupply = this.newSupply.bind(this);

    this.state = {
      supplies_name: " ",
      quantity: " ",
      price: " ",
    };
  }
  onChangeName(e) {
    this.setState({
      supplies_name: e.target.value,
    });
  }
  onChangePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }
  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value,
    });
  }
 


  saveSupply() {
    var data = {
      supplies_name: this.state.supplies_name,
      price: this.state.price,
      quantity: this.state.quantity,
      
      
    };

    SuppliesDataService.create(data)
      .then((response) => {
        this.setState({
          supplies_name: response.data.supplies_name,
          price: response.data.price,
          quantity: response.data.quantity,
      
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newSupply() {
    this.setState({
      supplies_name: " ",
      quantity: " ",
      price: " ",
     
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newSupply}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="supplies_name">Supply</label>
              <input
                type="text"
                className="form-control"
                id="supplies_name"
                required
                value={this.state.supplies_name}
                onChange={this.onChangeName}
                name="supplies_name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price € </label>
              <input
                type="text"
                className="form-control"
                id="price"
                required
                value={this.state.price}
                onChange={this.onChangePrice}
                name="price"
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="text"
                className="form-control"
                id="quantity"
                required
                value={this.state.quantity}
                onChange={this.onChangeQuantity}
                name="quantity"
              />
            </div>
            

            <button onClick={this.saveSupply} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}