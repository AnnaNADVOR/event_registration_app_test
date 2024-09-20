import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { getParticipantsByEventId } from '../../redux/participants/operations';
import { selectParticipantsList } from '../../redux/participants/selectors';
import ParticipantItem from 'components/ParticipantItem/ParticipantItem';
import { getEventById } from '../../redux/events/operations';
import { selectCurrentEvent } from '../../redux/events/selectors';
import css from './ParticipantsPage.module.css';
import GoBackButton from 'components/GoBackButton/GoBackButton';

const ParticipantsPage = () => {
  const location = useLocation();

  const prevLocationRef = useRef(location.state?.from ?? '/');
  const dispatch = useDispatch();
  const params = useParams();
  const currentEventId = params.eventId;
  const participantsList = useSelector(selectParticipantsList);
  const currentEvent = useSelector(selectCurrentEvent);

  useEffect(() => {
    dispatch(getParticipantsByEventId(currentEventId));
    dispatch(getEventById(currentEventId));
  }, [dispatch, currentEventId]);

  return (
    currentEvent && (
      <section className="section">
        <div className="container">
          <GoBackButton location={prevLocationRef.current} />
          <h1 className="pageTitle">"{currentEvent?.title}" participants</h1>
          {participantsList?.length > 0 ? (
            <ul className={css.participantsList}>
              {participantsList.map(participant => (
                <li className={css.participantsListItem} key={participant._id}>
                  <ParticipantItem participantData={participant} />
                </li>
              ))}
            </ul>
          ) : (
            <div>No one has registered for this event yet. Be the first!</div>
          )}
        </div>
      </section>
    )
  );
};

export default ParticipantsPage;
