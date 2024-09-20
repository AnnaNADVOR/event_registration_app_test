import css from './ParticipantItem.module.css';

const ParticipantItem = ({ participantData }) => {
  return (
    <div className={css.participantCard}>
      <span className={css.participantLabel}>
        {participantData.userFullName.slice(0, 1)}
      </span>
      <div>
        <p className={css.participantName}>{participantData.userFullName}</p>
        <p className={css.participantEmail}>{participantData.userEmail}</p>
      </div>
    </div>
  );
};

export default ParticipantItem;
