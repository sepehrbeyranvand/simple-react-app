export default function Cards(props) {
  const rmBox = (id) => {
    props.setCards(
      props.cards.filter((e) => {
        return id !== e.number;
      })
    );
  };
  return (
    <div>
      <div>
        {props.cards.map((e, index) => (
          <div key={index} className="innerDiv w-100 p-4">
            <h1>{e.name}</h1>
            <p>{e.number}</p>
            <div className="d-flex justify-content-center align-items-center">
              <button
                onClick={() => rmBox(e.number)}
                className="btn btn-danger rounded-pill w-25"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
