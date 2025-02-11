import ErrorBoundary from '../Components/SPComponent/ErrorBoundary.jsx';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";
import './index.css'
import App from './App.jsx'
// import Footer from '../Components/Footer'


createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </ErrorBoundary>
);
