import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaUserAlt, FaEnvelope, FaLock } from 'react-icons/fa';
import { useRegisterMutation } from '../../service/user-api';
import { login } from '../../service/user-slice';

function SignUpForm() {

    const [registerUser, { isLoading: isRegLoading, error: regError, isSuccess: isRegSuccess, isError: isRegError, data: regData }] = useRegisterMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isRegSuccess) {
            dispatch(login(regData));
            navigate("/", { replace: true });
        }
        if (isRegError) {
        //   toast.error(errorMessage);
        //   dispatch(clearState());
        }
      }, [isRegSuccess, isRegError]);

    return(
        <Formik
            initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
            validationSchema={Yup.object({
                username: Yup.string()
                .min(4, 'Must be between 4 and 64 characters')
                .max(64, 'Must be between 4 and 64 characters')
                .required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
                password: Yup.string().required('Required'),
                confirmPassword: Yup.string().required('Required').test('passwords-match', 'Passwords must match', function(value){
                    return this.parent.password === value
                  }),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                const {email, password, username} = values;
                console.log(values);
                registerUser({email, password, username});
            }}
        >
            {({ errors, touched }) => (
            <Form>
                {
                    // TODO: style eror message
                    regError ? (
                        <div>{regError.status} {regError.data.message}</div>
                    ) : (<></>)
                }
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