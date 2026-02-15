"use client";
import { useRouter } from "next/navigation";
import { use, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  params: Promise<{ id: string }>;
}

type Inputs = {
  name: string;
  description: string;
};

const UpdateTodo = ({ params }: Props) => {
  const [loading, setLoading] = useState(false);
  const { id } = use(params);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    const res = await fetch(`/api/my-posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((d) => d.json());
    if (!res) {
      throw new Error("Failed Updating Todo");
    }
    alert("Post updated successfully");
    setLoading(false);
    router.push("/my-post")
    console.log(res);
  };
  return (
    <div className="flex flex-col justify-center items-center space-y-5 p-10 border rounded-xl border-primary min-h-screen">
      <h2 className="text-4xl text-primary font-bold">Update Todo</h2>
      <form
        className="card bg-base-100 border-primary border-2 p-6 space-y-10 w-96 shadow-sm "
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="input input-primary"
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}

        <input
          className="input input-primary"
          {...register("description", { required: true })}
        />
        {errors.description && <span>This field is required</span>}

        <input disabled={loading} className="btn btn-primary" type="submit" />
      </form>
    </div>
  );
};

export default UpdateTodo;
