import * as yup from 'yup'

export const addUserValidationSchema = yup.object().shape({
    name: yup
    .string()
    .min(3, 'Too short!')
    .max(1000, 'Too long!')
    .required('Name is required'),
    user: yup
    .string()
    .matches(/(admin|Admin|^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$)/, 'E-mail not valid')
    .required('User is required'),
    password: yup
    .string()
    .min(3, 'Too short!')
    .max(1000, 'Too long!')
    .required('Password is required')
})