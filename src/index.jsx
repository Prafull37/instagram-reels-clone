import React from 'react';
import ReactDOM from 'react-dom';

import {QueryClientProvider} from 'react-query'
import { queryClient } from './queries/query-client';

import './index.css'
import App from './App';



function runApplication(){
    const app = document.getElementById("app")
    ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <App/>
    </QueryClientProvider>,app)

}


runApplication();