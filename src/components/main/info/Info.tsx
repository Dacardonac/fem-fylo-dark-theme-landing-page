import i from './Info.module.scss';

interface InfoProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  paragraph: string;
}

const Info = ({ imgSrc, imgAlt, title, paragraph }: InfoProps) => {
  return (
    <section className={i.info}>
      <article className={i['info__article']}>
        <figure className={i['info__figure']}>
          <img
            className={i['info__figure-img']}
            src={imgSrc}
            alt={imgAlt}
          />
        </figure>
        <h2 className={i['info__title']}>{title}</h2>
        <p className={i['info__paragraph']}>{paragraph}</p>
      </article>
    </section>
  );
};

export default Info;
