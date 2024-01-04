const AdditionInformation = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <div className="bg-light rounded col-md-3 col-sm-6 p-4">
        <h2>About</h2>
        <p>
          Customize this section to tell your visitors a little bit about your
          publication, writers, content, or something else entirely. Totally up
          to you.
        </p>
      </div>

      <div className="p-4">
        <h2>Archives</h2>
        <div className="d-flex flex-column">
          <a href="#"> March 2021</a>
          <a href="#">February 2021</a>
          <a href="#"> January 2021</a>
          <a href="#"> December 2020</a>
          <a href="#"> November 2020</a>
          <a href="#"> October 2020</a>
          <a href="#">September 2020</a>
          <a href="#"> August 2020</a>
          <a href="#"> July 2020</a>
          <a href="#"> June 2020</a>
          <a href="#"> May 2020</a>
          <a href="#"> April 2020</a>
        </div>
      </div>

      <div className="p-4">
        <h2>Elsewhere</h2>
        <div className="d-flex flex-column">
          <a href="#">GitHub</a>
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
        </div>
      </div>
    </div>
  );
};

export default AdditionInformation;
