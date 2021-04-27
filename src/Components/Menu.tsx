
import { Link } from "react-router-dom";

interface MenuItem {
  title: string,
  route: string
}

interface MenuProps {
  menuItems: MenuItem[]
}

const Menu = ({ menuItems }: MenuProps) => (
  <div style={{
    display: 'flex',
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    color: "pink",
    borderBottom: '1px solid lightgray',
  }}>
    <div style={{ flexWrap: 'wrap' }}>
      <h1 style={{ margin: 0 }}>
        TSM Tracker
      </h1>
    </div>
    <div style={{ flexGrow: 1 }}>
      <ul>
        {menuItems.map((item) => (
          <li style={{ display: 'inline-block', textDecoration: 'none', marginLeft: '1rem' }}>
            <Link to={item.route}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Menu;
