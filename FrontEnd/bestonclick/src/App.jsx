import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

library.add(faStar, faStarHalfAlt, farStar);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    </>
  )
}

export default App
