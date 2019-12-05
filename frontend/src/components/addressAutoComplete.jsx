import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { create, getCurrent, getForecast } from "../services/addressService";

class AddressAutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      latitude: null,
      longitude: null
    };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    this.setState({ address });
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setStatewithLatLng(latLng))
      .catch(error => console.error("latLng Error", error));
  };

  handleClear = () => {
    this.setState({
      address: "",
      latitude: null,
      longitude: null
    });
  };

  setStatewithLatLng = latLng => {
    this.setState({
      latitude: latLng.lat,
      longitude: latLng.lng
    });
  };

  handleBtnClick = () => {
    create(this.state)
      .then(this.handleSuccessCreate)
      .catch(this.handleError);
    getCurrent(this.state)
      .then(this.handleSuccess)
      .catch(this.handleError);
    getForecast(this.state)
      .then(this.handleSuccessForecast)
      .catch(this.handleError);
  };

  handleSuccessCreate = () => {
    console.log("success post");
  };

  handleSuccess = data => {
    this.props.setCurrent(data);
  };

  handleSuccessForecast = data => {
    this.props.setForecast(data);
  };

  handleError = error => {
    console.log(error);
  };

  render() {
    return (
      <>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }) => (
            <div className="search-bar-container">
              <div className="search-input-container">
                <input
                  {...getInputProps({
                    placeholder: "Search Places ...",
                    className: "search-input"
                  })}
                />
                <button className="clear-button" onClick={this.handleClear}>
                  x
                </button>
              </div>
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <div className="text-center">
          <button className="btn btn-danger" onClick={this.handleBtnClick}>
            Get Result
          </button>
        </div>
      </>
    );
  }
}

export default AddressAutoComplete;
