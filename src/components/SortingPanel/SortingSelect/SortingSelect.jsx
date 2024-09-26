import { TbArrowsSort } from 'react-icons/tb';
import { useState, useRef, useEffect } from 'react';
import css from './SortingSelect.module.css';

const SortingSelect = ({
  handleClick,
  sortBy,
  optionName,
  labelAsc,
  labelDesc,
  shortLabelAsc,
  shortLabelDesc,
  searchParamsValues,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const onEscClick = event => {
      if (event.code === 'Escape') {
        setShowMenu(false);
      }
    };

    const handleClickOutside = event => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', onEscClick);

    return () => {
      window.removeEventListener('keydown', onEscClick);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowMenu]);


  return (
    <div className={css.selectContainer}>
      <button
        className={css.selectButton}
        onClick={toggleMenu}
        type="button"
        ref={buttonRef}
      >
        Sort by {sortBy}
        {searchParamsValues.order === 'asc' &&
                  searchParamsValues.sortBy === optionName && shortLabelAsc}
              {searchParamsValues.order === 'desc' &&
        searchParamsValues.sortBy === optionName && shortLabelDesc}
        <TbArrowsSort />
      </button>

      {showMenu && (
        <ul className={css.select} ref={menuRef}>
          <li className={css.selectOption}>
            <label
              className={css.selectInputLabel}
              htmlFor={`${optionName}asc`}
            >
              <input
                className={css.selectInput}
                onClick={handleClick}
                type="radio"
                name={optionName}
                id={`${optionName}asc`}
                value="asc"
              />
              {labelAsc}
            </label>
          </li>
          <li className={css.selectOption}>
            <label
              className={css.selectInputLabel}
              htmlFor={`${optionName}desc`}
            >
              <input
                className={css.selectInput}
                onClick={handleClick}
                type="radio"
                name={optionName}
                value="desc"
                id={`${optionName}desc`}
              />
              {labelDesc}
            </label>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SortingSelect;
