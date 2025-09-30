import f from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={f.footer}>
      <div className={f['footer__logo']}>
        <a href="/">
          <img
            src="/images/svg/logo.svg"
            alt="Fylo logo"
          />
        </a>
      </div>
      <div className={f['footer__container']}>
        <address className={f['footer__contact']}>
          <div className={f['footer__contact-item']}>
            <img
              src="/images/svg/icon-location.svg"
              alt="Location icon"
              className={f['footer__icon']}
            />
            <p className={`${f['footer__contact-text']}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className={f['footer__contact-div']}>
            <div className={`${f['footer__contact-item']} ${f['row']}`}>
              <img
                src="/images/svg/icon-phone.svg"
                alt="Phone icon"
                className={f['footer__icon']}
              />
              <a
                href="tel:+15431234567"
                className={f['footer__contact-link']}
              >
                +1-543-123-4567
              </a>
            </div>
            <div className={`${f['footer__contact-item']} ${f['row']}`}>
              <img
                src="/images/svg/icon-email.svg"
                alt="Email icon"
                className={f['footer__icon']}
              />
              <a
                href="mailto:example@fylo.com"
                className={f['footer__contact-link']}
              >
                example@fylo.com
              </a>
            </div>
          </div>
        </address>
        <nav
          className={f['footer__nav']}
          aria-label="Footer navigation"
        >
          <ul className={f['footer__nav-list']}>
            <li className={f['footer__nav-item']}>
              <a
                href="#"
                className={f['footer__nav-link']}
              >
                About Us
              </a>
            </li>
            <li className={f['footer__nav-item']}>
              <a
                href="#"
                className={f['footer__nav-link']}
              >
                Jobs
              </a>
            </li>
            <li className={f['footer__nav-item']}>
              <a
                href="#"
                className={f['footer__nav-link']}
              >
                Press
              </a>
            </li>
            <li className={f['footer__nav-item']}>
              <a
                href="#"
                className={f['footer__nav-link']}
              >
                Blog
              </a>
            </li>
          </ul>
          <ul className={f['footer__nav-list']}>
            <li className={f['footer__nav-item']}>
              <a
                href="#"
                className={f['footer__nav-link']}
              >
                Contact Us
              </a>
            </li>
            <li className={f['footer__nav-item']}>
              <a
                href="#"
                className={f['footer__nav-link']}
              >
                Terms
              </a>
            </li>
            <li className={f['footer__nav-item']}>
              <a
                href="#"
                className={f['footer__nav-link']}
              >
                Privacy
              </a>
            </li>
          </ul>
        </nav>
        <div className={f['footer__social']}>
          <a
            href="https://facebook.com/"
            target="_blank"
            className={f['footer__social-link']}
            aria-label="Facebook"
          >
            <img
              src="/images/svg/facebook-f-brands-solid-full.svg"
              alt="Facebook"
            />
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            className={f['footer__social-link']}
            aria-label="Twitter"
          >
            <img
              src="/images/svg/twitter-brands-solid-full.svg"
              alt="Twitter"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className={f['footer__social-link']}
            aria-label="Instagram"
          >
            <img
              src="/images/svg/instagram-brands-solid-full.svg"
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
