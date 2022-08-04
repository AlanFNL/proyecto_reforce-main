import { useState, useEffect, useContext, useRef } from "react";
import "./Contact.css";
import { useInView } from "react-intersection-observer";

import GlobalContext from "../GlobalContext/GlobalContext.js";

import { Formik, Form, Field } from "formik";

import { FormValidation } from "./FormValidation.js";

import axios from "axios";
import i18next from "i18next";

import Spinner from "../Spinner/Spinner.js";


const Contact = () => {
    const { setItemPosition, elementRef, setElementRef } = useContext(GlobalContext);

    const [messageLoading, setMessageLoading] = useState(false); 
    const [messageStatus, setMessageStatus] = useState(0);

    const { ref, inView } = useInView({
        treshhold: 0
    })

    const positionRef = useRef();
    const loaderRef = useRef();
    const messageModalRef = useRef();

    useEffect(() => {
        if (!inView) {
            return;
        }
        
        setItemPosition(5);
    }, [inView]);

    useEffect(() => {
        elementRef.push(positionRef);
        setElementRef(elementRef);
    }, []);

    useEffect(() => {
        if (!messageStatus) {
            return;
        }

        messageModalRef.current.classList.add("class_form_modal_message_display");

        setTimeout(() => {
            messageModalRef.current.classList.remove("class_form_modal_message_display");
        }, 2000);

    }, [messageStatus]);

    const handleSubmit = async (values) => {
        setMessageLoading(true);
        setMessageStatus(false);

        try {
            const response = await axios({
                url: "https://proyecto-reforce-backend.vercel.app/send_mail",
                method: "POST",
                params: values
            })

            setMessageLoading(false);
            setMessageStatus(response.data.value);
            // alert(response.data.value);
        }
        catch {
            setMessageLoading(-1);
        }
    }

    const checkError = (error, touched) => {
        return (error && touched) ? <span className="class_form_input_message_error">{error}</span> : null
    }

    return(
        <div ref={positionRef} className="class_form_container">
            <div ref={messageModalRef} className={"class_form_modal_message " + ((messageStatus === 1) ? "class_form_modal_message_success" : "class_form_modal_message_error")}>
                {
                    (messageStatus === 1) ?
                        <>
                            <i className="fas fa-check-circle"/>
                            &nbsp;
                            <span>{i18next.t("modalMessageSuccess")}</span>
                        </>
                    :
                        <>
                            <i className="fas fa-times-circle"/>
                            &nbsp;
                            <span>{i18next.t("modalMessageError")}</span>
                        </>
                }
            </div>
            <span ref={ref} className={"class_title" + ((inView) ? " class_animation_effect_slide" : "")}>{i18next.t("contactTitle")}</span>

                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        message: ""
                    }} 
                    validationSchema={FormValidation}
                    onSubmit={handleSubmit}
                >
                {({errors, touched}) => (
                    <Form className="class_form_input_container">
                        <div className="class_form_input_flex">
                            <div className="class_form_input_errors">
                                <Field type="text" id="name" name="name" placeholder="Name"/>
                                {checkError(errors.name, touched.name)}
                            </div>
                            
                            <div className="class_form_input_errors">
                                <Field type="email" name="email" placeholder="Email Address"/>
                                {checkError(errors.email, touched.email)}
                            </div>
                        </div>

                        <Field as="textarea" name="message" placeholder="Your Message"/>
                        {checkError(errors.message, touched.message)}
                        
                        {
                            (messageLoading) ?
                                <button type="submit" name="message" className="class_form_button" disabled>
                                    <Spinner/>
                                </button>
                            :
                                <button type="submit" name="message" className="class_form_button">
                                    {i18next.t("contactButton")}
                                </button>
                        }
                    </Form>
                )}
                </Formik>

        </div>
    )
}

export default Contact;