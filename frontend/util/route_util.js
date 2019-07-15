import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import ServerIndexContainer from '../components/servers/server_index_container';
import HomeIndexContainer from '../components/home/home_index_container';
import HomeIndex from '../components/home/home_index';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.userId)
});

const Auth = ({loggedIn, path, component: Component, exact}) => (
  <Route 
    path={path}
    exact={exact}
    render={ props => (
      loggedIn ? <Redirect to="/servers/@me" /> : <Component {...props}/>
    )}
  />
);

const Protected = ({ loggedIn, path, component: Component }) => (
  <Route 
    path={path}
    render={ props => {
      if (loggedIn) {
        return (
          <div className="protected-div">
            <ServerIndexContainer />
            <Component {...props} />
          </div>
        );
      } else {
        return (
          <Redirect to="/login" />
        );
      } 
    }}
  />
);

const HomeLayout = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={ props => {
      if (loggedIn) {
        return (
          <div className="home-div">
            <ServerIndexContainer />
            <HomeIndex />
            <Component {...props} />
          </div>
        );
      } else {
        return (
          <Redirect to="/login" />
        );
      }
    }}
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

export const HomeLayoutRoute = withRouter(connect(mapStateToProps)(HomeLayout));