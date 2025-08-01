import c from './Cards.module.scss';

interface CardsProps {
  imgSrc?: string;
  imgAlt?: string;
  name?: string;
  showQuote?: boolean;
}

const Cards = ({ imgSrc, imgAlt, name, showQuote }: CardsProps) => (
  <article className={c.cards}>
    {showQuote && (
      <span className={c['cards__quote']} aria-hidden="true">
        <img className={c['cards__quote-img']} src="/images/bg-quotes.webp" alt="Quotes icon" />
      </span>
    )}
    <p className={c['cards__text']}>
      Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
    </p>
    <footer className={c['cards__footer']}>
      <img className={c['cards__avatar']} src={imgSrc} alt={imgAlt} />
      <div className={c['cards__profile']}>
        <span className={c['cards__name']}>{name}</span>
        <span className={c['cards__role']}>Founder &amp; CEO, Huddle</span>
      </div>
    </footer>
  </article>
);

export default Cards;
