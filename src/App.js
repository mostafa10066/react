import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks'
import Task from './components/Task'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
library.add(faTrash)
function App() {
  return (
      <Router>
    <div className="App">

        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
             data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
            <header className="topbar" data-navbarbg="skin5">
                <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                    <div className="navbar-header" data-logobg="skin5">

                        <a className="navbar-brand" href="index.html">

                            <b className="logo-icon">


                            </b>

                            <span className="logo-text">

                                <img src="../../assets/images/logo-text.png" alt="homepage" className="dark-logo"/>

                                <img src="../../assets/images/logo-light-text.png" className="light-logo"
                                     alt="homepage"/>
                        </span>
                        </a>

                        <a className="nav-toggler waves-effect waves-light d-block d-md-none"
                           href="javascript:void(0)"><i className="ti-menu ti-close"></i></a>
                    </div>

                    <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">



                        <ul className="navbar-nav float-left mr-auto">

                            <li className="nav-item search-box"><a className="nav-link waves-effect waves-dark"
                                                                   href="javascript:void(0)"><i
                                className="ti-search"></i></a>

                            </li>
                        </ul>

                        <ul className="navbar-nav float-right">

                            <li className="nav-item dropdown">

                                <div className="dropdown-menu dropdown-menu-right user-dd animated">
                                    <a className="dropdown-item" href="javascript:void(0)"><i
                                        className="ti-user m-r-5 m-l-5"></i> My Profile</a>
                                    <a className="dropdown-item" href="javascript:void(0)"><i
                                        className="ti-wallet m-r-5 m-l-5"></i> My Balance</a>
                                    <a className="dropdown-item" href="javascript:void(0)"><i
                                        className="ti-email m-r-5 m-l-5"></i> Inbox</a>
                                </div>
                            </li>

                        </ul>
                    </div>
                </nav>
            </header>

            <aside className="left-sidebar" data-sidebarbg="skin6">

                <div className="scroll-sidebar">

                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">

                            <li>

                                <div className="user-profile d-flex no-block dropdown m-t-20">
                                    <div className="user-pic"><img src={process.env.PUBLIC_URL + '/images/1.png'} alt="users"
                                                                   className="rounded-circle" width="40"/></div>
                                    <div className="user-content hide-menu m-l-10">
                                        <a href="javascript:void(0)" className="" id="Userdd" role="button"
                                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <h5 className="m-b-0 user-name font-medium">Steave Jobs <i
                                                className="fa fa-angle-down"></i></h5>
                                            <span className="op-5 user-email"></span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="Userdd">
                                            <a className="dropdown-item" href="javascript:void(0)"><i
                                                className="ti-user m-r-5 m-l-5"></i> My Profile</a>
                                            <a className="dropdown-item" href="javascript:void(0)"><i
                                                className="ti-wallet m-r-5 m-l-5"></i> My Balance</a>
                                            <a className="dropdown-item" href="javascript:void(0)"><i
                                                className="ti-email m-r-5 m-l-5"></i> Inbox</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="javascript:void(0)"><i
                                                className="ti-settings m-r-5 m-l-5"></i> Account Setting</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="javascript:void(0)"><i
                                                className="fa fa-power-off m-r-5 m-l-5"></i> Logout</a>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li className="p-15 m-t-10"><a href="javascript:void(0)"
                                                           className="btn btn-block create-btn text-white no-block d-flex align-items-center"><i
                                className="fa fa-plus-square"></i> <span className="hide-menu m-l-5">Create New</span>
                            </a></li>

                            <li className="sidebar-item"><a
                                className="sidebar-link waves-effect waves-dark sidebar-link" href="index.html"
                                aria-expanded="false"><i className="mdi mdi-view-dashboard"></i><span
                                className="hide-menu">Dashboard</span></a></li>
                            <li className="sidebar-item"><a
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                href="pages-profile.html" aria-expanded="false"><i
                                className="mdi mdi-account-network"></i><span className="hide-menu">Profile</span></a>
                            </li>
                            <li className="sidebar-item"><a
                                className="sidebar-link waves-effect waves-dark sidebar-link" href="table-basic.html"
                                aria-expanded="false"><i className="mdi mdi-border-all"></i><span
                                className="hide-menu">Table</span></a></li>
                            <li className="sidebar-item"><a
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                href="icon-material.html" aria-expanded="false"><i className="mdi mdi-face"></i><span
                                className="hide-menu">Icon</span></a></li>
                            <li className="sidebar-item"><a
                                className="sidebar-link waves-effect waves-dark sidebar-link" href="starter-kit.html"
                                aria-expanded="false"><i className="mdi mdi-file"></i><span
                                className="hide-menu">Blank</span></a></li>
                            <li className="sidebar-item"><a
                                className="sidebar-link waves-effect waves-dark sidebar-link" href="error-404.html"
                                aria-expanded="false"><i className="mdi mdi-alert-outline"></i><span
                                className="hide-menu">404</span></a></li>
                            <li className="text-center p-40 upgrade-btn">
                                <a href="https://wrappixel.com/templates/xtremeadmin/"
                                   className="btn btn-block btn-danger text-white" target="_blank">Upgrade to Pro</a>
                            </li>
                        </ul>

                    </nav>

                </div>

            </aside>

            <div className="page-wrapper">

                <div className="page-breadcrumb">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <h4 className="page-title">Dashboard</h4>
                            <div className="d-flex align-items-center">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="text-right upgrade-btn">
                                <a href="https://wrappixel.com/templates/xtremeadmin/"
                                   className="btn btn-danger text-white" target="_blank">Upgrade to Pro</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">



                    <div className="row">

                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">

                                    <div className="d-md-flex align-items-center">
                                        <div>
                                            <h4 className="card-title">My Tasks</h4>
                                            <h5 className="card-subtitle">Overview of my Tasks</h5>
                                        </div>
                                        <div className="ml-auto">
                                            <div className="dl">
                                                <select className="custom-select">
                                                    <option value="0" selected>Monthly</option>
                                                    <option value="1">Daily</option>
                                                    <option value="2">Weekly</option>
                                                    <option value="3">Yearly</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="table-responsive">

                                        <Switch>
                                        <Route exact path='/' component={Tasks} />
                                        <Route path='/task' component={Task} />
                                        </Switch>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Recent Comments</h4>
                                </div>
                                <div className="comment-widgets scrollable">

                                    <div className="d-flex flex-row comment-row m-t-0">
                                        <div className="p-2"></div>
                                        <div className="comment-text w-100">
                                            <h6 className="font-medium">James Anderson</h6>
                                            <span className="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing and type setting industry. </span>
                                            <div className="comment-footer">
                                                <span className="text-muted float-right">April 14, 2016</span> <span
                                                className="label label-rounded label-primary">Pending</span> <span
                                                className="action-icons">
                                                    <a href="javascript:void(0)"><i className="ti-pencil-alt"></i></a>
                                                    <a href="javascript:void(0)"><i className="ti-check"></i></a>
                                                    <a href="javascript:void(0)"><i className="ti-heart"></i></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row comment-row">
                                        <div className="p-2"></div>
                                        <div className="comment-text active w-100">
                                            <h6 className="font-medium">Michael Jorden</h6>
                                            <span className="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing and type setting industry. </span>
                                            <div className="comment-footer ">
                                                <span className="text-muted float-right">April 14, 2016</span>
                                                <span className="label label-success label-rounded">Approved</span>
                                                <span className="action-icons active">
                                                    <a href="javascript:void(0)"><i className="ti-pencil-alt"></i></a>
                                                    <a href="javascript:void(0)"><i className="icon-close"></i></a>
                                                    <a href="javascript:void(0)"><i
                                                        className="ti-heart text-danger"></i></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row comment-row">
                                        <div className="p-2"></div>
                                        <div className="comment-text w-100">
                                            <h6 className="font-medium">Johnathan Doeting</h6>
                                            <span className="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing and type setting industry. </span>
                                            <div className="comment-footer">
                                                <span className="text-muted float-right">April 14, 2016</span>
                                                <span className="label label-rounded label-danger">Rejected</span>
                                                <span className="action-icons">
                                                    <a href="javascript:void(0)"><i className="ti-pencil-alt"></i></a>
                                                    <a href="javascript:void(0)"><i className="ti-check"></i></a>
                                                    <a href="javascript:void(0)"><i className="ti-heart"></i></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Temp Guide</h4>
                                    <div className="d-flex align-items-center flex-row m-t-30">
                                        <div className="display-5 text-info"><i className="wi wi-day-showers"></i>
                                            <span>73<sup>°</sup></span></div>
                                        <div className="m-l-10">
                                            <h3 className="m-b-0">Saturday</h3>
                                            <small>Ahmedabad, India</small>
                                        </div>
                                    </div>
                                    <table className="table no-border mini-table m-t-20">
                                        <tbody>
                                        <tr>
                                            <td className="text-muted">Wind</td>
                                            <td className="font-medium">ESE 17 mph</td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted">Humidity</td>
                                            <td className="font-medium">83%</td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted">Pressure</td>
                                            <td className="font-medium">28.56 in</td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted">Cloud Cover</td>
                                            <td className="font-medium">78%</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <ul className="row list-style-none text-center m-t-30">
                                        <li className="col-3">
                                            <h4 className="text-info"><i className="wi wi-day-sunny"></i></h4>
                                            <span className="d-block text-muted">09:30</span>
                                            <h3 className="m-t-5">70<sup>°</sup></h3>
                                        </li>
                                        <li className="col-3">
                                            <h4 className="text-info"><i className="wi wi-day-cloudy"></i></h4>
                                            <span className="d-block text-muted">11:30</span>
                                            <h3 className="m-t-5">72<sup>°</sup></h3>
                                        </li>
                                        <li className="col-3">
                                            <h4 className="text-info"><i className="wi wi-day-hail"></i></h4>
                                            <span className="d-block text-muted">13:30</span>
                                            <h3 className="m-t-5">75<sup>°</sup></h3>
                                        </li>
                                        <li className="col-3">
                                            <h4 className="text-info"><i className="wi wi-day-sprinkle"></i></h4>
                                            <span className="d-block text-muted">15:30</span>
                                            <h3 className="m-t-5">76<sup>°</sup></h3>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <footer className="footer text-center">
                    All Rights Reserved by Xtreme Admin. Designed and Developed by <a
                    href="https://wrappixel.com">WrapPixel</a>.
                </footer>

            </div>

        </div>
    </div>


      </Router>
  );
}

export default App;
