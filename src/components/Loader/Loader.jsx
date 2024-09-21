import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css'

const Loader = ({ message }) => {
  return (
    <div className={css.loaderContainer}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#0077b6"
        radius="9"
        ariaLabel="three-dots-loading"
      />
      <p className={css.LoaderMessage}>{message}</p>
    </div>
  );
};

export default Loader;
