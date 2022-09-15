import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest } from "../../../Redux/Actions/PostsActions/postsActions";
import { RootState } from "../../../Redux/Reducers/rootReducer";

export default function RandomAjaxCall() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { pending, posts, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    document.title = t("docTitleNameFeatures");
  });
  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  return (
    <div>
      Features:
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        posts?.map((todo, index) => (
          <div key={todo.id}>
            {++index}. {todo.title}
          </div>
        ))
      )}
    </div>
  );
}
