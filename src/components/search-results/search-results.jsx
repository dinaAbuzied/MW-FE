import SearchResultsTable from './search-results-table';
import FilterTable from './filter-table';
import Header from '../shared/header/header';
// import MovieDetails from './movie-details';

function SearchResults() {
    return (
        <>
        <Header/>
        <main className="p-4 flex">
            <SearchResultsTable/>
            <div className="xl:w-4/12 w-3/12 max-w-md hidden lg:block pl-4">
                <FilterTable/>
            </div>
        </main>
        {/* <MovieDetails /> */}
        </>
    );
}


export default SearchResults;