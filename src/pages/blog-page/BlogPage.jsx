import AdditionInformation from "./components/AdditionInformation";
import BannerSection from "./components/BannerSection";
import BlogSection from "./components/BlogSection";
import Card from "./components/Card";
import Header from "./components/Header";

const BlogPage = () => {
  return (
    <div>
      <Header />
      <BannerSection />
      <div className="row">
        <div className="col-6">
          <Card />
        </div>
        <div className="col-6">
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
    </div>
  );
};

export default BlogPage;
