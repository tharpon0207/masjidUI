import { prayerList } from "./exportLists/prayerList"
import Prayer from "./Prayer"

export default function Prayers(){
    const prayers = prayerList.map(p =>
        <div key={p.prayer}>
            <Prayer Name={p.prayer} Time={p.time}/>
        </div>
    )
    
    return(
        <div className="prayersDiv">
            {prayers}
        </div>
    )
}