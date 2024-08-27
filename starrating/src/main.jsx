import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import StarRating from './star-rating/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StarRating/>
  </React.StrictMode>,
)
