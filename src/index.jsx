import React from 'react';
import ReactDOM from 'react-dom';

import {QueryClientProvider} from 'react-query'
import { queryClient } from './queries/query-client';

import './index.css'
import App from './App';
import StoreProvider from './store/storeContext';



function runApplication(){
    const app = document.getElementById("app")
    ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <StoreProvider>
            <App/>
        </StoreProvider>
    </QueryClientProvider>,app)

}


runApplication();