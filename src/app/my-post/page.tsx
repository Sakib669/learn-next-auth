"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface Props {}

type Post = {
  _id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

const MyPosts = ({}: Props) => {
  const queryClient = useQueryClient();
  const getMyPost = async () => {
    const res = await fetch("/api/my-posts").then((data) => data.json());
    return res;
  };
  const { data: myPosts, isLoading } = useQuery({
    queryKey: ["myPosts"],
    queryFn: () => getMyPost(),
    refetchInterval: 3000
  });

  const deleteMyPost = async (id: string) => {
    const res = await fetch(`/api/my-posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json());
    return res;
  };

  const { mutate: deledtedPost, isPending } = useMutation({
    mutationFn: deleteMyPost,
    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ["myPosts"] });
    //   alert("Post deleted successfully");
    // },
  });

  const handleDelete = (id: string) => {
    const confirmDelete = confirm("Are you sure you want to delete this?");
    if (confirmDelete) {
      deledtedPost(id);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-base-100 to-base-200 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Posts</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading && (
            <span className="loading loading-spinner text-primary w-1/3 "></span>
          )}
          {myPosts && myPosts.map((post: Post) => (
            <div key={post._id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                {/* শুধু নাম */}
                <h2 className="card-title text-xl font-bold">{post.name}</h2>

                {/* শুধু ডেসক্রিপশন */}
                <p className="text-base-content/70 mt-2">{post.description}</p>

                <p className="text-base-content/70 mt-2">
                  Created:{" "}
                  {new Date(post.createdAt as any).toLocaleDateString()}{" "}
                  {new Date(post.createdAt as any).toLocaleTimeString()}
                </p>
                <p className="text-base-content/70 mt-2">
                  Updated:{" "}
                  {new Date(post.updatedAt as any).toLocaleDateString()}{" "}
                  {new Date(post.updatedAt as any).toLocaleTimeString()}
                </p>

                {/* শুধু একটা লিংক (অপশনাল) */}
                <div className="card-actions justify-end mt-4">
                  <button
                    className="btn btn-error btn-sm"
                    onClick={() => handleDelete(post._id)}
                  >
                    Delete this post
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
