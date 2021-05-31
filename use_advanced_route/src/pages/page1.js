import React, {Component} from 'react';
import {Button} from "react-bootstrap";

class Page1 extends Component {
    render() {
        return (
            <div>
                <h1>Page 1</h1>

                <Button variant="primary">Primary</Button>{'   '}
                <Button variant="secondary">Secondary</Button>{' '}
                <Button variant="success">Success</Button>{' '}
                <Button variant="warning">Warning</Button>{' '}

            </div>
        );
    }
}

export default Page1;