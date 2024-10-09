export default function Prayer({Name, Time}){
    return(
        <div className="prayerTime">
            <p className="prayerDesc">{Name}: {Time}</p>
        </div>
    )
}