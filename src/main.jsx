import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css'
import App from './App.jsx'
import { store } from './redux/store.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* WRAPING THE APP COMPONENT WITH STORE TO PROVIDIDE ACCESS TO REDUX STORE */}
    <Provider store={store}>
      <App />
    </Provider>
 </StrictMode>,
)
