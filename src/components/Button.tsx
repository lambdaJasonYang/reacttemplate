interface IButton {
  label: string;
  size?: number;
  onClick: any;
}

const Button = ({ label, onClick, size = 2 }: IButton): JSX.Element => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn btn-primary rounded-0 col-${size}`}
    >
      {label}
    </button>
  );
};

export { Button };
