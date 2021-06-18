import './App.css';
// import logo from '../../img/logo.png'
import CharacterLists from './components/CharacterLists.js'
import Search from "./components/Search";


import { useEffect, useState } from "react";
import axios from 'axios'
function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState();

  const getItem = async()=>{
    setIsLoading(true)
    const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
    
    // const actualData = await res.json();

    const actualData=result.data;
    setItems(actualData);
    setIsLoading(false)
  }
  useEffect(()=>{
    getItem();
  },[query]);
  return (
    <div>
      <img className="center" src="/images/logo.png" alt="Logo" />
      <Search getQuery={(q)=>setQuery(q)} />
      <CharacterLists items={items} isLoading={isLoading}/>
    </div>
  );
}

export default App;
