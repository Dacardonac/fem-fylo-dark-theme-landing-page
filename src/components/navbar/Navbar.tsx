import h from './Navbar.module.scss';

const Navbar = () => {
  return (
    <header className={h['navbar']}>
      <nav className={h['navbar__container']} aria-label="Main navigation">
        <div className={h['navbar__logo']}>
          <img className={h['navbar__logo-svg']} src="/images/logo.svg" alt="Fylo logo" />
        </div>
        <ul className={h['navbar__links']}>
          <li className={h['navbar__item']}><a className={h['navbar__link']} href="#">Features</a></li>
          <li className={h['navbar__item']}><a className={h['navbar__link']} href="#">Team</a></li>
          <li className={h['navbar__item']}><a className={h['navbar__link']} href="#">Sign In</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
