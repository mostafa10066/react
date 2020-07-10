import React, {Component} from 'react';
import Task from './Task'
import {findAllByDisplayValue} from "@testing-library/dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class Tasks extends Component {
    constructor(props){
        super(props)
        this.state={
            keyword:'',
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
        this.search = this.search.bind(this);
    }
    deleteItem(id){
        const items = this.state.items;
        items.splice(id, 1);
        this.setState({ items });
    }
    search=(e)=>{
        var filterVal=document.getElementById('date').value
        var search=document.getElementById('search').value
        var filterItems=this.state.tasks;
        if(search!=''){
            filterItems =  filterItems.filter((item)=> {
                       return item.subject.includes(search);
            });

        }
        if(filterVal!=0){
            filterItems =  filterItems.filter((item)=> {
                return item.fälligAm == filterVal;
            });
        }
        this.setState({
                    items: filterItems
        });


    }
    render() {
       const task=this.state.items.map((item,key)=>
       {
            return (
                <div key={ key } className="task">
                    <p  className="list"><Link  to={{ pathname:'/task', taskProp:{ item }}} className="nav-link"> {item.subject } </Link> </p>
                    <p>{ item.fälligAm}</p>
                    <span><FontAwesomeIcon className="trash" icon="trash" onClick={ ()=>this.deleteItem(key)} /></span>
                </div>
            );
        })
        return(
            <div className="container">
                <input placeholder="search"  onKeyUp={ this.search } id="search"  type="text" className="search"/>
                <div className="filter">
                    <select  value={ this.state.value }  onChange={this.search} name="" id="date">
                        <option value="0">select date</option>
                        <option value="2020-12-5">2020-12-5</option>
                        <option value="2020-12-6">2020-12-6</option>
                    </select>
                </div>
                { task }
            </div>
        )

    }
}

export default Tasks;