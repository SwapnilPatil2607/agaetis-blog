import { useForm } from "react-hook-form";
const BlogForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(watch);
    console.log(errors);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column gap-3 border border-1 p-4 rounded"
      >
        <input {...register("author", { required: true })} />
        <input type="date" {...register("date", { required: true })} />
        <input {...register("blogTitle", { required: true })} />
        <input {...register("blogSubTitle", { required: true })} />
        <textarea {...register("content", { required: true })}>
          It was a dark and stormy night...
        </textarea>

        {errors.length && <span>Fill all the fields</span>}

        <input
          className="bg-dark rounded border-0 text-white p-2"
          type="submit"
        />
      </form>
    </div>
  );
};

export default BlogForm;
