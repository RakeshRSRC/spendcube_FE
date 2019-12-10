import React from 'react';
import {Modal, Button, Form, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'

export default function MyVerticallyCenteredModal(props) {
	const who = props.whoami;
	return (
		<Modal {...props} className="login-modal" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">{who} Login</Modal.Title>
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
				<Button onClick={props.onHide} className="spnd-btn">Close</Button>
				<Button onClick={props.onHide} className="spnd-btn">Login</Button>
			</Modal.Footer>
		</Modal>
	);
}