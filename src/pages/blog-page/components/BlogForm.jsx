import { useForm } from "react-hook-form";
const BlogForm = ({ onFormSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const alertCss = "border border-danger";
  return (
    <div>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="d-flex flex-column gap-3 border border-1 p-4 rounded"
      >
        <label>Author</label>
        <input
          className={errors.author && alertCss}
          {...register("author", { required: true })}
        />
        <label>Date</label>
        <input
          className={errors.date && alertCss}
          type="date"
          {...register("date", { required: true })}
        />
        <label>Blog Title</label>
        <input
          className={errors.blogTitle && alertCss}
          {...register("blogTitle", { required: true })}
        />
        <label>Blog Subtitle</label>
        <input
          className={errors.blogSubTitle && alertCss}
          {...register("blogSubTitle", { required: true })}
        />
        <label>Content</label>
        <textarea
          className={errors.content && alertCss}
          {...register("content", { required: true })}
        />
        <input
          className="bg-dark rounded border-0 text-white p-2"
          type="submit"
        />
      </form>
    </div>
  );
};

export default BlogForm;
