import React from 'react'; 
import ReactDOM from 'react-dom/client';
import Demo, {A} from './Demo';
import Box from './Box';



const root = ReactDOM.createRoot(document.getElementById('hello'));
root.render(
  <>
    <Demo />
    <Box />
  </>
);

// return(
// <% include() %>
// )
