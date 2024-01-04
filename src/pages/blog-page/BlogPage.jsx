import AdditionInformation from "./components/AdditionInformation";
import BannerSection from "./components/BannerSection";
import BlogSection from "./components/BlogSection";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

const BlogPage = () => {
  return (
    <div className="d-flex flex-column gap-3 w-100">
      <Header />
      <BannerSection />
      <div className="row flex gap-2 justify-content-evenly">
        <div className="col-md-5 col-sm-12">
          <Card />
        </div>
        <div className="col-md-5 col-sm-12">
          <Card />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <BlogSection />
        </div>
        <div className="col-md-4 col-sm-12">
          <AdditionInformation />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
