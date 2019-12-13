import React from 'react';
import axios from 'axios';
import './VendorRPFTileCSS.css'
import APP_CONFIG from '../../services/util';
import VendorRPFTile from './VendorRPFTile';
import { Button } from 'react-bootstrap';

export default class VendorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rfpCount: [1],
            showDetails: true,
            incoterms: [],
            productCategories: [],
            locations: []
        };
    }

    /* 
        Function to fetch all the clients Incoterms 
    */
    getClientIncoterms = () => {
        return axios.get(`${APP_CONFIG.url}/client/getIncoterms`);
    }

    /* 
        Function to fetch all the clients product categories 
    */
    getClientProductCategories = () => {
        return axios.get(`${APP_CONFIG.url}/client/getProductCategories`);
    }

    /* 
        Function to fetch all the clients Locations 
    */
    getClientLocations = () => {
        return axios.get(`${APP_CONFIG.url}/client/getLocations`);
    }

    componentDidMount = () => {
        Promise.all([this.getClientIncoterms(), this.getClientProductCategories(), this.getClientLocations()])
            .then(([incoterms, productCategories, locations]) => {
                this.setState({
                    showDetails: false,
                    incoterms: incoterms.data,
                    productCategories: productCategories.data,
                    locations: locations.data
                });
            });
    }

    processIncotermForDrpDowns = (incotermsOpt) => {
        return incotermsOpt.map(function(ic) {
            return { value: ic.incoterm_id, label: ic.incoterm_name };
        });
    }

    processCategoryForDrpDowns = (categoryOpt) => {
        return categoryOpt.map(function(ic) {
            return { value: ic.category_id, label: ic.category_name };
        });
    }

    processLocationForDrpDowns = (locationOpt) => {
        return locationOpt.map(function(ic) {
            return { value: ic.location_id, label: ic.location_name };
        });
    }

    addMoreRfp = () => {
        let cur_arr = this.state.rfpCount;
        cur_arr.push(1);
        this.setState({
            rfpCount: cur_arr
        })
    }

    removeRfp = () => {
        let cur_arr = this.state.rfpCount;
        if (cur_arr.length === 1)
            return;
        cur_arr.pop(1);
        this.setState({
            rfpCount: cur_arr
        })
    }

    render() {
        const incotermsOpt = this.processIncotermForDrpDowns(this.state.incoterms);
        const productCategoriesOpt = this.processCategoryForDrpDowns(this.state.productCategories);
        const locationsOpt = this.processLocationForDrpDowns(this.state.locations);
        const rpfView = < div className = "rfp-container" >
            <
            div className = "rpf-container-head" >
            <
            h2 > RPF Generator < /h2> <
            /div> <
            div className = "rpf-tile-container" > {
                this.state.rfpCount.map((x, index) => {
                    return <VendorRPFTile
                    rfpID = { `rfp-tile-${index}` }
                    incoterms = { incotermsOpt }
                    productCategories = { productCategoriesOpt }
                    locations = { locationsOpt }
                    removeRFPFun = { this.removeRfp } >
                        <
                        /VendorRPFTile>
                })
            } <
            Button className = "add-more-rpf-btn"
        onClick = { this.addMoreRfp } > +Add More RPF < /Button> <
            /div> <
            /div>
        const whatToShow = this.state.showDetails ? APP_CONFIG.globalSpinner : rpfView;
        return (whatToShow);
    }
}