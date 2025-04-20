import './Card.css'

const Card = ({ id, name, email }) => {
  return (
    <>
      <div className="card">
        <img src={`https://robohash.org/${id}`} alt="" />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </>
  );
};

export default Card;