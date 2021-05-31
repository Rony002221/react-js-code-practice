import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";


class Navigation extends Component {
    render() {
        return (
            <div>

                <Link to = "/"><Button variant="primary">Home</Button>{' '}</Link>
                <Link to = "/page1"><Button variant="success">Page 1</Button>{' '}</Link>
                <Link to = "/page2"><Button variant="danger">Page 2</Button>{' '}</Link>
                <Link to = "/page3"><Button variant="success">Page 3</Button></Link> <br/> <hr/> <hr/>
            </div>
        );
    }
}

export default Navigation;