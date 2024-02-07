import './Panel.css';
function Panel({ title, imageUrl, alt, contentLines, houseName, setPage }) {
    return (
        <div className={`panel ${houseName}`}>
            <h3>{title}</h3>
            <img src={imageUrl} alt={alt} />
            {contentLines.map((line, index) => (
                <p key={index} className={`line-${index + 1}`}>{line}</p>
            ))}
            {setPage && <button className="more" onClick={(e) => {e.preventDefault(); setPage(title);}}>Learn More</button>}
        </div>
    );
}

export default Panel;
