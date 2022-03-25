import './header.css';

function Header(props) {
  return (
    <header>
      <a href='/' className='logo'>
        REACT
      </a>
      <nav>
        {props.navData.map((navObj) => (
          <a key={navObj.title} href={navObj.link} className='nav-link'>
            {navObj.title}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
