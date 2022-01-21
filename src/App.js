import React, { useEffect, Component } from "react";
import { connect } from 'react-redux';
import { fetchSmurfs } from "./actions";

import Header from './components/Header';
import SmurfList from './components/SmurfList';
import AddForm from './components/AddForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = ({ isFetching, error, dispatch })=> {

  useEffect(() => {
    dispatch(fetchSmurfs());
  }, []);

  if(error) {
   return <h2>{error}</h2>;
  }

  if(isFetching) {
    return <h2>Smurfs are loading</h2>;
  }

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
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
}

export default connect(mapStateToProps)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.