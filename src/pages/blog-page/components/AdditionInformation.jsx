const AdditionInformation = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <div className="bg-light rounded col-md-12 col-sm-6 p-4">
        <h3 className="fst-italic">About</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
          assumenda vel commodi maxime magni dolores facere quaerat, deleniti
          tempore esse, quam delectus reprehenderit? Necessitatibus, minus
          possimus tempora consequuntur perspiciatis consectetur.
        </p>
      </div>

      <div className="p-4">
        <h2 className="fst-italic"> Archives</h2>
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
        <h2 className="fst-italic">Elsewhere</h2>
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
