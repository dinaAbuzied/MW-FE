import { NavLink, useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();
    const btnClasses = 'h-12 lg:w-44 w-full text-xl font-black rounded';
    return(
        <main className="flex justify-center lg:items-center items-end h-screen">
            <div class="flex justify-center max-w-screen-lg">
                <div className="absolute lg:relative top-0 right-0 w-44 sm:w-60 lg:w-auto">
                    <img className="max-h-full" src="assets/img/page-not-found.png" alt="page not found"/>
                </div>
                <div class="xl:pl-20 lg:pl-16 lg:pr-0 px-2 flex flex-col justify-center text-white xl:max-w-screen-md max-w-screen-sm">
                    <span className="xl:text-4xl text-3xl">404</span>
                    <h1 className="xl:text-5xl text-4xl mt-5 leading-tight">Houston, <br/>we’ve got a problem!</h1>
                    <p className="text-lg mb-8 mt-6 mr-1.5">Oops! It looks like the page you’re trying to reach does not exist. Please check the URL for proper spelling and capitalization.</p>
                    <div class="-mb-1 flex flex-col lg:flex-row">
                        <NavLink className={`${btnClasses} lg:mr-9 lg:mb-0 mb-2 text-main-darker bg-white flex items-center justify-center`} to="/">Go Home</NavLink>
                        <button className={`${btnClasses} border-2 border-white`} onClick={() => navigate(-1)}>Back</button>
                    </div>
                </div>
            </div>
        </main>
    )
}