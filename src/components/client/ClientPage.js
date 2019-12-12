import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ClientMainCss.css';
import ProductView from './dashboard_view/ProductView';

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
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <ProductView></ProductView>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 4</h2>
                </TabPanel>
            </Tabs>
        )
    }
}