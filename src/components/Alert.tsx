type Color = "primary" | "warning" | "info" | "success" | "danger";

interface IProps {
  color: Color;
}
const Alert = ({ color = "primary", ...props }: IProps): JSX.Element => {
  return (
    <div className={`alert alert-${color}`} role="alert">
      A simple primary alert—check it out!
    </div>
  );
};

export default Alert;
