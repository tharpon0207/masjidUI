export default function ContactBlock({src, alt, label, href}){
    return(
    <div className="contactContainer">
        <img src={src} alt={alt} className="contactImg" />
        <a className="contactLabel" href={href} target="_blank" rel="noreferrer">{label}</a>
    </div>
    )
};