import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchSmurfs } from "./actions";

import Header from './components/Header';
import SmurfList from './components/SmurfList';
import AddForm from './components/AddForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = ({ dispatch }) => {

  useEffect(() => {
    dispatch(fetchSmurfs());
  }, []);
 
  return (
    <div className="App">
      <Header />
      <main>
        <SmurfList />
        <AddForm />
      </main>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
  };
}

export default connect(mapStateToProps)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.