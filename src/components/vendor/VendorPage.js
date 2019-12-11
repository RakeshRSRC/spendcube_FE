import React from 'react';
import axios from 'axios';
import APP_CONFIG from '../../services/util';
import VendorRPFGenerator from './VendorRPFGenerator';

export default class VendorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        return axios.get(`http://127.0.0.1:5000/client/getIncoterms`);
    }

    /* 
        Function to fetch all the clients product categories 
    */
    getClientProductCategories = () => {
        return axios.get(`http://127.0.0.1:5000/client/getProductCategories`);
    }

    /* 
        Function to fetch all the clients Locations 
    */
    getClientLocations = () => {
        return axios.get(`http://127.0.0.1:5000/client/getLocations`);
    }

    componentDidMount = () => {
        Promise.all([this.getClientIncoterms(), this.getClientProductCategories(), this.getClientLocations()])
            .then(([incoterms, productCategories, locations]) => {
                console.log('incoterms');
                console.log(incoterms);
                console.log('productCategories');
                console.log(productCategories);
                console.log('locations');
                console.log(locations);
                this.setState({
                    showDetails: false,
                    incoterms: incoterms,
                    productCategories: productCategories,
                    locations: locations
                });
            });
    }

    render() {
        const whatToShow = this.state.showDetails ? APP_CONFIG.globalSpinner : <VendorRPFGenerator></VendorRPFGenerator>;
        return (whatToShow);
    }
}