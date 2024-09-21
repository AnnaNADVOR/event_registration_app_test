
# Events Registration App  

Web-based application for events registration.

+ Events board page: implemented the events board page where users can observe the paginated list of available events. The list of events is previously added to the database manually. Added ability to sort events by: title, event date, organizer. Added infinite scroll pagination.

+ Event registration page: by clicking on “Register”, users redirected to the event registration page, which contains a registration form with the following fields: full name, email, date of birth, “where did you hear about this event?”.
Once the form is submitted, the response stored in the MongoDB.
Added form validation with Yup and Date Picker to date of birth input;

+ Event participants page: implemented the event participants page where users can see a list of registered participants. This page available by clicking on the “View” button. Added ability to search participants by full name, email.


[BackEnd](https://github.com/AnnaNADVOR/events-api)

## Level
### Middle level

- Everything from the base level
- Events board page: add ability to sort events by: title,  event date, organizer.
- Event registration page:
  - add form validation (come up with your own requirements for fields’ validity);
  - add DataPicker to Date of birth input;
- Event participants page: add ability to search participants by full name, email.
  
### Advanced level
- Everything from the middle level
- Events board page: add infinite scroll pagination (when a user scrolls the page, it automatically loads more events).


## Technologies and Libraries Used

![React](https://img.shields.io/badge/React-00308F)
![ReactDOM](https://img.shields.io/badge/ReactDOM-0066b2)
![React Router](https://img.shields.io/badge/React%20Router-5072A7)
![React Redux](https://img.shields.io/badge/React%20Redux-3457D5)
![Axios](https://img.shields.io/badge/Axios-0047AB)
![Notiflix](https://img.shields.io/badge/Notiflix-4B9CD3)
![React Datepicker](https://img.shields.io/badge/React%20Datepicker-216ba5)
![Date-fns](https://img.shields.io/badge/Date--fns-00BFFF)
![React Spinners ](https://img.shields.io/badge/React%20Spinners-005A9C)
![Formik](https://img.shields.io/badge/Formik-4C9AFF)
![Yup](https://img.shields.io/badge/Yup-003399)

![Node](https://img.shields.io/badge/Node.js-006A4E)
![Express](https://img.shields.io/badge/Express-008B8B)
![Mongoose](https://img.shields.io/badge/Mongoose-228B22)