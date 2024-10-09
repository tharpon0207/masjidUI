export default function Service({Img, Desc, Start, End}){
    return(
        <div>
            <div className="services" style={{backgroundImage: `url(${Img})`}}/>
            <p className="servicesDesc">{Desc} <span className="servicesDescTime"> ({Start} - {End}) </span></p>
        </div>
    )
}