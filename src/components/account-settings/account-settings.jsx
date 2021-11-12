import { FaUserCircle } from 'react-icons/fa';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Header from '../shared/header/header';

export default function AccountSetting() {
    return (
        <>
            <Header/>
            <main className="p-4 max-w-screen-xl mx-auto">
                <Formik
                initialValues={{ fname: '', lname: '', username: '', email: '' }}
                validationSchema={Yup.object({
                    fname: Yup.string()
                    .max(15, 'Must be 15 characters or less'),
                    lname: Yup.string()
                    .max(15, 'Must be 15 characters or less'),
                    username: Yup.string()
                    .max(15, 'Must be 15 characters or less'),
                    email: Yup.string().email('Invalid email address')
                })}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                }}>
                    
                   
                    {({ errors, touched }) => (
                    <Form>
                    <div className="bg-main-dark p-2 lg:p-6 mt-4 flex flex-wrap justify-center">
                        <div className="flex-1 sm:mr-4">
                        <div className="pb-4">
                            <label className="text-white block mb-1">First Name</label>
                            <Field className={`text-white h-9 px-2 bg-main placeholder-main-light border rounded w-full max-w-screen-sm ${errors.fname && touched.fname ? 'border-danger' : 'border-main-light'}`} name="fname" placeholder="ex. Dina" />
                            <ErrorMessage className="text-danger mt-1" component="div" name="fname" />
                        </div>
                        <div className="pb-4">
                            <label className="text-white block mb-1">Last Name</label>
                            <Field className={`text-white h-9 px-2 bg-main placeholder-main-light border rounded w-full max-w-screen-sm ${errors.lname && touched.lname ? 'border-danger' : 'border-main-light'}`} name="lname" placeholder="ex. Abuzied" />
                            <ErrorMessage className="text-danger mt-1" component="div" name="lname" />
                        </div>
                        <div className="pb-4">
                            <label className="text-white block mb-1">Username</label>
                            <Field className={`text-white h-9 px-2 bg-main placeholder-main-light border rounded w-full max-w-screen-sm ${errors.username && touched.username ? 'border-danger' : 'border-main-light'}`} name="username" placeholder="ex. Badwolf" />
                            <ErrorMessage className="text-danger mt-1" component="div" name="username" />
                        </div>
                        <div className="pb-4">
                            <label className="text-white block mb-1">Email</label>
                            <Field type="email" className={`text-white h-9 px-2 bg-main placeholder-main-light border rounded w-full max-w-screen-sm ${errors.email && touched.email ? 'border-danger' : 'border-main-light'}`} name="email" placeholder="ex. dina.abuzied@mail.com" />
                            <ErrorMessage className="text-danger mt-1" component="div" name="email" />
                        </div>
                        
                        </div>
                    <div className="p-6 border-2 border-dashed border-main-light rounded flex items-center">
                        <div className="text-8xl text-white">
                            <FaUserCircle />
                        </div>
                        <div className="text-white ml-4">
                            <button className="bg-success text-white hover:bg-success-dark py-2 px-3 rounded">Upload profile picture</button>
                            <span className="block text-xs text-center mt-2">Upload JPG or PNG image.</span>
                        </div>
                    </div>
                    <div className="flex justify-end w-full mt-4">
                            <button type="submit" className="bg-success text-white hover:bg-success-dark py-2 px-3 rounded w-full xl:w-auto">Update</button>
                        </div>
                </div>
                    </Form>
                    )}
                    </Formik>
            </main>
        </>
    )
}