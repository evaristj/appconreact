import React, { Component, PropTypes } from 'react';

class App extends Component {
    render () {
        return (
            <div>
                <header>Ecommerce</header>
                {this.props.children}
                <footer>@Evarist 2018</footer>
            </div>
        );
    }
}

// para no mostrar errores en la consola del navegador
App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;