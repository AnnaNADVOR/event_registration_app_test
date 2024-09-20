import EventRegisterPage from 'pages/EventRegisterPage/EventRegisterPage';
import ParticipantsPage from 'pages/ParticipantsPage/ParticipantsPage';
import EventsPage from 'pages/EventsPage/EventsPage';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<EventsPage />} />
        <Route path=":eventId/registration" element={<EventRegisterPage />} />
        <Route path=":eventId/participants" element={<ParticipantsPage />} />
      </Routes>
    </>
  );
};
