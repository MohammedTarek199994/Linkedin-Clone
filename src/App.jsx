import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import { getUserAuth } from "./redux/actions/index";
import { connect } from "react-redux";
import RequireAuth from "./components/RequireAuth";
import PropTypes from "prop-types";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);
  return (
   
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={
                <RequireAuth>
                  <Header />
                  <Home />
                </RequireAuth>
              }
            />
          </Routes>
        </Router>
      </div>

  );
}
const mapStateToProps = (state) => {
  return {
    user : state.userState.user ,
  };
};
const mapDispatchToProps = (disptach) => {
  return {
    getUserAuth: () => disptach(getUserAuth()),
  };
};
App.propTypes = {
  getUserAuth: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
