function NumberButton({ value, numClick }) {
  return (
    <div className="calc-btn cmb-10" onClick={() => numClick(value)}>
      {value}
    </div>
  );
}

export default NumberButton;
