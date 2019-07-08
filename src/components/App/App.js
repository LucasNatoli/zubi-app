import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../../helpers';
import { alertActions } from '../../actions'
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import DashBoard from '../DashBoard/DashBoard';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import './App.css';
import ConsultingEditor from '../Consulting/ConsultingEditor'
import NewConsultancy from '../Consulting/NewConsultancy'

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
        <BrowserRouter history={history}>
          <Switch>
            <PrivateRoute exact path="/" component={DashBoard} page="home" />
            <PrivateRoute exact path="/mis-consultorias" component={DashBoard} page="consulting-list" />
            <PrivateRoute exact path="/mis-capacitaciones" component={DashBoard} page="training-list" />
            <PrivateRoute exact path="/agenda" component={DashBoard} page="agenda" />
            <PrivateRoute exact path="/mis-citas" component={DashBoard} page="mis-citas" />
            <PrivateRoute path="/nueva-consultoria" component={NewConsultancy} />
            <PrivateRoute exact path="/editar-consultoria/:id" component={ConsultingEditor} />
            <PrivateRoute exact path="/mis-mensajes" component={DashBoard} page="mis-mensajes" />

            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
          </Switch>
        </BrowserRouter>
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