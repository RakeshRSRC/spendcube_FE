import React from 'react'
import { createBrowserHistory } from 'history';
import { Spinner } from 'react-bootstrap';

const history = createBrowserHistory();

const spinner = <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
</Spinner>;

const APP_CONFIG = {
    history: history,
    globalSpinner: spinner,
    protocol: 'http',
    host: '127.0.0.1',
    port: '8000',
    url: 'http://127.0.0.1:8000'
};

export default APP_CONFIG;