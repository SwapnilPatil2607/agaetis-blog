import AdditionInformation from "./components/AdditionInformation";
import BannerSection from "./components/BannerSection";
import BlogSection from "./components/BlogSection";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

const BlogPage = () => {
  return (
    <div className="d-flex flex-column gap-3  w-[960px]">
      <Header />
      <BannerSection />
      <div className="row flex gap-2 justify-content-evenly">
        <div className="col-5">
          <Card />
        </div>
        <div className="col-5">
          <Card />
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <BlogSection />
        </div>
        <div className="col-4">
          <AdditionInformation />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
