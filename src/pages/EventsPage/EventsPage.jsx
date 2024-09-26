import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getEvents } from '../../redux/events/operations';
import {
  selectEventsList,
  selectLoading,
  selectTotalData,
} from '../../redux/events/selectors';
import EventItem from 'components/EventItem/EventItem';
import css from './EventsPage.module.css';
import { useSearchParams } from 'react-router-dom';
import SortingPanel from 'components/SortingPanel/SortingPanel';
import Loader from 'components/Loader/Loader';

const EventsPage = () => {
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [sortOptions, setSortOptions] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const eventsList = useSelector(selectEventsList);
  const total = useSelector(selectTotalData);
  const isLoader = useSelector(selectLoading);

  useEffect(() => {
    if (fetching) {
      dispatch(getEvents({ limit: 6, page: page, sortOptions }));
    }
  }, [dispatch, page, fetching, sortOptions]);

  useEffect(() => {
    const handlePageScroll = event => {
      const generalPageHeight = event.target.documentElement.scrollHeight;
      const heightToTop = event.target.documentElement.scrollTop;
      const viewportHeigh = window.innerHeight;

      if (
        generalPageHeight - (heightToTop + viewportHeigh) < 1 &&
        total > eventsList.length
      ) {
        setFetching(true);
        setPage(prevPage => (prevPage += 1));
      }
    };

    document.addEventListener('scroll', handlePageScroll);

    return function () {
      document.removeEventListener('scroll', handlePageScroll);
    };
  }, [fetching, total, eventsList]);

  return (
    <section className="section">
      <div className="container">
        <h1 className="pageTitle">Events</h1>
        {isLoader ? (
         <Loader message='loading the best events'/>
        ) : (<>
            <SortingPanel
          searchParams={searchParams}
          setSortOptions={setSortOptions}
          setSearchParams={setSearchParams}
          setPage={setPage}
          eventsList={eventsList}
        />
        <ul className={css.eventsList}>
          {eventsList &&
            eventsList.map(event => (
              <li className={css.eventsListItem} key={event.title}>
                <EventItem eventData={event} />
              </li>
            ))}
        </ul>
        </>)}
        
      </div>
    </section>
  );
};

export default EventsPage;
