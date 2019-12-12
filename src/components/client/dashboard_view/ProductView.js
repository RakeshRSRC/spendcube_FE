import React from 'react';
import BarChart from '../charts_global/BarChart';
import { Container, Row, Col } from 'react-bootstrap';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export default class ProductView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const options = ['Filter 1', 'Filter 2', 'Filter 3', 'Filter 4']
        return (
            <Container>
                <Row>
                    <Col><Dropdown options={options} /></Col>
                    <Col><Dropdown options={options} /></Col>
                    <Col><Dropdown options={options} /></Col>
                    <Col><Dropdown options={options} /></Col>
                    <Col><Dropdown options={options} /></Col>
                </Row>
                <Row>
                    <Col><BarChart theme="light1"></BarChart></Col>
                    <Col><BarChart theme="light2"></BarChart></Col>
                </Row>
                <Row>
                    <Col><BarChart theme="dark1"></BarChart></Col>
                    <Col><BarChart theme="dark2"></BarChart></Col>
                </Row>
            </Container>
        );
    }
}