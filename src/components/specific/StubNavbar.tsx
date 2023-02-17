import {
  NavBar,
  NavLogo,
  NavItem,
  NavDropDown,
  NavDropDownItem,
  NavDropDownDivider,
  NavSearch,
} from "../Navbar";

const StubNavbar = (): JSX.Element => {
  return (
    <NavBar
      logo={
        <NavLogo
          src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/atom.svg"
          label="HI"
        />
      }
    >
      <NavItem label="BootStrapPlayground" link="/playground" />
      <NavItem label="NetworkScanner" link="/networkscan" />
      <NavDropDown label="DropDown" link="#">
        <NavDropDownItem href={""} label={"Stuff"} />
        <NavDropDownDivider />
        <NavDropDownItem href={""} label={"More Stuff"} />
        <NavDropDownItem href={""} label={"Too Much Stuff"} />
      </NavDropDown>
      <NavSearch />
    </NavBar>
  );
};

export { StubNavbar };
