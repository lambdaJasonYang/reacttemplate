/* eslint-disable no-unneeded-ternary */
import { Children } from "react";

interface ITabItem {
  first?: boolean;
  label: string;
  children: any;
}

const TabItem = ({ first = false, label, children }: ITabItem): JSX.Element => {
  const id: string = `${label}-tab-pane`;
  const classNameFst: string = first ? "show active" : "";
  return (
    <div
      className={`tab-pane fade ${classNameFst} `}
      id={id}
      role="tabpanel"
      aria-labelledby={label}
      tabIndex={0}
    >
      {children}
    </div>
  );
};

interface ITabs {
  children: any;
}

const Tabs = ({ children }: ITabs): JSX.Element => {
  return (
    <div className="col-11">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {Children.map(children, (x) => {
          const isFirstchild: boolean = x.props.first;
          const classNameFst: string = isFirstchild ? "active" : "";
          const ariaselected: boolean = isFirstchild ? true : false;

          const label: string = x.props.label;
          const id: string = `${label}-tab`;
          const ariacontrols: string = `${label}-tab-pane`;
          const databstarget: string = `#${label}-tab-pane`;
          return (
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${classNameFst}`}
                id={id}
                data-bs-toggle="tab"
                data-bs-target={databstarget}
                type="button"
                role="tab"
                aria-controls={ariacontrols}
                aria-selected={ariaselected}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="tab-content" id="myTabContent">
        {children}
      </div>
    </div>
  );
};

export { Tabs, TabItem };
