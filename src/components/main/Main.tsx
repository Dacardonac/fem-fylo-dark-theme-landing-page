import Button from './button/Button';
import Cards from './cards/Cards';
import Info from './info/Info';
import m from './Main.module.scss';
import infoData from '../../data/infoData.json';
import Form from './form/Form';
import { useEffect, useState } from 'react';

function useIsDesktop(breakpoint = 768) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= breakpoint);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isDesktop;
}

const Main = () => {
  const isDesktop = useIsDesktop(768);

  return (
    <main className={m.main}>
      <header className={m['main__header']}>
        <figure className={m['main__figure']}>
          <img
            className={m['main__figure-img']}
            src="/images/illustration-intro.webp"
            alt="Intro illustration"
            width={304}
            height={225}
          />
        </figure>
        <div className={m['main__content']}>
          <h1 className={m['main__title']}>
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className={m['main__paragraph']}>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <Button
            title="Get Started"
            width={isDesktop ? '280px' : '240px'}
          />
        </div>
      </header>
      <section
        aria-label="Features"
        className={m['main__features']}
      >
        {infoData.map((item, idx) => (
          <Info
            key={idx}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            title={item.title}
            paragraph={item.paragraph}
          />
        ))}
      </section>
      <section className={m['main__productive']}>
        <figure className={m['main__productive-figure']}>
          <img
            className={m['main__productive-img']}
            src="/images/illustration-stay-productive.webp"
            alt="Stay productive illustration"
          />
        </figure>
        <div className={m['main__productive-content']}>
          <h2 className={m['main__productive-title']}>
            Stay productive, wherever you are
          </h2>
          <p className={m['main__productive-paragraph']}>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className={m['main__productive-paragraph']}>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <div className={m['main__productive-link']}>
            <a
              className={m['main__productive-a']}
              href="#"
            >
              See how Fylo works
            </a>
            {/* <img src="/public/images/svg/icon-arrow.svg" alt="Arrow icon" /> */}
            <svg
              className={m['main__productive-link-icon']}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <circle
                  id="b"
                  cx="6"
                  cy="6"
                  r="6"
                />
                <filter
                  x="-25%"
                  y="-25%"
                  width="150%"
                  height="150%"
                  filterUnits="objectBoundingBox"
                  id="a"
                >
                  <feOffset
                    in="SourceAlpha"
                    result="shadowOffsetOuter1"
                  />
                  <feGaussianBlur
                    stdDeviation="1"
                    in="shadowOffsetOuter1"
                    result="shadowBlurOuter1"
                  />
                  <feColorMatrix
                    values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0"
                    in="shadowBlurOuter1"
                  />
                </filter>
              </defs>
              <g
                fill="none"
                fillRule="evenodd"
              >
                <g transform="translate(2 2)">
                  <use
                    fill="#000"
                    filter="url(#a)"
                    xlinkHref="#b"
                  />
                  <use
                    fill="currentColor"
                    xlinkHref="#b"
                  />
                </g>
                <path
                  d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z"
                  fill="#1B2330"
                />
              </g>
            </svg>
          </div>
        </div>
      </section>
      <section aria-label="Testimonials">
        <Cards
          showQuote={true}
          imgSrc="/images/profile-1.webp"
          imgAlt="Satish Patel image profile"
          name="Satish Patel"
        />
        <Cards
          imgSrc="/images/profile-2.webp"
          imgAlt="Bruce McKenzie image profile"
          name="Bruce McKenzie"
        />
        <Cards
          imgSrc="/images/profile-3.webp"
          imgAlt="Iva Boyd image profile"
          name="Iva Boyd"
        />
      </section>
      <Form />
    </main>
  );
};

export default Main;
