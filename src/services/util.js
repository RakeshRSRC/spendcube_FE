import React from 'react'
import { createBrowserHistory } from 'history';
import { Spinner } from 'react-bootstrap';

const history = createBrowserHistory();

const spinner = <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
</Spinner>;

const APP_CONFIG = {
    history: history,
    globalSpinner: spinner
};

export default APP_CONFIG;