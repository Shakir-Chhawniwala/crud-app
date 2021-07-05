import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PostContextProvider } from './store/post-context';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <PostContextProvider>
    <App />
  </PostContextProvider>,
  document.getElementById('root')
);


