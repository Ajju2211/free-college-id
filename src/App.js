import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import CollegeForm from "./components/CollegeForm/CollegeForm";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./App.css"
import Errorpage from "./components/Error/Errorpage";
export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/college/:id" component={CollegeForm} />
        <Route component={Errorpage} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}
