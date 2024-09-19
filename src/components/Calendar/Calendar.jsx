import DatePicker from 'react-datepicker';
import en from 'date-fns/locale/en-GB';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';
import { useField, useFormikContext } from 'formik';

const Calendar = ({ inputStyles }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField('userBirthDate');

  const changeDate = value => {
    setFieldValue(field.name, value);
  };

  return (
    <DatePicker
      {...field}
      className={inputStyles}
      name="userBirthDate"
      selected={field.value}
      onChange={changeDate}
      dateFormat="dd/MM/yyyy"
      maxDate={new Date()}
      locale={en}
      showMonthDropdown
      useShortMonthInDropdown
      showYearDropdown
      scrollableYearDropdown
      yearDropdownItemNumber={120}
      dropdownMode="select"
      inputmode="none"
      autoComplete="off"
      fixedHeight
    />
  );
};

export default Calendar;
