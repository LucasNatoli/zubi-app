import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../../helpers';
import { alertActions } from '../../actions'
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import DashBoard from '../DashBoard/DashBoard';
//import PrivateRoute from '../PrivateRoute/PrivateRoute';
import './App.css';
import ConsultingEditor from '../Consulting-draft/ConsultingEditor';

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="zubi-app">
        {alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        <Router history={history}>
            <Route exact path="/" component={DashBoard} page="home"/>
            <Route exact path="/mis-consultorias" component={DashBoard}/>
            <Route exact path="/mis-capacitaciones" component={DashBoard}/>
            <Route exact path="/mis-citas" component={DashBoard}/>
            
            <Route exact path="/editar-consultoria" component={ConsultingEditor}/>
            
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
        </Router>
      </div>
    )
  }
}


function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 