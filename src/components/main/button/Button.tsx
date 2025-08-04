import b from './Button.module.scss';

interface ButtonProps {
  title: string;
  width?: string;
  type?:  'submit';
}

const Button = ({ title, width }: ButtonProps) => {
  return (
    <button
      className={b.button}
      style={{ '--btn-width': width } as React.CSSProperties}
      type="submit"
    >
      {title}
    </button>
  );
}

export default Button;
