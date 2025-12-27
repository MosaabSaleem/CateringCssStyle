import "../Styles/menuItem.css";

export default function MenuItem({image, title, description}) {
  return (
    <div className="menu-item">
      <img src={image} alt={title} className="menu-item-image" />
      <h3 className="menu-item-title">
        <span className="menu-title-accent">{title}</span>
      </h3>
      <p className="menu-item-description">{description}</p>
    </div>
  );
}