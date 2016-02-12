import React from 'react'
import { Link } from 'react-router'
import NavLink from './navLink'
import Home from './Home'

export default React.createClass({
  render() {
    return (
        <div className="navigation">
          <h1>React Router Tutorial</h1>
          <ul role="Nav">
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/repos">Repo</NavLink></li>
            <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          </ul>
          {this.props.children}
        </div>
    );
  }
})

