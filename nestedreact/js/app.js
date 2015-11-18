import 'es5-shim'
import 'es5-shim/es5-sham'

import React from 'nestedreact'
import App from './components.jsx'

React.render(
    React.createElement( App, null ),
    document.getElementById( 'flux-app' )
);
