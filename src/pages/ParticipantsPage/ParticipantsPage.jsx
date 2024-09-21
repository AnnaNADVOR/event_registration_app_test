import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { getParticipantsByEventId } from '../../redux/participants/operations';
import { selectParticipantsList } from '../../redux/participants/selectors';
import ParticipantItem from 'components/ParticipantItem/ParticipantItem';
import { getEventById } from '../../redux/events/operations';
import { selectCurrentEvent } from '../../redux/events/selectors';
import css from './ParticipantsPage.module.css';
import GoBackButton from 'components/GoBackButton/GoBackButton';
import { BsSearch } from 'react-icons/bs';

const ParticipantsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();

  const [filteredParticipants, setFilteredParticipants] = useState([]);
  const [filterParam, setFilterParam] = useState('');

  const prevLocationRef = useRef(location.state?.from ?? '/');

  const currentEventId = params.eventId;
  const participantsList = useSelector(selectParticipantsList);
  const currentEvent = useSelector(selectCurrentEvent);

  useEffect(() => {
    dispatch(getParticipantsByEventId(currentEventId));
    dispatch(getEventById(currentEventId));
  }, [dispatch, currentEventId]);

  useEffect(() => {
    setFilteredParticipants(participantsList);
  }, [participantsList]);

  const filterParticipants = serchParam => {
    if (!serchParam) {
      setFilteredParticipants(participantsList);
      return;
    }

    const normalizerSearchParam = serchParam.toLocaleLowerCase();

    const filtered = participantsList.filter(
      participant =>
        participant.userFullName
          .toLocaleLowerCase()
          .includes(normalizerSearchParam) ||
        participant.userEmail
          .toLocaleLowerCase()
          .includes(normalizerSearchParam)
    );

    setFilteredParticipants(filtered);
  };

  const handleInputChange = event => {
    filterParticipants(event.currentTarget.value);
    setFilterParam(event.currentTarget.value);
  };

  return (
    currentEvent && (
      <section className="section">
        <div className="container">
          <GoBackButton location={prevLocationRef.current} />
          <h1 className="pageTitle">"{currentEvent?.title}" participants</h1>
          {participantsList?.length > 0 && (
            <div className={css.participantsFilter}>
              <label className={css.filterFieldInputLabel}>
                Find participants by name or email
              </label>
              <div className={css.filterField}>
                <input
                  className={css.filterFieldInput}
                  type="text"
                  onChange={handleInputChange}
                ></input>
                <BsSearch className={css.filterFieldInputIcon} />
              </div>
            </div>
          )}
          {filteredParticipants?.length > 0 ? (
            <ul className={css.participantsList}>
              {filteredParticipants.map(participant => (
                <li className={css.participantsListItem} key={participant._id}>
                  <ParticipantItem participantData={participant} />
                </li>
              ))}
            </ul>
          ) : (
            <>
              {participantsList.length === 0 ? (
                <div>
                  No one has registered for this event yet. Be the first!
                </div>
              ) : (
                <div>No participants with {filterParam}!</div>
              )}
            </>
          )}
        </div>
      </section>
    )
  );
};

export default ParticipantsPage;
