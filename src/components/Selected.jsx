import React, {Component} from "react";
import Paper from "@material-ui/core/Paper";
import FlipMove from "react-flip-move";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";

import "./Selected.css";

class Selected extends React.Component  {
  
constructor(props){
  super(props);
  this.createList=this.createList.bind(this);
  this.delete=this.delete.bind(this);
}
  createList(ingred){
    return <li className="card" key={ingred.key}>
    {ingred.text}
    <IconButton className="delete" onClick={() => this.delete(ingred.key)} >
       <DeleteIcon className="addButton"/>
    </IconButton>
    </li>
  }
  
  delete(key) {
    this.props.delete(key);
  }
  render(){
    var selected = this.props.entries;
    var listItems = selected.map(this.createList);
    return (

          <FlipMove duration={250} easing="ease-out">
            {listItems}
          </FlipMove>

    );
  }
}

export default Selected;
