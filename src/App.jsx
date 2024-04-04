import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/navbar';
import data from './Components/data';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const App = () => {
  const [items, setItems] = useState([]);

  // Function to fetch data
  const fetchData = () => {
    setItems(data); // Setting the fetched data to state
  };

  const clearData = () => {
    setItems([]); // Clearing the fetched data from state
  };

  return (
    <div className="container" >
      <Navbar />
      <div className="border rounded p-3 mt-3 text-center" >
        <Button className=" mx-1 my-1" variant="primary" onClick={fetchData} >Fetch Data</Button>
        <Button className="  mx-1 my-1" variant="primary" onClick={clearData} >Clear Data</Button>

        {items.length > 0 ? (
          <ListGroup >
            {items.map(item => (
              <ListGroup.Item key={item.id} style={{ color: 'black', border: '2px solid grey' }}>{item.name}</ListGroup.Item>

            ))}
          </ListGroup>
        ) : (
          <p style={{ color: 'red' }}>No data fetched yet. Click the button to fetch.</p>
        )}
      </div>
    </div>
  );
};

export default App;
