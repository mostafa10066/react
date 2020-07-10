import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Task extends Component {
    constructor(props){
        super(props)
        this.state={
            item:props.location.taskProp['item']
        }
        // this.state.item=props.location.taskProp['item']
        // console.log(this.state.item)
    }
    render() {
        return(
            <div>
                <p>{ this.state.item.subject }</p>
            </div>
        )

    }
}

export default Task;