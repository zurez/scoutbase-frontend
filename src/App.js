import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Countries from './components/countries';
import Landing from './components/landing';


function App() {
  return (
    <Router>
      <Route path="/" component = {Landing}></Route>
      <Route  path = "countries" component = {Countries}></Route>
    </Router>
  );
}

export default App;
