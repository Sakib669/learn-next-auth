"use client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";

// ডামি ডাটা (শুধু নাম + ডেসক্রিপশন)

type PostsType = {
  name: string;
  description: string;
  _id?: string;
  updatedAt?: string;
  createdAt?: string;
};

export default function PostsPage() {
  const getPosts = async () => {
    const res: PostsType[] = await (await fetch("/api/posts")).json();
    return res;
  };
  // const [posts, setPosts] = useState<PostsType[]>([]);
  // console.log(posts);
  // useState(() => {
  //
  //   getPosts();
  // }, []);

  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });
  return (
    <div className="min-h-screen bg-linear-to-b from-base-100 to-base-200 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Posts</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts?.map((post) => (
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
                  <span className="btn btn-primary btn-sm">Read More</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
