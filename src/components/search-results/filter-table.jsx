import { Formik, Field, Form } from 'formik';
import { MdArrowDropDown } from 'react-icons/md';

function FilterTable({inline}) {
    const genres = ['action', 'adventure', 'drama', 'fantasy'];
    return (
        <div className="bg-main-dark">
                <header className={`p-4 bg-main ${inline ? 'hidden' : ''}`}>
                    <h2 className="text-white">Filter Search Results</h2>
                </header>
                <main className="p-4 text-sm">
                <Formik
                initialValues={{ fromYear: '', toYear: '', language: '', genres:[] }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                }}>
                    {({ values }) => (
                    <Form>
                        <div className="pb-4">
                            <label className="text-white block mb-1">Release Year</label>
                            <div className="flex flex-col xl:flex-row justify-between items-center">
                                <Field className="text-white h-9 px-2 bg-main placeholder-main-light border border-main-light rounded w-full xl:w-auto" name="fromYear" placeholder="ex. 1990" />
                                <span className="text-main-light">to</span>
                                <Field className="text-white h-9 px-2 bg-main placeholder-main-light border border-main-light rounded w-full xl:w-auto" name="toYear" placeholder="ex. 1990" />
                            </div>
                        </div>
                        <div className="pb-4">
                            <label className="text-white block mb-1">Language</label>
                            <div className="relative">
                                <MdArrowDropDown className="absolute right-2 text-white text-base top-1/2 transform -translate-y-1/2"/>
                                <Field className="w-full text-white h-9 px-2 bg-main placeholder-main-light border border-main-light rounded appearance-none" value="" name="language" as="select">
                                    <option value="" disabled hidden>Select Language</option>
                                    <option value="ar">Arabic</option>
                                    <option value="en">English</option>
                                    <option value="fr">French</option>
                                </Field>
                            </div>
                        </div>
                        <div className="pb-4">
                            <label className="text-white block mb-1">Genre</label>
                            <div className="flex flex-wrap">
                            {genres.map((genre, index) => (
                                        <div className="w-1/2 mb-1" key={genre+index}>
                                            <Field name="genres" type="checkbox" value={genre} className="mr-2 appearance-none form-checkbox border border-main-light checked:border-main-light hover:checked:border-main-light rounded-md bg-main-dark  cursor-pointer text-main-dark" />
                                            <label className="text-white capitalize">{genre}</label>
                                        </div>
                            ))}
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="bg-success text-white hover:bg-success-dark py-2 px-3 rounded w-full xl:w-auto">Search</button>
                        </div>
                    </Form>
                    )}
                </Formik>
                </main>
            </div>
    );
}


export default FilterTable;