// Lambda: reactawsfullstackee6e3efc
// REST API endpoint: https://2owsrtfv02.execute-api.us-east-1.amazonaws.com/dev

import './App.css';
import { API } from 'aws-amplify';
import { useState } from 'react';

const APIGateWay = 'apie9111438';
const APIPath = '/customers';

const App = () => {
  const [input, setInput] = useState('');
  const [customers, setCustomers] = useState([]);

  // Function to fetch from our AWS Backend and update customers state
  const getCustomer = (e) => {
    let customerId = e.input;
    API.get(APIGateWay, APIPath + '/' + customerId)
      .then((response) => {
        console.log(response);
        let newCustomers = [...customers];
        newCustomers.push(response);
        setCustomers(newCustomers);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='App'>
      <h1>React with AWS API</h1>
      <div>
        <div>
          <input
            placeholder='Enter an id'
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <br />
        <button onClick={() => getCustomer({ input })}>
          Get Customer From Backend
        </button>
      </div>

      <div>
        <h2 style={{ visibility: customers.length > 0 ? 'visible' : 'hidden' }}>
          AWS Response
        </h2>
        {customers.map((thisCustomer) => {
          return (
            <div key={thisCustomer.customerId}>
              <span>
                <b>CustomerId:</b> {thisCustomer.customerId} -{' '}
                <b>CustomerName</b>: {thisCustomer.customerName}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
