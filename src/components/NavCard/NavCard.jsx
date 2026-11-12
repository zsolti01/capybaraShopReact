import './NavCard.css'

export default function NavCard({src, title, link}) {
  return (
    <div className="card" style={{width: "25rem", margin: "20px", height: "20rem"}}>
      <img src={src} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <a href={link} className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}
