import * as yup from "yup";

export const FormValidation = yup.object().shape({
        name: yup.string().min(2).max(32).required(),
        email: yup.string().email().required(),
        message: yup.string().min(2).max(128).required()
})