import './header.css';

function Header() {
  return (
    <header>
      <a href='/' className='logo'>
        REACT
      </a>
      <nav>
        <a href='/' className='nav-link'>
          Home
        </a>
        <a href='/' className='nav-link'>
          About
        </a>
        <a href='/' className='nav-link'>
          Contact us
        </a>
      </nav>
    </header>
  );
}

export default Header;
