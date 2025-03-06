const LoadingSpinner = (props) => {
  let bigDivClassName = "d-flex justify-content-center align-items-center";

  if (props.className) {
    bigDivClassName += ` ${props.className}`;
  } else {
    bigDivClassName += " vh-100";
  }

  return (
    <div className={bigDivClassName}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
