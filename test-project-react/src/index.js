import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// from boiler
// const root = ReactDOM.createRoot(document.getElementById('root'));

// old way get warning
// ReactDOM.render(<App />, document.getElementById('root'));

// React 18
const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);