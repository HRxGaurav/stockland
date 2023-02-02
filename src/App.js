import React,{createContext,useReducer} from 'react';
import Navbar from "./Components/Navbar";
import {Route,Switch} from "react-router-dom";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Work from "./Components/Work";
import MyStocks from "./Components/MyStocks";
import Logout from "./Components/Logout";
import Profile from "./Components/Profile"
import ErrorPage from './Components/ErrorPage';
import {reducer,initialState} from "../src/reduser/useReducer";
import "./Styles/App.css";

export const users= createContext();
const Render = () =>{
  return(
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route exact path="/Home">
      <Home/>
    </Route>
    <Route path="/Aboutus">
      <Aboutus/>
    </Route>
    <Route path="/Login">
      <Login/>
    </Route>
    <Route path="/Registration">
      <Registration/>
    </Route>
    <Route path="/Work">
      <Work/>
    </Route>
    <Route path="/MyStock">
      <MyStocks/>
    </Route>
    <Route path="/Logout">
      <Logout/>
    </Route>
    <Route path="/Profile">
      <Profile/>
    </Route>
    <Route>
      <ErrorPage/>
    </Route>
    </Switch>
  ) 
}

const App = () => {

const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
    <users.Provider value={{state,dispatch}}>
    <Navbar/>
    <Render/>
    </users.Provider>
    
    </>
  )
}

export default App
