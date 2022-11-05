import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();
root.render(
            <BrowserRouter>

    <QueryClientProvider client={queryClient}>
      

    <App />


</QueryClientProvider>
          </BrowserRouter>          
);
    
reportWebVitals();