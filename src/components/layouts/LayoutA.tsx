interface IGrid {
  children?: React.ReactNode;
}

/* 
|   1 |           |

*/

const MainGrid = ({ children, ...props }: IGrid): JSX.Element => {
  return (
    <div className="container-fluid text-center">
      <main className="main">
        <div className="row">{children}</div>
      </main>
    </div>
  );
};

interface ICol {
  children?: React.ReactNode;
}
const SideCol = ({ children, ...props }: ICol): JSX.Element => {
  return <div className="col-3">{children}</div>;
};

const ContentCol = ({ children, ...props }: ICol): JSX.Element => {
  return <div className="col-9 d-flex flex-column">{children}</div>;
};

/* How to use:
<MainGrid>
  <SideCol>
    blahblabhblabh
  </SideCol>
  <ContentCol>
    balbhabhalb
  </ContentCol>
</MainGrid>
*/

export { MainGrid, SideCol, ContentCol };
