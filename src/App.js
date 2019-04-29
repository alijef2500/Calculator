import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from "reactstrap";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            Home
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Router>
              <div>
                <Header />

                <Route path="/convertor" component={Convertor} />
                <Route path="/calculator" component={Calculator} />
              </div>
            </Router>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

class Convertor extends React.Component {
  render() {
    return (
      <div>
        <h2>Convertor</h2>
      </div>
    );
  }
}

function Calculator() {
  return (
    <div>
      <h2>Calculator</h2>
    </div>
  );
}

function Header() {
  return (
    <Nav navbar>
      <NavItem>
        <Link to="/calculator">Calculator</Link>
      </NavItem>
      <NavItem>
        <Link to="/convertor">Convertor</Link>
      </NavItem>
    </Nav>
  );
}

export default App;
