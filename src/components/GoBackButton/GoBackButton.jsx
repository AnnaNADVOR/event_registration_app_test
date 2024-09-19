import { Link } from 'react-router-dom';
import css from './GoBackButton.module.css';

const GoBackButton = ({ location }) => {
  return (
    <Link className={css.backButton} to={location}>
      {'< Go back'}
    </Link>
  );
};

export default GoBackButton;
