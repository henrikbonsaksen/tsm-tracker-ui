
const menuItems = [
  { title: 'Home' },
  { title: 'Some other page' },
  { title: 'About us' },
];

const Menu = () => (
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
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Menu;
