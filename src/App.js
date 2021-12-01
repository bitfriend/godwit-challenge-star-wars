import React, { useCallback, useState } from 'react';
import './App.css';

function App() {
  const [keyword, setKeyword] = useState('');
  const [users, setUsers] = useState([]);

  const onFetch = useCallback(() => {
    fetch('https://swapi.dev/api/people/')
      .then(res => res.json())
      .then(data => {
        if (!keyword) {
          setUsers(data.results);
        } else {
          const records = data.results.filter(user => user.name.includes(keyword));
          setUsers(records);
        }
      });
  });

  return (
    <div className="App">
      <div>
        <input type="text" value={keyword} onChange={e => setKeyword(e.target.value)} />
        <button onClick={onFetch}>Fetch</button>
      </div>
      <table border="1">
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.height}</td>
              <td>{user.mass}</td>
              <td>{user.hair_color}</td>
              <td>{user.skin_color}</td>
              <td>{user.eye_color}</td>
              <td>{user.birth_year}</td>
              <td>{user.birth_year}</td>
              <td>{user.homeworld}</td>
              <td>{user.created}</td>
              <td>{user.edited}</td>
              <td>{user.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
