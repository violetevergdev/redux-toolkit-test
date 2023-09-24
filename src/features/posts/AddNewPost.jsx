import { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "./postsSlice";
import { nanoid } from "@reduxjs/toolkit";

export const AddNewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePost = () => {
    if (title && content) {
      dispatch(
        actions.addPost({
          id: nanoid(),
          title,
          content
        })
      );

      setTitle("");
      setContent("");
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label>Post Title</label>
        <input
          type="text"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />

        <label>Post Content</label>
        <input
          type="text"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePost}>
          Save Post
        </button>
      </form>
    </section>
  );
};
