import React from 'react'
import ReactDOM from 'react-dom'
import Homepage from './routes/homepage.js'
import Header from './components/Header/Header.js'

function App() {
    return (
        <div>
            <Header/>
            <h1>hêlo</h1>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))

