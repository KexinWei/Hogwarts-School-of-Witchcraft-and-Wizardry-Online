import './Card.css';
function Card({ name, imageUrl, alt, content, setPage }) {
    return (
        <div className="card">
            <h3>{name}</h3>
            <img src={imageUrl} alt={alt} />
            <p>{content}</p>
            {setPage && <button className="more" onClick={(e) => {e.preventDefault(); setPage(name);}}>Learn More</button>}
        </div>
    );
}

export default Card;