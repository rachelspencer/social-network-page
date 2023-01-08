import './feed.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions';
import { PostShow } from './post-show';

export const Feed = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderedPosts = posts.map((post) => {
    return (
      <div key={post.id} className="row">
        <div className="col m3"></div>
        <div className="col s12 m6">
          <PostShow {...post} />
        </div>
        <div className="col m3"></div>
      </div>
    );
  });

  return <div className="feed container">{renderedPosts}</div>;
};
