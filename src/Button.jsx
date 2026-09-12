function Button({ className, texto, onClick }) {
  return (
    <button className={className} onClick={onClick} style={{ padding: '10px 20px', cursor: 'pointer' }}>
      {texto}
    </button>
  );
}

export default Button;