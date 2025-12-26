function OperatorButton({ value, opClick }) {
  return (
    <div className="calc-btn cmb-10" onClick={() => opClick(value)}>
      {value}
    </div>
  );
}

export default OperatorButton;
