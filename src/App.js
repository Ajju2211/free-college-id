import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import CollegeForm from "./components/CollegeForm/CollegeForm";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./App.css"
export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/college/:id" component={CollegeForm} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}
