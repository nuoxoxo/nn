// import React from 'react'
import ReactDOM from 'react-dom/client'

import TodoApp from './TodoApp'

// from boiler
// const root = ReactDOM.createRoot(document.getElementById('root'));

// old way get warning
// ReactDOM.render(<TodoApp />, document.getElementById('root'));

// React 18
const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render( <TodoApp /> )
}
