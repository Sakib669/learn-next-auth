export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/post-todo", "/my-post", "/my-post/:path*"],
};
