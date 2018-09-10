// archivo de rutas
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// componentes redux container
import App from './App';
import ProductListContainer from './products/ProductListContainer';

export default(
    <Route path = "/" component={App}>
        <IndexRoute component={ProductListContainer}/>
        
    </Route>
)