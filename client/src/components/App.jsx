import React from "react";
import ItemList from "./ItemList.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grocerys: []
    };
    this.getGroceries = this.getGroceries.bind(this)
  }
  getGroceries() {
    axios.get("/supermarket").then(response => {
      console.log("DATA...", response);
      console.log("RESPONSE DATA", response.data);
      this.setState({
        grocerys: response.data
      });
    });
  }
  componentDidMount(){
    this.getGroceries()
  }
  render() {
    return (
      <div>
        <img src="grocery-bags.png" />
        <h1>Grocery List</h1>

        <form>
          <label>
            Item
            <input type="text" itemValue={this.state.itemValue} />
          </label>
          <label>
            Quantity
            <input type="text" quantityValue={this.state.quantityValue} />
          </label>
          <label>
            <input type="submit" value="Submit" />
          </label>
        </form>

        <ItemList groceries={this.state.grocerys}/>
      </div>
    );
  }
}

export default App;
