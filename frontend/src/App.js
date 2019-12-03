import React from "react";
import "./App.css";
import AddressForm from "./components/addressForm";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <AddressForm />
      </div>
    );
  }
}

export default App;
