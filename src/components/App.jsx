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

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="register" element={<Registration />} />

        <Route path="login" element={<Login />} />

        <Route path="user/:userId" element={<ProfileUser />}>
          <Route path="my-lessons" element={<Lessons />}>
            <Route path=":lessonId" element={<LessonDetails />} />
          </Route>
          <Route path="create" element={<NewLesson />} />
        </Route>
        <Route path="lessons" element={<Lessons />} />
        <Route path="lessons/:lessonId" element={<LessonDetails />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
