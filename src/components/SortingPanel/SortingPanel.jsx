import css from './SortingPanel.module.css';
import SortingSelect from './SortingSelect/SortingSelect';

const SortingPanel = ({
  setSortOptions,
  setPage,
  searchParams,
  setSearchParams,
}) => {

  const handleSort = event => {
     setSortOptions({
      order: event.currentTarget.value,
      sortBy: event.currentTarget.name,
    });

    setPage(1);

    setSearchParams({
      order: event.currentTarget.value,
      sortBy: event.currentTarget.name,
    });
  };

  let params = {};
  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }

  return (
    <ul className={css.sortingButtonsList}>
      <li>
        <SortingSelect
          handleClick={handleSort}
          sortBy="title"
          optionName="title"
          labelAsc="from A to Z"
          labelDesc="from Z to A"
          shortLabelAsc=": A - Z"
          shortLabelDesc=": Z - A"
          searchParamsValues={params}
        />
      </li>
      <li>
        <SortingSelect
          handleClick={handleSort}
          sortBy="date"
          optionName="date"
          labelAsc="from earlier to latest"
          labelDesc="from latest to earlier"
          shortLabelAsc= ": earlier - latest"
          shortLabelDesc=": latest - earlier"
          searchParamsValues={params}
        />
      </li>
      <li>
        <SortingSelect
          handleClick={handleSort}
          sortBy="location"
          optionName="location"
          labelAsc="from A to Z"
          labelDesc="from Z to A"
          shortLabelAsc=": A - Z"
          shortLabelDesc=": Z - A"
          searchParamsValues={params}
        />
      </li>
    </ul>
  );
};

export default SortingPanel;
