import Button from './button/Button';
import Cards from './cards/Cards';
import Info from './info/Info';
import m from './Main.module.scss';
import infoData from '../../data/infoData.json';

const Main = () => {
  return (
    <main className={m.main}>
      <header>
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
            width="240px"
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
    </main>
  );
};

export default Main;
