import './app.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Feed } from './feed';
import { Header } from './header';
import { fetchCurrentUser } from '../actions';
import { fetchUsers } from '../actions';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.clear();
    dispatch(fetchCurrentUser());
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <div className="spacer"></div>
      <Feed />
    </div>
  );
};
