import SignUpForm from './sign-up-form';
import SignInForm from './sign-in-form';
import { Tab } from '@headlessui/react';

function SignIn() {
    
    return(
        <div className="bg-main-darker h-screen w-screen overflow-hidden">
            <img src="assets/img/sign-in-bg.jpg" alt="100 top movies poster" className="min-h-full min-w-full max-w-none"/>
            <div className="absolute top-0 left-0 w-full h-full bg-main-darker opacity-90"></div>
            <div className="absolute hidden md:flex left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3/5 max-w-screen-md sign-in-box">
                <div className="w-7/12 bg-main  py-4 px-8">
                    <label className="text-white text-2xl w-full text-center block">Sign Up</label>
                    <div className="my-5">
                        <SignUpForm/>
                    </div>
                </div>
                <div className="w-5/12 bg-main-dark  py-4 px-8">
                    <label className="text-white text-2xl w-full text-center block">Sign In</label>
                    <div className="my-5">
                        <SignInForm />
                    </div>
                </div>
            </div>
            <Tab.Group as="div" className="md:hidden absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-11/12">
                <Tab.List className="flex">
                    <Tab className="flex-1 text-xl text-white bg-main-dark p-4">Sign In</Tab>
                    <Tab className="flex-1 text-xl text-white bg-main p-4">Sign Up</Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel className="p-3 pb-7 bg-main-dark"><SignInForm /></Tab.Panel>
                    <Tab.Panel className="p-3 pb-7 bg-main"><SignUpForm/></Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}

export default SignIn;