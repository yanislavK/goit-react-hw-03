import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./../ContactForm/ContactForm.module.css";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters"),
  number: Yup.string()
    .required("Number is required")
    .min(3, "Number must be at least 3 characters")
    .max(50, "Number must be less than 50 characters"),
});

const SearchBox = ({ handleSubmit }) => (
  <div>
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleSubmit(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.inputCont}>
            <label htmlFor="name">Name:</label>
            <Field className={css.input} type="text" name="name" />
            <ErrorMessage className={css.error} name="name" component="p" />
          </div>
          <div className={css.inputCont}>
            <label htmlFor="number">Number:</label>
            <Field className={css.input} type="text" name="number" />
            <ErrorMessage className={css.error} name="number" component="p" />
          </div>
          <button className={css.button} type="submit" disabled={isSubmitting}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default SearchBox;
