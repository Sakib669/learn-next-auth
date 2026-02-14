"use client";
import { useSession } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";

interface Props {}

type Inputs = {
  name: string;
  description: string;
};

const PostTodo = ({}: Props) => {
  const { user } = useSession().data;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(user);
    console.log(data);
  };
  return (
    <div className="flex flex-col justify-center items-center space-y-5 p-10 border rounded-xl border-primary min-h-screen">
      <h2>Post Todo</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card bg-base-100 border-primary border-2 p-6 space-y-10 w-96 shadow-sm "
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input
          placeholder="Enter the title"
          className="input"
          {...register("name", {
            required: true,
            minLength: 5,
          })}
        />

        {/* include validation with required or other standard HTML validation rules */}
        <textarea
          className="textarea"
          placeholder="Enter the description"
          {...register("description", { required: true, minLength: 10 })}
        ></textarea>
        {/* errors will return when field validation fails  */}
        {errors.description && <span>This field is required</span>}

        <input className="btn btn-primary" type="submit" />
      </form>
    </div>
  );
};

export default PostTodo;
