// import Image from "next/image";

const Card = (): JSX.Element => {
  return (
    <div className="card col-5 rounded-0">
      <img
        src="https://avatars.githubusercontent.com/u/14245192?v=4"
        className="card-img-top"
        height={50}
        width={10}
        alt="..."
      />
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
      </div>
    </div>
  );
};

export { Card };
