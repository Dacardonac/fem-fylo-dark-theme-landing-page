import Button from '../button/Button';
import f from './Form.module.scss';
import { useState } from 'react';

const Form = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === '' || !emailRegex.test(email)) {
      setError('Error, please check your email');
    } else {
      setError(null);
      console.info(email);
      setEmail('');
    }
  };

  return (
    <form
      className={f.form}
      action="#"
      onSubmit={handleSubmit}
    >
      <h3 className={f['form__title']}>Get early access today</h3>
      <p className={f['form__description']}>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>

      <label
        htmlFor="email"
        className={`${f['form__label']} ${f['form__label--visually-hidden']}`}
      >
        Email address
      </label>

      <div className={f['form__group']}>
        <input
          id="email"
          //type="email"
          //required
          name="email"
          className={f['form__input']}
          placeholder="email@example.com"
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onClick={() => setError(null)}
        />

        <Button
          title="Get Started For Free"
          width="17.5rem"
        />
      </div>
      {error && <span className={f['form__error']}>{error}</span>}
    </form>
  );
};

export default Form;
