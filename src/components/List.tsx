interface IList {
  children?: React.ReactNode;
}

const List = ({ children, ...props }: IList): JSX.Element => {
  return <ul className="list-group">{children}</ul>;
};

interface IListItem {
  key: string;
  label: string;
}
const ListItem = ({ key, label }: IListItem): JSX.Element => {
  return (
    <li className="list-group-item" key={key}>
      {label}
    </li>
  );
};

interface IListLink {
  href: string;
  key: string;
  label: string;
}
const ListLink = ({ key, label, href }: IListLink): JSX.Element => {
  return (
    <li className="list-group-item" key={key}>
      <a href={href}>{label}</a>
    </li>
  );
};

export { List, ListItem, ListLink };
