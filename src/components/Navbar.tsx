// import Image from "next/image";

interface INavBar {
  logo: any;
  children?: React.ReactNode;
}

const NavBar = ({ logo, children, ...props }: INavBar): JSX.Element => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        {logo}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">{children}</ul>
        </div>
      </div>
    </nav>
  );
};

interface ILogo {
  src: string;
  label: string;
}
const NavLogo = ({
  src = "/vercel.svg",
  label = "Logo",
  ...props
}: ILogo): JSX.Element => {
  return (
    <a className="navbar-brand" href="#">
      <img
        src={src}
        className="d-inline-block align-text-top"
        width="50"
        height="50"
        alt="logo"
      />
      {label}
    </a>
  );
};

interface IProps {
  label: string;
  link: string;
}
const NavItem = ({
  label = "his",
  link = "#",
  ...props
}: IProps): JSX.Element => {
  return (
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href={link}>
        {label}
      </a>
    </li>
  );
};

interface INavDropDown {
  label: string;
  link: string;
  children?: React.ReactNode;
}
const NavDropDown = ({
  label = "hiya",
  link = "#",
  children,
  ...props
}: INavDropDown): JSX.Element => {
  return (
    <li className="nav-item dropdown ">
      <a
        className="nav-link dropdown-toggle"
        href={link}
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {label}
      </a>
      <ul className="dropdown-menu rounded-0">{children}</ul>
    </li>
  );
};

interface INavDropDownItem {
  href: string;
  label: string;
}
const NavDropDownItem = ({
  href = "#",
  label = "AHHH",
  ...props
}: INavDropDownItem): JSX.Element => {
  return (
    <li>
      <a className="dropdown-item" href={href}>
        {label}
      </a>
    </li>
  );
};

const NavDropDownDivider = (): JSX.Element => {
  return (
    <li>
      <hr className="dropdown-divider" />
    </li>
  );
};

const NavSearch = (): JSX.Element => {
  return (
    <form className="d-flex justify-content-end" role="search">
      <input
        className="form-control me-2 rounded-0"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success rounded-0" type="submit">
        Search
      </button>
    </form>
  );
};

export {
  NavBar,
  NavItem,
  NavLogo,
  NavDropDown,
  NavDropDownItem,
  NavDropDownDivider,
  NavSearch,
};
