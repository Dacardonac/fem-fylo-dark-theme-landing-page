import b from './Button.module.scss';

interface ButtonProps {
  title: string;
}

const Button = ({ title }: ButtonProps) => {
  return (
    <button className={b.button}>
      {title}
    </button>
  );
}

export default Button;