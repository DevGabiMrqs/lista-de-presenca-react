import './Card.css'


const Card = (props) => {

  return (
    <div className="info">
        <strong>{props.name}</strong>
        <small>{props.time}</small>
    </div>
  )
}

export default Card