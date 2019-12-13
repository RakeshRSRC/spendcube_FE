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
        
        const data1 = [ 
            {label: 'Vendor A', value: 61}, 
            {label: 'Vendor B', value: 52}, 
            {label: 'Vendor C', value: 22}, 
            {label: 'Vendor D', value: 52},
            {label: 'Vendor E', value: 12}
        ];
        const data2 = [ 
            {label: 'Vendor A', value: 61}, 
            {label: 'Vendor B', value: 44}, 
            {label: 'Vendor C', value: 61}, 
            {label: 'Vendor D', value: 22},
            {label: 'Vendor E', value: 48}
        ];
        const data3 = [ 
            {label: 'Vendor A', value: 111}, 
            {label: 'Vendor B', value: 52}, 
            {label: 'Vendor C', value: 22}, 
            {label: 'Vendor D', value: 45},
            {label: 'Vendor E', value: 111}
        ];
        const data4 = [ 
            {label: 'Vendor A', value: 38}, 
            {label: 'Vendor B', value: 89}, 
            {label: 'Vendor C', value: 22}, 
            {label: 'Vendor D', value: 145},
            {label: 'Vendor E', value: 48}
        ];
        createSingleChart('chart-box-1', 'Price', data1);
        createSingleChart('chart-box-2', 'Delivery', data2);
        createSingleChart('chart-box-3', 'Quantity', data3);
        createSingleChart('chart-box-4', 'Loyalty', data4);
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