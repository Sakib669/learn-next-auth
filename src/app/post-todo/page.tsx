"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface Props {}

type Inputs = {
  name: string;
  description: string;
};

const PostTodo = ({}: Props) => {
  const session = useSession();
  const email = session?.data?.user?.email;
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { name, description } = data;
    const post = { name, description, email };
    setLoading(true);
    const result = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    if (!result.ok) {
      throw new Error("Failed Posting that data");
    }
    setLoading(false);
    alert("Data Posted");
    reset();
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
          })}
        />

        {/* include validation with required or other standard HTML validation rules */}
        <textarea
          className="textarea"
          placeholder="Enter the description"
          {...register("description", { required: true })}
        ></textarea>
        {/* errors will return when field validation fails  */}
        {errors.description && <span>This field is required</span>}

        {loading ? (
          <span className="loading loading-spinner loading-md mx-auto"></span>
        ) : (
          <input disabled={loading} className="btn btn-primary" type="submit" />
        )}
      </form>
    </div>
  );
};

export default PostTodo;
