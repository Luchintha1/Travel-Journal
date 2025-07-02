export default function Entry(props){
    return(
        <article className="main-article">
            <div className="main-img-container">
                <img 
                className="main-img"
                src={props.img.src}
                alt={props.img.alt}/>
            </div>
            <div class="info-container">
                <img 
                className="marker"
                src="./src/assets/images/location_marker.png"
                alt="location-marker" />
                <span className="entry-country">{props.country}</span>
                <a href={props.googleMapsLink} target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="entry-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
                
            </div>

            
        </article>
    )
}