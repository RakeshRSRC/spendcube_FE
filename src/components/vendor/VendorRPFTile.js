import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { Button, Form, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default class VendorRPFTile extends React.Component {
    constructor(props) {
        super(props);
        console.log("Inside the VendorRPFTile component --->");
        console.log(props);
        this.state = {};
    }

    _onSelect = () => {
        console.log("!!")
    }

    render() {
        return (
            <div className="rpf-tile">
                <div className="rpf-tile-drpdwn">
                    <div className="rpf-tile-drpdwn">
                        <Dropdown options={this.props.productCategories}
                            onChange={this._onSelect}
                            className='vendor-rpf-drpdwn'
                            placeholder="Category" />
                        <Dropdown options={this.props.locations}
                            onChange={this._onSelect}
                            className='vendor-rpf-drpdwn'
                            placeholder="Location" />
                    </div>
                    <div className="rpf-tile-incoterm-section">
                        <Row>
                            <Col className="rfp-lbl-col">
                                <Form.Control placeholder="Region" />
                            </Col>
                            <Col>
                                <Dropdown options={this.props.incoterms}
                                    onChange={this._onSelect}
                                    className='vendor-rpf-drpdwn'
                                    placeholder="Incoterm" />
                            </Col>
                        </Row>
                    </div>
                    <Button className="rpf-tile-add-btn" >+Add More</Button>
                </div>
                <Button className="rpf-tile-foot-btn first-btn" >Generate Template</Button>
                <Button className="rpf-tile-foot-btn second-btn" >Upload Template</Button>
                <FontAwesomeIcon className="rpf-tile-del-icn" icon={faTrash} title="Delete RFP" />
            </div>
        )
    }
}