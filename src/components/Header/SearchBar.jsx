import "./Header.css";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Divider from "@material-ui/core/Divider";
import Logo from "./Logo";
import Selected from "../Selected";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingred: [],
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.result = this.result.bind(this);
  }
  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };
      this.setState((prevState) => {
        return {
          ingred: prevState.ingred.concat(newItem),
        };
      });
      this._inputElement.value = "";
    }
    e.preventDefault();
  }
  deleteItem(key) {
    var filteredItems = this.state.ingred.filter(function (ingred) {
      return ingred.key !== key;
    });

    this.setState({
      ingred: filteredItems,
    });
  }
  result(key) {
    var filteredItems = this.state.ingred.filter(function (ingred) {
      return ingred.key !== key;
    });

    this.setState({
      ingred: filteredItems,
    });
  }
  render() {
    return (
      <AppBar position="static" className="appbars" variant="outlined">
        <Logo />
        <div className="searchbar">
          <Paper
            className="paper"
            component="form"
            onSubmit={this.addItem}
            elevation={0}>
            <input
              ref={(a) => (this._inputElement = a)}
              className="paperinput"
              /*value={this.state.query}
            onChange={this.handleChange}*/
            />
            <IconButton className="papersearch" type="submit">
              <AddCircleOutlineIcon className="addButton" />
            </IconButton>
          </Paper>
          <Selected
            entries={this.state.ingred}
            delete={this.deleteItem}></Selected>
        </div>
      </AppBar>
    );
  }
}

export default SearchBar;
