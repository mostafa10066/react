import React, {Component} from 'react';
import Task from './Task'
import {findAllByDisplayValue} from "@testing-library/dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class Tasks extends Component {
    constructor(props){
        super(props)
        this.state={
            form:{
                keyword:'',
                date:'',
            },

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
    }
    deleteItem(id){
        const items = this.state.items;
        items.splice(id, 1);
        this.setState({ items });
    }
    formValue=(e)=>{
        e.persist();
        if(e.target.name==='reset'){
            this.setState((item)=>{
                item.form.date=''
            })
        }
        this.setState((prevState) => ({
            form: { ...prevState.form,  [e.target.name]: e.target.value },
        }),this.search)

    }
    search=()=>{
         let filterVal=this.state.form.date
         let search=this.state.form.keyword
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
                           <Link  to={{ pathname:`/task/${item.id}`, state: { item:item } }} className="nav-link">
                               <div className="d-flex align-items-center">
                                   <div className="">
                                       <h6 className="m-b-0 font-16 subject"> {item.subject }  </h6>
                                   </div>
                               </div>
                           </Link>
                       </td>
                       <td>
                           <Link  to={{ pathname:`/task/${item.id}`, state: { item:item } }} className="nav-link">
                               { item.fälligAm}
                           </Link>
                       </td>
                       <td>
                           <Link  to={{ pathname:`/task/${item.id}`, state: { item:item } }} className="nav-link">
                              { item.business_partner}
                           </Link>
                       </td>
                       <td>
                           <Link  to={{ pathname:`/task/${item.id}`, state: { item:item } }} className="nav-link">
                              <label className="">{ item.task }</label>
                           </Link>
                       </td>
                       <td>
                           <Link  to={{ pathname:`/task/${item.id}`, state: { item:item } }} className="nav-link">
                             { item.address }
                           </Link>
                       </td>
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
                    <input   placeholder="search" name="keyword" value={this.state.form.keyword}  onChange={ this.formValue } id="search"  type="text" className="search"/>
                    <input   onChange={this.formValue} name="date" value={this.state.form.date} type="date" id="date"/>
                    <button className='btn btn-danger' name="reset" onClick={this.formValue}>Reset</button>
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


