import { useState } from "react";
import AnotherBlogSection from "./AnotherBlogSection";
import BlogForm from "./BlogForm";
import DumbSection from "./DumbSection";
import NewFeatureSection from "./NewFeatureSection";

const BlogSection = () => {
  const [showForm, setFormVisibility] = useState(false);
  const [blogData, setData] = useState();

  const onFormSubmit = (data) => {
    setData(data);
    setFormVisibility(false);
  };

  return (
    <div className="px-3">
      <div className="d-flex justify-content-end">
        <button
          onClick={() => setFormVisibility(!showForm)}
          className="bg-dark rounded border-0 text-white p-2"
        >
          Create Blog
        </button>
      </div>
      <div className="my-4">
        {showForm ? <BlogForm onFormSubmit={onFormSubmit} /> : null}
      </div>

      <div className="border border-bottom-1 border-top-0  border-end-0 border-start-0 ">
        <h2 className="fst-italic">From the Firehose</h2>
      </div>

      <div className="border border-bottom-1 border-top-0  border-end-0 border-start-0 ">
        <h1>{blogData?.blogTitle || "Sample blog post"}</h1>
        <p>
          {blogData?.date || "January 1, 2014"} by {blogData?.author || "Mark"}
        </p>
        <p className="mt-2">
          {blogData?.blogSubTitle ||
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo nesciunt ab odit aperiam corrupti dolore cum voluptates,"}
        </p>
      </div>

      <div>
        <p>
          {blogData?.content ||
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et minima laboriosam eaque quibusdam fugit iure quis ullam neque possimus unde saepe, asperiores officiis a, debitis sequi dolorum ratione minus beatae."}
        </p>
      </div>
      <DumbSection />
      <AnotherBlogSection />
      <NewFeatureSection />
    </div>
  );
};

export default BlogSection;
