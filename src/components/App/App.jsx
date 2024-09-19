import EventRegisterPage from 'pages/EventRegisterPage/EventRegisterPage';
import EventsPage from 'pages/EventsPage/EventsPage';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<EventsPage />} />
        <Route path="/register" element={<EventRegisterPage />} />
      </Routes>
    </>
  );
};
