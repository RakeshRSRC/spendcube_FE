import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import './UnderconstructionCSS.css'

export default class Underconstruction extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className="under-construction-body">
                        <FontAwesomeIcon className="under-construction-icn-1" icon={faCog} spin />
                        <FontAwesomeIcon className="under-construction-icn-2" icon={faCog} spin />
                        <FontAwesomeIcon className="under-construction-icn-3" icon={faCog} spin />
                    </Col>
                </Row>
            </Container>
        )
    }
}