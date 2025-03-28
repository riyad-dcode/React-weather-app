import React from 'react'
import Weather from './components/Weather'

const App = () => {
  return (
    <div className='app'>
        <h1 className='heading-text'>
          React Weather App
        </h1>
        <Weather />
    </div>
  )
}

export default App