import * as Yup from 'yup';

const addEventRegisterFormSchema = Yup.object().shape({
  userFullName: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Full name must contain only letters')
    .trim()
    .required('Full name is required'),
  userEmail: Yup.string()
    .email('The email address must be in the format "user@example.com", contain @  and ".com" or ".net"')
    // .matches(/^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,'Invalid email format. Email must contain @.')
    .required('Email is required')
    .trim(),
  userBirthDate: Yup.date().required('Date is required'),
  sourceOptions: Yup.string().required(
    'Selecting a source of information is required'
  ),
});

export default addEventRegisterFormSchema;
