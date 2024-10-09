export default function Event({Month, Day, Start, End, Title, Desc}){
    return(
       <div style={{display: 'flex'}}>
        <div className="eventDateTime">
            <text className="eventMonth">{Month}</text>
            <br />
            <text className="eventDay">{Day}</text>
            <br />
            <p className="eventTime">{Start} - {End}</p>
            </div>
            <div className="eventBody">
                <p className="eventHeader">{Title}</p>
                <p className="eventDesc">{Desc}</p>
            </div>
       </div>
    )
}