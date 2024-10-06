import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Calendar from 'components/Calendar/Calendar';
import addEventRegisterFormSchema from 'schemas/eventRegisterFormSchema';
import css from './EventRegistrationForm.module.css';
import { addParticipant } from '../../redux/participants/operations';

import { selectCurrentEvent } from '../../redux/events/selectors';
import { getEventById } from '../../redux/events/operations';

const EventRegistrationForm = ({ eventId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEventById(eventId));
  }, [dispatch, eventId]);

  const currentEvent = useSelector(selectCurrentEvent);

  const initialFormValues = {
    userFullName: '',
    userEmail: '',
    userBirthDate: '',
    sourceOptions: '',
  };

  const handleFormSubmit = (values, actions) => {
    const date = new Date(
      values.userBirthDate.getFullYear(),
      values.userBirthDate.getMonth(),
      values.userBirthDate.getDate() + 1
    );

    const newRegister = {
      eventId: eventId,
      userFullName: values.userFullName.trim(),
      userEmail: values.userEmail.trim(),
      userBirthDate: date.toISOString(),
      infoSource: values.sourceOptions,
    };

    dispatch(addParticipant(newRegister)).then(action => {
      if (action.type === 'participants/addParticipant/rejected') {
        Notify.failure(`Error! ${action.payload}!`, {
          fontFamily: 'inherit',
          borderRadius: '8px',
          failure: {
            background: '#eeb9a7',
            textColor: '#000814',
            notiflixIconColor: '#b8001f',
          },
        });
      }

      if (action.type === 'participants/addParticipant/fulfilled') {
        actions.resetForm();
        Notify.success('Form submitted successfully!', {
          fontFamily: 'inherit',
          borderRadius: '8px',
          success: {
            background: '#bee3db',
            textColor: '#000814',
            notiflixIconColor: '#00A36C',
          },
        });
      }
    });
  };

  return (
    <>
      {currentEvent && (
        <Formik
          initialValues={initialFormValues}
          validationSchema={addEventRegisterFormSchema}
          onSubmit={handleFormSubmit}
        >
          <Form noValidate>
            <h1 className={css.formTitle}>
              Event "{currentEvent?.title}" registaration
            </h1>
            <ul>
              <li className={css.formInputField}>
                <label className={css.formInputLabel} htmlFor="userFullName">
                  Full name{' '}
                </label>
                <Field
                  className={css.formInput}
                  name="userFullName"
                  as="input"
                  type="text"
                  autoComplete="off"
                />
                <div className={css.formError}>
                  <ErrorMessage name="userFullName" />
                </div>
              </li>
              <li className={css.formInputField}>
                <label className={css.formInputLabel} htmlFor="userEmail">
                  Email
                </label>
                <Field
                  className={css.formInput}
                  name="userEmail"
                  as="input"
                  type="email"
                  autoComplete="off"                 
                />
                <div className={css.formError}>
                  <ErrorMessage name="userEmail" />
                </div>
              </li>
              <li className={css.formInputField}>
                <label className={css.formInputLabel} htmlFor="userBirthDate">
                  Date of birth
                </label>
                <Calendar inputStyles={css.formInput} />

                <div className={css.formError}>
                  <ErrorMessage name="userBirthDate" />
                </div>
              </li>
            </ul>
            <fieldset className={css.formFieldset} id="sourceOptions">
              <legend className={css.formFieldsetTitle}>
                Where did you hear about this event?
              </legend>
              <div className={css.formFieldsetItem}>
                <Field
                  className={css.formFieldsetRadio}
                  name="sourceOptions"
                  id="socialMedia"
                  as="input"
                  type="radio"
                  value="social media"
                />
                <label htmlFor="socialMedia">Social media</label>
              </div>
              <div className={css.formFieldsetItem}>
                <Field
                  className={css.formFieldsetRadio}
                  name="sourceOptions"
                  id="friends"
                  as="input"
                  type="radio"
                  value="friends"
                />
                <label htmlFor="friends">Frieds</label>
              </div>
              <div className={css.formFieldsetItem}>
                <Field
                  className={css.formFieldsetRadio}
                  name="sourceOptions"
                  id="foundMyself"
                  as="input"
                  type="radio"
                  value="found myself"
                />
                <label htmlFor="foundMyself">Found myself</label>
              </div>
            </fieldset>
            <div className={css.formError}>
              <ErrorMessage name="sourceOptions" />
            </div>
            <button className={css.sendButton} type="submit">
              Register
            </button>
          </Form>
        </Formik>
      )}
    </>
  );
};

export default EventRegistrationForm;
