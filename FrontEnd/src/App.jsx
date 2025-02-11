import { BrowserRouter } from "react-router";
// import { BrowserRouter, Routes, Route } from "react-router";
// import { useState } from 'react'
import { Suspense  } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../Components/Footer'
// import updateFooterContent from '../Components/SPComponent/Buttons';
import Header from '../Components/Header';
import Home from '../Components/Home';
// import CategoryList from '../Components/SPComponent/CategoryList';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />

        {/* -------------Here started the Routers----------- */}
        {/* <Routes>
  <Route index element={<Home />} />
  <Route path="about" element={<Home />} />

  <Route element={<Home />}>
    <Route path="login" element={<Home />} />
    <Route path="register" element={<Home />} />
  </Route>

  <Route path="concerts">
    <Route index element={<Home />} />
    <Route path=":city" element={<Home />} />
    <Route path="trending" element={<Home />} />
  </Route>
</Routes> */}

        {/* -------------Here Ended the Routers----------- */}

        
          <Home />
        
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App
