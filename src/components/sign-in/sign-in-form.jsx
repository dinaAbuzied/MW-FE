import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaEnvelope, FaLock } from 'react-icons/fa';

function SignInForm() {

    return(
        <Formik
            initialValues={{ email: '', password: '', rememberme: false }}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('Required'),
                password: Yup.string().required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                // setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                // setSubmitting(false);
                // }, 400);
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
            <Form>
        
                <div className="relative mt-6">
                    <FaEnvelope className="absolute left-3 text-main-light top-1/2 transform -translate-y-1/2" />
                    <Field name="email" type="email" placeholder="E-mail" className={`text-white h-9 bg-main-dark placeholder-main-light border pl-9 pt-1 w-full ${errors.email && touched.email ? 'border-danger' : 'border-main-light'}`} />
                </div>
                <ErrorMessage className="text-danger mt-1" component="div" name="email" />
        
                <div className="relative mt-6">
                    <FaLock className="absolute left-3 text-main-light top-1/2 transform -translate-y-1/2" />
                    <Field name="password" type="password" placeholder="Password" className={`text-white h-9 bg-main-dark placeholder-main-light border pl-9 pt-1 w-full ${errors.password && touched.password ? 'border-danger' : 'border-main-light'}`} />
                </div>
                <ErrorMessage className="text-danger mt-1" component="div" name="password" />
                <div className="mt-3 inline-flex flex-row-reverse items-center">
                    <label htmlFor="rememberme" className="text-main-light">Remember Me</label>
                    <Field name="rememberme" type="checkbox" className="mr-2 appearance-none form-checkbox h-5 w-5 border border-main-light checked:border-main-light hover:checked:border-main-light rounded-md bg-main-dark  cursor-pointer text-main-dark" />
                </div>
        
                <button type="submit" className="w-full h-9 bg-success text-white mt-10 hover:bg-success-dark font-bold text-lg">Sign In</button>
            </Form>
            )}
        </Formik>
    );
}

export default SignInForm;