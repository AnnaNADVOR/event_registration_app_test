import { NavLink } from 'react-router-dom';
import css from './EventItem.module.css';

const EventItem = () => {
  return (
    <div className={css.eventCard}>
      <h2 className={css.eventTitle}>Fitness Fusion</h2>
      <div className={css.eventInfoField}>
        <b>Date:</b>
        <p>March 10, 2024</p>
      </div>
      <div className={css.eventInfoField}>
        <b>Place:</b>
        <p>Local Gymnasium, Riverton</p>
      </div>
      <p className={css.eventDetails}>
        A day of fitness classes ranging from yoga to kickboxing. Attendees can
        sample different workouts and meet local trainers.
      </p>
      <nav className={css.eventNavigation} >
        <NavLink className={css.eventLink} to="/register">Register</NavLink>
        <NavLink className={css.eventLink}>View</NavLink>
      </nav>
    </div>
  );
};

export default EventItem;
