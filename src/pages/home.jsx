import { useState } from "react";
import Cards from "./cards";

export default function Home() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [cards, setCards] = useState([]);
  const preventDefault=(e)=>{
    e.preventDefault()
  }

const sendInfo=()=>{
  const items = {
    name:name,
    number:number
  }
  setCards((prevItems)=>{
    return[...prevItems,items]
  })
  setName('')
  setNumber('')
}

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={preventDefault} className="d-flex justify-content-center align-items-center flex-column">
        <div className="w-25">
          <label>Name: </label>
          <input value={name} onChange={(e)=> setName(e.target.value)} type="text" className="form-control" />
        </div>
        <div className="w-25">
          <label>Number: </label>
          <input value={number} onChange={(e)=> setNumber(e.target.value)} type="text" className="form-control" />
        </div>
        <button onClick={sendInfo} className="btn btn-primary rounded-5 mt-3 w-25">Submit</button>
      </form>
      <div className="container">
        <Cards cards={cards} setCards={setCards}></Cards>
      </div>
    </div>
  );
}
