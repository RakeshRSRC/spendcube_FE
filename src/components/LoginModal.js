import React from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

export default class MyVerticallyCenteredModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    loginUser(){
        console.log("CALLING");
        axios.get(`http://127.0.0.1:5000/vendor/`)
        .then(res => {
            console.log(res);
        })
    }

    render() {
        return (
            <Modal {...this.props} className="login-modal" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">{this.props.whoami} Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} controlId="formBasicEmail">
                            <Form.Label column sm="2"><FontAwesomeIcon className="login-usr-icn" icon={faUser} /></Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="User" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formBasicPassword">
                            <Form.Label column sm="2"><FontAwesomeIcon className="login-key-icn" icon={faKey} /></Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide} className="spnd-btn">Close</Button>
                    <Button onClick={this.loginUser} className="spnd-btn">Login</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}