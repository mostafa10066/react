import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Task extends Component {
    constructor(props){
        super(props)
        console.log(this.props.history.location.state)
        this.state={
            item:this.props.history.location.state['item']
        }
        // this.state.item=props.location.taskProp['item']
        // console.log(this.state.item)
    }
    render() {
        return(
            <div>
                <h1>{ this.state.item.subject }</h1>
            </div>
        )

    }
}

export default Task;