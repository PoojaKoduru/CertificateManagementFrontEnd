import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import User from "./components/user.component";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from "./helpers/history";
import EventBus from "./common/EventBus";
import { RenewForm } from "./components/pages/RenewForm";
import { ValidationForm } from "./components/pages/ValidateForm";
import { DownloadCertificateForm } from "./components/pages/DownloadCertificateForm";
import { RequestForm } from "./components/pages/RequestForm";
import { Welcome } from "./components/pages/Welcome";
import MainNavigation from "./components/layout/MainNavigation";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage());
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    this.props.dispatch(logout());
    this.setState({
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <Router history={history}>
        <div>
          {/* <MainNavigation /> */}
          {/*<nav className="navbar navbar-expand navbar-dark bg-dark">
          
             <div className="navbar-nav mr-auto">
              
              {currentUser && (
                <li className="nav-item">
                  <MainNavigation/>
                </li>
                
              )}
            </div>

            {currentUser ? (
              <div className="navbar-nav">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </nav> */}
          <Navbar
            style={{
              backgroundColor: "#2C2C8B",
            }}
            collapseOnSelect
            expand='lg'
            // bg='#2C2C8B'
            variant='dark'
            className='navbar-responsive textsize mb-5 p-3 '
          >
            <Container>
              {/* https://www.edigitalagency.com.au/wp-content/uploads/telstra-logo-purple-background-800x800.png */}
              {/* <img
                src='https://www.edigitalagency.com.au/wp-content/uploads/telstra-logo-purple-background-800x800.png'
                style={{
                  maxWidth: "80px",
                  maxHeight: "80px",
                  paddingRight: "20px",
                }}
                className='img-fluid'
                alt='Responsive image'
              ></img> */}
              <Navbar.Brand href='#home'>
                <img
                  alt=''
                  src='https://www.edigitalagency.com.au/wp-content/uploads/telstra-logo-purple-background-800x800.png'
                  width='60'
                  height='55'
                  className='d-inline-block align-top'
                />
              </Navbar.Brand>
              <Navbar.Brand
                href='/'
                style={{
                  fontSize: "1.5em",
                  fontWeight: "bold",
                  paddingRight: "90px",
                }}
              >
                Telstra
              </Navbar.Brand>

              <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse id='responsive-navbar-nav'>
                {currentUser ? (
                  <Nav className='me-auto'>
                    <Nav.Link href='/'>
                      <h4>Home</h4>
                    </Nav.Link>
                    <Nav.Link href='/generate'>
                      <h4>Generate</h4>
                    </Nav.Link>
                    <Nav.Link href='/validate'>
                      <h4>Validate</h4>
                    </Nav.Link>
                    <Nav.Link href='/download'>
                      <h4>Download</h4>
                    </Nav.Link>
                    <Nav.Link href='/renew'>
                      <h4>Renew</h4>
                    </Nav.Link>
                  </Nav>
                ) : null}
                {/* <Nav className='me-auto'>
                  <Nav.Link href='/'>Home</Nav.Link>
                  <Nav.Link href='/generate'>Generate</Nav.Link>
                  <Nav.Link href='/validate'>Validate</Nav.Link>
                  <Nav.Link href='/download'>Download</Nav.Link>
                  <Nav.Link href='/renew'>Renew</Nav.Link>
                </Nav> */}
              </Navbar.Collapse>
              {currentUser ? (
                <Navbar.Collapse
                  className='justify-content-end'
                  id='responsive-navbar-nav'
                >
                  <Nav>
                    <Nav.Link href='/profile'>
                      <h4>Profile</h4>
                    </Nav.Link>
                    <Nav.Link href='/login' onClick={this.logOut}>
                      <h4>Logout</h4>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              ) : (
                <Navbar.Collapse
                  className='justify-content-end'
                  id='responsive-navbar-nav'
                >
                  <Nav>
                    <Nav.Link href='/login'>
                      <h4>Login</h4>
                    </Nav.Link>
                    <Nav.Link href='/register' className='nav-link'>
                      <h4>Sign Up</h4>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              )}
            </Container>
          </Navbar>

          <div className='container mt-3'>
            <Switch>
              <Route exact path={["/register"]} component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/user' component={User} />
              <Route exact path='/renew' component={RenewForm} />
              <Route exact path='/validate' component={ValidationForm} />
              <Route
                exact
                path='/download'
                component={DownloadCertificateForm}
              />
              <Route exact path='/generate' component={RequestForm} />
              <Route exact path='/' component={Welcome} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);
