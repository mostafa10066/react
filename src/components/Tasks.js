import React, {Component} from 'react';
import Task from './Task'
import {findAllByDisplayValue} from "@testing-library/dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class Tasks extends Component {
    constructor(props){
        super(props)
        this.state={
            tasks:[
                {
                    id:1,subject:'first',completed:true,fälligAm:'2020-12-5'
                },
                {
                    id:2,subject:'second',completed:true,fälligAm:'2020-12-6'
                },
            ],
            items:[]
        }
        this.state.items=this.state.tasks;
        this.dateFilter = this.dateFilter.bind(this);
    }
    deleteItem(id){
        const items = this.state.items;
        items.splice(id, 1);
        this.setState({ items });
    }
    dateFilter(event){
        this.state.items=this.state.tasks;
        if( event.target.value!=0){

            this.setState({
                items: this.state.items.filter(function(item) {
                    return item.fälligAm == event.target.value;
                })
            });
        }
        else{
            this.setState({
                items: this.state.tasks

            });
        }

    }
    render() {
       const task=this.state.items.map((item,key)=>
       {
            return (
                <div className="task">
                    <p key={ key } className="list"><Link  to={{ pathname:'/task', taskProp:{ item }}} className="nav-link"> {item.subject } </Link> </p>
                    <p>{ item.fälligAm}</p>
                    <span><FontAwesomeIcon className="trash" icon="trash" onClick={ ()=>this.deleteItem(key)} /></span>
                </div>
            );
        })
        return(
            <div className="container">
                <select value={this.state.value} onChange={this.dateFilter} name="" id="">
                    <option value="0">select date</option>
                    <option value="2020-12-5">2020-12-5</option>
                    <option value="2020-12-6">2020-12-6</option>
                </select>
                { task }
            </div>
        )

    }
}

export default Tasks;