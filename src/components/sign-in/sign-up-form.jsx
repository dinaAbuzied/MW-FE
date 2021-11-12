import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaUserAlt, FaEnvelope, FaLock } from 'react-icons/fa';

function SignUpForm() {

    return(
        <Formik
            initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
            validationSchema={Yup.object({
                username: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
                password: Yup.string().required('Required'),
                confirmPassword: Yup.string().required('Required').test('passwords-match', 'Passwords must match', function(value){
                    return this.parent.password === value
                  }),
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
                    <FaUserAlt className="absolute left-3 text-main-light top-1/2 transform -translate-y-1/2" />
                    <Field name="username" type="text" placeholder="Username" className={`text-white h-9 bg-main-dark placeholder-main-light border pl-9 pt-1 w-full ${errors.username && touched.username ? 'border-danger' : 'border-main-light'}`} />
                </div>
                <ErrorMessage className="text-danger mt-1" component="div" name="username" />
        
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

                <div className="relative mt-6">
                    <FaLock className="absolute left-3 text-main-light top-1/2 transform -translate-y-1/2" />
                    <Field name="confirmPassword" type="password" placeholder="Confirm Password" className={`text-white h-9 bg-main-dark placeholder-main-light border pl-9 pt-1 w-full ${errors.confirmPassword && touched.confirmPassword ? 'border-danger' : 'border-main-light'}`} />
                </div>
                <ErrorMessage className="text-danger mt-1" component="div" name="confirmPassword" />
        
                <button type="submit" className="w-full h-9 bg-danger text-white mt-10 hover:bg-danger-dark font-bold text-lg">Sign Up</button>
            </Form>
            )}
        </Formik>
    );
}

export default SignUpForm;