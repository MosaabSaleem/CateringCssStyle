import "../Styles/menuItem.css";

export default function MenuItem() {
  return (
    <div className="menu-item">
      <h3 className="menu-item-title">Menu Item Title</h3>
      <p className="menu-item-description">This is a description of the menu item. It includes ingredients and other relevant details.</p>
      <span className="menu-item-price">$10.00</span>
    </div>
  );
}