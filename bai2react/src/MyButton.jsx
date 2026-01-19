import './MyButton.css';

function MyButton({ type = "primary", children, onClick }) {
  const className = `btn btn-${type}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default MyButton;