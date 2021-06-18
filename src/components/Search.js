import { useState } from "react";

const Search = ({getQuery}) => {
  const[text, setText] = useState('');
  const onChange=(q)=>{
    setText(q)
    getQuery(q)
  }
  return (
    
    <div className="container">
      <form className="form-inline" >
        <input type="text" placeholder="Search.." className="form-control" autoFocus value={text} onChange={(e)=>onChange(e.target.value)} className="form-control ml-auto mr-auto" ></input>
      </form>
    </div>
  );
}
 
export default Search;