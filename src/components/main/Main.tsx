import Button from './button/Button';
import Cards from './cards/Cards';
import Info from './info/Info';
import m from './Main.module.scss';

const Main = () => {
  return (
    <section className={m.main}>
      <figure className={m['main__figure']}>
        <img
          className={m['main__figure-img']}
          src="/images/illustration-intro.webp"
          alt="Intro illustration"
        />
      </figure>
      <article className={m['main__content']}>
        <h1 className={m['main__title']}>
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className={m['main__paragraph']}>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <Button title="Get Started" />
      </article>
      <Info
        imgSrc="/images/icon-access-anywhere.svg"
        imgAlt="Devices icon"
        title="Access your files, anywhere"
        paragraph="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
      />
      <Info
        imgSrc="/images/icon-security.svg"
        imgAlt="Shield icon"
        title="Security you can trust"
        paragraph="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
      />
      <Info
        imgSrc="/images/icon-collaboration.svg"
        imgAlt="Clock icon"
        title="Real-time collaboration"
        paragraph="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
      />
      <Info
        imgSrc="/public/images/icon-any-file.svg"
        imgAlt="Files icon"
        title="Store any type of file"
        paragraph="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
      />
      <article></article>
      <Cards />
      <Cards />
      <Cards />
    </section>
  );
};

export default Main;
