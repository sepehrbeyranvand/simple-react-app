import { useEffect, useState } from "react";

export default function About() {
  const [url] = useState("http://localhost:3000/root");
  const [items, setItems] = useState([]);
  const [turn, setTurn] = useState(0);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [url]);
  const shuffleCards = () => {
    if (turn === 0) {
      const shufflecards = [...items, ...items]
        .sort(() => Math.random() - 0.5)
        .map((e) => ({ ...e, number: Math.floor(Math.random() * 10000) }));
      setItems(shufflecards);
      setTurn(1);
    } else {
      const shufflecards = [...items].sort(() => Math.random() - 0.5);
      setItems(shufflecards);
    }
  };

  const addCards=()=>{
    alert('Done. All you need to do is just pressing the Shuffle button!')
    setTurn(0)
  }
  return (
    <div className="d-flex justify-contetnt-center align-items-center flex-column gap-4">
      <h1>ShuffleCards-About</h1>
      <button
        onClick={shuffleCards}
        className="btn btn-outline-success w-25  rounded-5"
      >
        Shuffle
      </button>
      <button onClick={addCards} className="btn btn-primary w-25 rounded-5">Do you want more cards to shuffle?</button>

      <div className="d-flex justify-content-center align-items-center flex-wrap flex-row container">
        {items.map((e, index) => (
          <div
            key={index}
            className="d-flex justify-content-center align-items-center flex-column innerDiv w-25"
          >
            <h3 className="text-primary">{e.name}</h3>
            <p>EyeColor: {e.eyeColor}</p>
            <p>ID: {e.id}</p>
            <p>Balance: {e.balance}</p>
            <p style={turn===0? {color:'transparent'} : {color:'black'}}>Number: {e.number}</p>
            {/* <Link to={`/Article/${id}`}>Read More...</Link> */}
          </div>
        ))}
      </div>
    </div>
  );
}
