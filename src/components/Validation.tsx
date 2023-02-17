interface IValid {
  label: string;
  valid: boolean;
}
const Valid = ({
  label = "good",
  valid = true,
  ...props
}: IValid): JSX.Element => {
  return (
    <div className={valid ? "valid-feedback" : "invalid-feedback"}>{label}</div>
  );
};

export { Valid };
