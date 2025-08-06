import h from './Navbar.module.scss';

const Navbar = () => {
  return (
    <header className={h.navbar}>
      <nav className={h['navbar__container']} aria-label="Main navigation">
        <div className={h['navbar__logo']}>
          <a href="/index.html" className={h['navbar__logo-link']}><img className={h['navbar__logo-svg']} src="/images/svg/logo.svg" alt="Fylo logo" /></a>
        </div>
        <ul className={h['navbar__links']}>
          <li className={h['navbar__item']}><a className={h['navbar__link']} href="/features">Features</a></li>
          <li className={h['navbar__item']}><a className={h['navbar__link']} href="/team">Team</a></li>
          <li className={h['navbar__item']}><a className={h['navbar__link']} href="/signIn">Sign In</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
