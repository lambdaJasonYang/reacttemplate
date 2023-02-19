// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react";

interface IRootTemplate {
  children : React.ReactNode;
}

const RootTemplate = ({children}: IRootTemplate): JSX.Element => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return(
    <>
      {children}
    </>
    )
}

export { RootTemplate };
