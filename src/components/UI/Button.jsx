function Button({ type, color= 'inherit', name }) {
  let typeClass = type === 'sm' ? 'btn-sm' : '';
//   typeClass = type === 'md' ? 'btn-md' : '';
  return (
    <button style={{ color: color }} className={`btn ${typeClass}`}>
      {name}
    </button>
  );
}
export default Button;
