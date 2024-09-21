import { Link } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';

import css from './GoBackButton.module.css';

const GoBackButton = ({ location }) => {
  return (
    <Link className={css.backButton} to={location}>
      <MdKeyboardBackspace /> Back
    </Link>
  );
};

export default GoBackButton;
