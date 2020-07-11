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
            date:'',
            tasks:[
                {
                    id:1,subject:'first',completed:true,fälligAm:'2020-07-08',business_partner:'Jack Doe',task:'example',address:'zelbach'
                },
                {
                    id:2,subject:'second',completed:true,fälligAm:'2020-07-09',business_partner:'Jack Doe',task:'example',address:'zelbach'
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
    // updateFilter(event){
    //     console.log(event)
    //     //this.setState({ keyword: value}, this.search);
    // }
    search=(e)=>{
        //this.setState({keyword:e.target.value});
        // this.setState({
        //     keyword: document.getElementById('search').value,
        //     date:document.getElementById('date').value
        // });
        // console.log(this.state.keyword)
        //this.setState({keyword: e.target.value});

        // this.setState((state,key) => {
        //     // Important: read `state` instead of `this.state` when updating.
        //     // return {keyword: e.target.value}
        //     console.log(key)
        // });
        //
        // console.log(this.state.keyword)

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
               <tr key={ key }>
                   <td>
                       <div className="d-flex align-items-center">
                           <div className="">
                               <h6 className="m-b-0 font-16 subject"><Link  to={{ pathname:`/task/${item.subject}`, state: { item:item } }} className="nav-link"> {item.subject } </Link> </h6>
                           </div>
                       </div>
                   </td>
                   <td>{ item.fälligAm}</td>
                   <td>{ item.business_partner}</td>
                   <td>
                       <label className="">{ item.task }</label>
                   </td>
                   <td>{ item.address }</td>
                   <td className="operation">
                       <h5 className="m-b-0"><FontAwesomeIcon className="trash icon" icon="trash" onClick={ ()=>this.deleteItem(key)} /></h5>
                       <h5 className="m-b-0"><FontAwesomeIcon className="edit icon" icon="edit"  /></h5>
                   </td>
               </tr>
            );
        })
        return(
            <div>
                <div className="filter">
                    <input   placeholder="search"  onKeyUp={ this.search } id="search"  type="text" className="search"/>
                    <input   onChange={this.search} type="date" id="date"/>
                </div>
                <table className="table v-middle">
                    <thead>
                    <tr className="bg-light">
                        <th className="border-top-0">Subject</th>
                        <th className="border-top-0">Fällig am</th>
                        <th className="border-top-0">Geschaftspartner</th>
                        <th className="border-top-0">Aufgabenart</th>
                        <th className="border-top-0">Adressat</th>
                        <th className="border-top-0">Aktionen</th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
                    { task }
                </table>
            </div>
        )
    }
}

export default Tasks;


