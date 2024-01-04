const Header = () => {
  return (
    <div>
      <div className="row d-flex flex-nowrap justify-content-center align-items-center py-3 px-2  border border-bottom-1">
        <div className="col-4 text-left  link-secondary">subscribe</div>
        <div className="col-4  text-center">
          <h1>Large</h1>
        </div>
        <div className="col-4  text-end link-secondary">
          <button type="button" className="btn btn-outline-secondary">
            signup
          </button>
        </div>
      </div>

      <nav className="row flex-nowrap py-2 px-2 link-secondary overflow-x-scroll ">
        <div className="col">World</div>
        <div className="col">US</div>
        <div className="col">Technology</div>
        <div className="col">Design</div>
        <div className="col">Culture</div>
        <div className="col">Business</div>
        <div className="col">Politics</div>
        <div className="col">Opinion</div>
        <div className="col">Science</div>
        <div className="col">Health</div>
        <div className="col">Style</div>
        <div className="col">Travel</div>
      </nav>
    </div>
  );
};

export default Header;
