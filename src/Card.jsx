function Card(props) {
  return (
    <div className='card' onClick={() => props.clickCard(props.card.id)}>
      <img src={props.card.image} alt={props.card.name} />
      <p>{props.card.name}</p>
    </div>
  );
}

export default Card;
