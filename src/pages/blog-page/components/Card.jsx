const Card = () => {
  return (
    <div className="row border border-secondary-subtle rounded">
      <div className="col-7 p-4">
        <p>World</p>
        <h3>Featured Post</h3>
        <p>Nov 12</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          porro aspernatur. Fugiat quam, voluptas obcaecati ut nemo officia.
          delectus culpa maiores.
        </p>
        <p>
          <a href="#" className="">
            Continue reading...
          </a>
        </p>
      </div>
      <div className="col-5  bg-dark-subtle d-flex justify-content-center align-items-center h-[100%]">
        <p className="text-white">Thumbnail</p>
      </div>
    </div>
  );
};

export default Card;
