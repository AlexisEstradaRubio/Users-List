import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    email: yup
    .string()
    .matches(/(admin|Admin|^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$)/, 'E-mail not valid')
    .required('E-mail is required'),
    password: yup
    .string()
    .min(3, 'Too short!')
    .max(1000, 'Too long!')
    .required('Password is required')
})