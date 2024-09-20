// import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getEvents } from '../../redux/events/operations';
import { selectEventsList } from '../../redux/events/selectors';
import EventItem from 'components/EventItem/EventItem';
import css from './EventsPage.module.css';

const EventsPage = () => {
  const dispatch = useDispatch();
  const eventsList = useSelector(selectEventsList);
  
  useEffect(() => {     
    dispatch(getEvents())
    }, [dispatch]);
  
  return (
    <section className="section">
      <div className="container">
        <h1 className="pageTitle">Events</h1>
        <ul className={css.eventsList}>
          {eventsList && eventsList.map(event => (
            <li className={css.eventsListItem} key={event.title}>
              <EventItem eventData={event} />
            </li>
          ))}
          
        </ul>
      </div>
    </section>
  );
};

export default EventsPage;
