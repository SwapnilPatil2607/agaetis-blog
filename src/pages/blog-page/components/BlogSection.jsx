import AnotherBlogSection from "./AnotherBlogSection";
import NewFeatureSection from "./NewFeatureSection";

const BlogSection = () => {
  return (
    <div>
      <div className="border border-bottom-1 border-top-0  border-end-0 border-start-0 py-3 px-1">
        <h2 className="fst-italic">From the Firehose</h2>
      </div>

      <div className="border border-bottom-1 border-top-0  border-end-0 border-start-0 py-3 px-1">
        <h1>Sample blog post</h1>
        <p>January 1, 2014 by Mark</p>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          explicabo nesciunt ab odit aperiam corrupti dolore cum voluptates,
        </p>
      </div>

      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et minima
          laboriosam eaque quibusdam fugit iure quis ullam neque possimus unde
          saepe, asperiores officiis a, debitis sequi dolorum ratione minus
          beatae.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et minima
          laboriosam eaque quibusdam fugit iure quis ullam neque possimus unde
          saepe, asperiores officiis a, debitis sequi dolorum ratione minus
          beatae.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et minima
          laboriosam eaque quibusdam fugit iure quis ullam neque possimus unde
          saepe, asperiores officiis a, debitis sequi dolorum ratione minus
          beatae.
        </p>
      </div>

      <div>
        <h4>Heading</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et minima
          laboriosam eaque quibusdam fugit iure quis ullam neque possimus unde
          saepe, asperiores officiis a, debitis sequi dolorum ratione minus
          beatae.
        </p>
        <h4>Sub-heading</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat libero
          aut debitis, rem in architecto cumque eius, quod iure molestias non
          vitae perferendis quidem natus est voluptates minus, iste repellendus.
        </p>
      </div>

      <div>
        <h4>Sub-heading</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat libero
          aut debitis, rem in architecto cumque eius, quod iure molestias non
          vitae perferendis quidem natus est voluptates minus, iste repellendus.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
        </ul>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <ol>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
        </ol>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <AnotherBlogSection />
      <NewFeatureSection />
    </div>
  );
};

export default BlogSection;
