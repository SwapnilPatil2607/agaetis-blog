const BannerSection = () => {
  return (
    <div className="row bg-dark text-white py-6 px-4 p-md-5 rounded">
      <div className="col-sm-12 col-md-6">
        <h1 className="fst-italic fw-bolder">
          Title of a longer featured blog post
        </h1>
        <p>
          Multiple lines of text that form the lede, informing new readers
          quickly and efficiently about what’s most interesting in this post’s
          contents.
        </p>
        <p>
          <a href="#" className=" link-light link-underline-light">
            Continue reading...
          </a>
        </p>
      </div>
    </div>
  );
};

export default BannerSection;
