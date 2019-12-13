import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import createSingleChart from '../charts_global/BarChart';

export default class ProductView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        createSingleChart('chart-box-1', 'Price');
        createSingleChart('chart-box-2', 'Delivery');
        createSingleChart('chart-box-3', 'Quantity');
        createSingleChart('chart-box-4', 'Loyalty');
    }

    render() {
        const options = ['Filter 1', 'Filter 2', 'Filter 3', 'Filter 4']
        return (
            <Container>
                <Row className="product-vw-filter-container">
                    <Col><Dropdown options={options} placeholder="Category"/></Col>
                    <Col><Dropdown options={options} placeholder="Product"/></Col>
                    <Col><Dropdown options={options} placeholder="Location"/></Col>
                    <Col><Dropdown options={options} placeholder="Region"/></Col>
                    <Col><Dropdown options={options} placeholder="Incoterm"/></Col>
                </Row>
                <Row>
                    <Col id="chart-box-1" ></Col>
                    <Col id="chart-box-2" ></Col>
                </Row>
                <Row>
                    <Col id="chart-box-3" ></Col>
                    <Col id="chart-box-4" ></Col>
                </Row>
            </Container>
        );
    }
}