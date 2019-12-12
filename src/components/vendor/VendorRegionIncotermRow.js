import React from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

export default class VendorRegionIncotermRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            regionIncotermRowCount: 1
        };
    }

    render() {
        return (<Row className="rpf-vendor-region-row">
            <Col className="rfp-lbl-col">
                <Form.Control placeholder="Region" />
            </Col>
            <Col>
                <Dropdown options={this.props.incoterms}
                    onChange={this.props._onSelect}
                    className='vendor-rpf-drpdwn'
                    placeholder="Incoterm" />
            </Col>
            <FontAwesomeIcon onClick={this.props.removeRegionIncotermRow} className="rpf-vendor-region-del-icn" icon={faMinus} title="Delete" />
        </Row>
        )
    }
}