import { announcementList } from "./exportLists/announcementList"

export default function Announcement({title, date, body}){
    const announcements = announcementList.map(an =>
        <div key={an.id}>
            <div className="announcement">
                <div className="anTopDiv">
                    <div className="announcementIconContainer" />
                    <text className="anTitle">{an.title}</text>
                </div>
                <div className="anDate">
                    <i>{an.date}</i>
                </div>
                <div className="anBody">
                    {an.body}
                </div>
            </div>
        </div>
    )
    
    return(
        <div>
            {announcements}            
        </div>
    )
}