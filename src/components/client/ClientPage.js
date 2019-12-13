import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ClientMainCss.css';
import ProductView from './dashboard_view/ProductView';
import Underconstruction from '../under_construction_page/Underconstruction';

export default class ClientPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Tabs className="client-tab-container">
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Map View</Tab>
                    <Tab>Product View</Tab>
                    <Tab>Incoterm View</Tab>
                </TabList>
                <TabPanel>
                    <ProductView></ProductView>
                </TabPanel>
                <TabPanel>
                    <Underconstruction></Underconstruction>
                </TabPanel>
                <TabPanel>
                    <Underconstruction></Underconstruction>
                </TabPanel>
                <TabPanel>
                    <Underconstruction></Underconstruction>
                </TabPanel>
            </Tabs>
        )
    }
}