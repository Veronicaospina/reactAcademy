import './Button.css';

function Button({ className, texto, onClick }) {
  return (
    <button className={['button', className].filter(Boolean).join(' ')} onClick={onClick}>
      {texto}
    </button>
  );
}

export default Button;
