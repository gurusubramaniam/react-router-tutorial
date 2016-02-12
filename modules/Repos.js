import React from 'react'
import { Link } from 'react-router'
import NavLink from './navLink'

export default React.createClass({
    render() {
        return (<div>
            <ul>
                <li><NavLink to="/repos/reackt/react-router">react Router</NavLink></li>
                <li><NavLink to="/repos/facebook/react">React</NavLink></li>
            </ul>
                {this.props.children}
        </div>
        );
    }
});