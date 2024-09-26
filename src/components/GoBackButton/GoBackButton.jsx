import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

import css from './GoBackButton.module.css';

const GoBackButton = ({ location }) => {
  return (
    <Link className={css.backButton} to={location}>
      <IoIosArrowBack /> Back
    </Link>
  );
};

export default GoBackButton;
