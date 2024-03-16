import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Registration from 'pages/Registration/Registration';
import { Routes, Route, Navigate } from 'react-router-dom';

import './globalStyles.module.css';
import { Layout } from './Layout/Layout';
import { ProfileUser } from './ProfileUser/ProfileUser';
import { Lessons } from './Lessons/Lessons';
import { LessonDetails } from './LessonDetails/LessonDetails';
import { NewLesson } from './NewLesson/NewLesson';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/authOperations';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { CircularProgress } from '@mui/material';
import { RestrictedRoute } from './RestrictedRoute';
import { MyLessons } from './MyLessons/MyLessons';
import { PrivateRoute } from './PrivateRoute';
import PageGoogle from 'pages/PageGoogle/PageGoogle';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <CircularProgress />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/my-lessons"
              component={<Registration />}
            />
          }
        />

        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/my-lessons" component={<Login />} />
          }
        />
        <Route
          path="my-lessons"
          element={
            <PrivateRoute redirectTo="/login" component={<MyLessons />} />
          }
        />

        <Route path="lessons" element={<Lessons />} />
        <Route path="lessons/:lessonId" element={<LessonDetails />} />
        <Route path="google-redirect" element={<PageGoogle />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

/* <Route path="user/:userId" element={<ProfileUser />}>
          <Route path="my-lessons" element={<Lessons />}>
            <Route path=":lessonId" element={<LessonDetails />} />
          </Route>
          <Route path="create" element={<NewLesson />} />
        </Route> */
