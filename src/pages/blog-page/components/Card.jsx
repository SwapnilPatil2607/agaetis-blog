const Card = () => {
  return (
    <div className="row border border-secondary-subtle rounded">
      <div className="col-7 px-4 py-2">
        <p className="text-info fw-bold">World</p>
        <h3>Featured Post</h3>
        <p className="link-secondary">Nov 12</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          porro aspernatur.
        </p>
        <p>
          <a href="#" className="">
            Continue reading...
          </a>
        </p>
      </div>
      <div className="col-5 bg-dark-subtle d-flex justify-content-center align-items-center h-[100%]">
        <p className="text-white">Thumbnail</p>
      </div>
    </div>
  );
};

export default Card;
