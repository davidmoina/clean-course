import { PostService } from "./05-dependency-b";
import { WebApiService } from "./05-dependency-c";

// Main
(async () => {
  const provider = new WebApiService();

  const postService = new PostService(provider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
