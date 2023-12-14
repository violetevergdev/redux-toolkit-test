/** @format */

import { useSelector } from "react-redux";

export const SinglePostPage = ({ match }) => {
  const { postID } = match.params;
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postID)
  );
  // React Router передаст в качестве параметра объект match, содержащий искомую информацию об URL
  if (!post) {
    return (
      <section>
        <h2>Post not found</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
      </article>
    </section>
  );
};
