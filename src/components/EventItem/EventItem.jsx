import { NavLink } from 'react-router-dom';
import css from './EventItem.module.css';

const EventItem = ({ eventData }) => {
const formatingDate = (new Date(eventData.date).toLocaleString('en-GB', { timeZone: 'UTC', 
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}))
  
// const formatingDate = `${new Date(eventData.date).getDate()}-${new Date(eventData.date).getMonth()}-${new Date(eventData.date).getFullYear()}` ; 

  return (
    <div className={css.eventCard}>
      <h2 className={css.eventTitle}>{eventData.title}</h2>
      <div className={css.eventInfoField}>
        <b>Date:</b>
        <p>{formatingDate}</p>
      </div>
      <div className={css.eventInfoField}>
        <b>Location:</b>
        <p>{eventData.location}</p>
      </div>
      <p className={css.eventDetails}>
       {eventData.description}
      </p>
      <nav className={css.eventNavigation} >
        <NavLink className={css.eventLink} to={`${eventData._id}/registration`}>Register</NavLink>
        <NavLink className={css.eventLink} to={`${eventData._id}/participants`}>View</NavLink>
      </nav>
    </div>
  );
};

export default EventItem;
