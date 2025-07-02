export default function Entry(props){
    return(
        <article className="main-article">
            <div className="main-img-container">
                <img 
                className="main-img"
                src={props.entry.img.src}
                alt={props.entry.img.alt}/>
            </div>
            <div class="info-container">
                <img 
                className="marker"
                src="./src/assets/images/location_marker.png"
                alt="location-marker" />
                <span className="entry-country">{props.entry.country}</span>
                <a href={props.entry.googleMapsLink} target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{props.entry.title}</h2>
                <p className="entry-dates">{props.entry.dates}</p>
                <p className="entry-text">{props.entry.text}</p>
                
            </div>

            
        </article>
    )
}