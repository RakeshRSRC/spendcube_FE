import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import VendorRegionIncotermRow from './VendorRegionIncotermRow';
import APP_CONFIG from '../../services/util.js';

export default class VendorRPFTile extends React.Component {
    constructor(props) {
        super(props);
        console.log("Inside the VendorRPFTile component --->");
        console.log(props);
        this.state = {
            regionIncotermRowCount: [1]
        };
    }

    _onSelect = () => {
        console.log("!!")
    }

    addMoreRegionIncotermRow = () => {
        let cur_arr = this.state.regionIncotermRowCount;
        cur_arr.push(1);
        this.setState({
            regionIncotermRowCount: cur_arr
        })
    }

    removeRegionIncotermRow = () =>{
        let cur_arr = this.state.regionIncotermRowCount;
        if (cur_arr.length === 1)
            return;
        cur_arr.pop(1);
        this.setState({
            regionIncotermRowCount: cur_arr
        })
    }

    render() {
        return (
            <div id={this.props.rfpID} className="rpf-tile">
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
                        {
                            this.state.regionIncotermRowCount.map((x, index) => {
                                return <VendorRegionIncotermRow
                                    _onSelect={this._onSelect}
                                    incoterms={this.props.incoterms}
                                    removeRegionIncotermRow={this.removeRegionIncotermRow}
                                ></VendorRegionIncotermRow>
                            })
                        }
                    </div>
                    <Button className="rpf-tile-add-btn" onClick={this.addMoreRegionIncotermRow}  >+Add More</Button>
                </div>
                <a href={`${APP_CONFIG.url}/vendor/exportRFT`} rel="noopener noreferrer" target="_blank">
                    <Button className="rpf-tile-foot-btn first-btn" >Generate Template</Button>
                </a>
                <Button className="rpf-tile-foot-btn second-btn" >Upload Template</Button>
                <FontAwesomeIcon onClick={this.props.removeRFPFun} className="rpf-tile-del-icn" icon={faTrash} title="Delete RFP" />
            </div>
        )
    }
}