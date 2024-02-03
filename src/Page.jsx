import './Page.css';

function Page({ title, imageUrl, alt, contentLines }) {
    return (
        <div className={`page`}>
            <h2>{title}</h2>
            <img src={imageUrl} alt={alt}/>
            {contentLines.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </div>
    );
}

export default Page;
