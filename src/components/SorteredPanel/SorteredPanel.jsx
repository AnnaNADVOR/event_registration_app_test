import { FcAlphabeticalSortingAz } from 'react-icons/fc';
import { FcAlphabeticalSortingZa } from 'react-icons/fc';
import { FcNumericalSorting12 } from 'react-icons/fc';
import { FcNumericalSorting21 } from 'react-icons/fc';
import css from './SorteredPanel.module.css';

const SortedPanel = ({
  setSortOptions,
  setPage,
  searchParams,
  setSearchParams,
}) => {
  const handleSort = event => {
    setSortOptions({
      order: event.currentTarget.name,
      sortBy: event.currentTarget.value,
    });

    setPage(1);

    setSearchParams({
      order: event.currentTarget.name,
      sortBy: event.currentTarget.value,
    });
  };
  let params = {};
  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }

  return (
    <div className={css.sorteredButtonsList}>
      <div className={css.sorteredThumb}>
        <b className={css.sorteredThumbTitle}>Sort by title</b>
        <ul className={css.sorteredButtonGroup}>
          <li>
            <button
              className={css.sorteredButton}
              onClick={handleSort}
              name="asc"
              value="title"
            >
              <FcAlphabeticalSortingAz />
            </button>
          </li>
          <li>
            <button
              className={css.sorteredButton}
              onClick={handleSort}
              name="desc"
              value="title"
            >
              <FcAlphabeticalSortingZa />
            </button>
          </li>
        </ul>
      </div>

      <div className={css.sorteredThumb}>
        <b className={css.sorteredThumbTitle}>Sort by date</b>
        <ul className={css.sorteredButtonGroup}>
          <li>
            <button
              className={css.sorteredButton}
              onClick={handleSort}
              name="desc"
              value="date"
            >
              <FcNumericalSorting12 />
            </button>
          </li>
          <li>
            <button
              className={css.sorteredButton}
              onClick={handleSort}
              name="asc"
              value="date"
            >
              <FcNumericalSorting21 />
            </button>
          </li>
        </ul>
      </div>

      <div className={css.sorteredThumb}>
        <b className={css.sorteredThumbTitle}>Sort by location</b>
        <ul className={css.sorteredButtonGroup}>
          <li>
            <button
              className={css.sorteredButton}
              onClick={handleSort}
              name="asc"
              value="location"
            >
              <FcAlphabeticalSortingAz />
            </button>
          </li>
          <li>
            <button
              className={css.sorteredButton}
              onClick={handleSort}
              name="desc"
              value="location"
            >
              <FcAlphabeticalSortingZa />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortedPanel;
