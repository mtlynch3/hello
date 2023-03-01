import './css/Card.css'

function Card (props) {
    return (
        <div className="card">
          <img src={props.img} alt="lodging img" />
          <p>
            {props.description}
          </p>
        </div>
    );
}

export default Card;
