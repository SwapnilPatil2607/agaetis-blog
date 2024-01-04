const BannerSection = () => {
  return (
    <div className="row bg-dark text-white p-4 p-md-5">
      <div className="col-6">
        <h1>Title of a longer featured blog post</h1>
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
