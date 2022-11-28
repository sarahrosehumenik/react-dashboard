import "./Navigation.css";

function Navigation() {
  return (
    <div className="Navigation">
      <div className="Navigation-heading">Dashboard</div>
      <nav className="Navigation-nav-items">
        <a href="#widget">Widget</a>
        <a href="#reviews">Reviews</a>
        <a href="#customers">Customers</a>
        <a href="#online">Online Analysis</a>
        <a href="#settings">Settings</a>
      </nav>
    </div>
  );
}

export default Navigation;
