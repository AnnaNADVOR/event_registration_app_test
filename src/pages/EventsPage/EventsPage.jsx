// import { NavLink } from 'react-router-dom';
import EventItem from 'components/EventItem/EventItem';
import css from './EventsPage.module.css';
const EventsPage = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="pageTitle">Events</h1>
        <ul className={css.eventsList}>
          <li className={css.eventsListItem}>
            <EventItem />
          </li>
          <li className={css.eventsListItem}>
            <EventItem />
          </li>
          <li className={css.eventsListItem}>
            <EventItem />
          </li>
          <li className={css.eventsListItem}>
            <EventItem />
          </li>
          <li className={css.eventsListItem}>
            <EventItem />
          </li>
          <li className={css.eventsListItem}>
            <EventItem />
          </li>
          <li className={css.eventsListItem}>
            <EventItem />
          </li>
          <li className={css.eventsListItem}>
            <EventItem />
          </li>
          <li className={css.eventsListItem}>
            <EventItem />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default EventsPage;
