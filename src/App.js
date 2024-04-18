import React, { useState } from 'react';
import './App.css';
import { products } from './data.js'


function App() {
  const [filter, setFilter] = useState('');

  const filteredProducts = products.filter((product) =>
    product.company.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Product List</h1>
      <input
        className="uk-input"
        type="text"
        placeholder="Filter by Company"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
        {filteredProducts.map((product) => (
               <table className="uk-table uk-table-striped uk-table-small uk-table-hover" key={product.id}>
               <thead>
                   <tr>
                       <th>Company Name: {product.company}</th>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <td>App Name: {product.app_name}</td>
                   </tr>
                   <tr>
                        <td>Reachable at: {product.email}</td>
                   </tr>
               </tbody>
           </table>
        ))}
        
    </div>
  );
}

export default App;