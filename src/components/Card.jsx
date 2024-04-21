import "./Card.css"

function Card(props) {
  return (
    <div className='card'>
      <div className='card-content'>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card