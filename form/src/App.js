import './App.css';
import {useState} from 'react';

function App() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");

  const [items, setItems] = useState([]);

  const addInfo = () => {
    const item = {
      id:Math.random()*1000,
      value:[first, last, email, num]
    }

    setItems(oldItems => [...oldItems, item])
    
    console.log(items);
    
    setFirst("");
    setLast("");
    setEmail("");
    setNum("");
  }

  const deleteInfo = (id) => {
    const arr = items.filter(item => item.id !== id)
    setItems(arr);
    console.log(items);
  }
  return (
    <div className="App">
      <h1>Personal Information Form</h1>

      <input
        type="text"
        placeholder="Enter First Name"
        onChange={e => setFirst(e.target.value)}
        value={first}
      />

      <input
        type="text"
        placeholder="Enter Last Name"
        onChange={e => setLast(e.target.value)}
        value={last}
      />

      <input
        type="text"
        placeholder="Enter Email"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />

      <input
        type="text"
        placeholder="Enter Phone Number"
        onChange={e => setNum(e.target.value)}
        value={num}
      />

      <button onClick={addInfo} type="submit">Submit</button>

    <table>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Phone</th>
    </tr>

        {items.map(item => {
          return<tr key={item.id}>
            <td >{item.value[0]}</td>
            <td>{item.value[1]}</td>
            <td>{item.value[2]}</td>
            <td>{item.value[3]}</td>
            <button onClick={() => deleteInfo(item.id)} type="button">Delete</button>
          </tr>
        })}
  </table>
    </div>
    
  );
}

export default App;
