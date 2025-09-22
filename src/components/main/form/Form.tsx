import Button from '../button/Button';
import f from './Form.module.scss';

const Form = () => {
  return (
    <form
      className={f.form}
      action="#"
    >
      <h3 className={f['form__title']}>Get early access today</h3>
      <p className={f['form__description']}>
        It only takes a minute to sign up and our free starter tier is
        extremely, generous. If you have any questions, our support team would
        be happy to help you.
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
          type="email"
          name="email"
          className={f['form__input']}
          placeholder="email@example.com"
          required
        />
        <Button
          title="Get Started For Free"
          width="280px"
        />
      </div>
    </form>
  );
};

export default Form;
