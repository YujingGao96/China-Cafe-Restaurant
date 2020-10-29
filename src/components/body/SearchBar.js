import React, {useState, useEffect} from "react";
import searchKeyword from "../../utils/searchKeyword";
import SingleItem from "./SingleItem";

const SearchBar = () => {
    const [keyword, setKeyword] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const requestASearch = () => {
            const searchResult = searchKeyword(keyword);
            setResults(searchResult);
        };

        let timeoutID;
        if (keyword) {
            timeoutID = setTimeout(() => {
                requestASearch();
            }, 200);
        } else {
            setResults([]);
        }
        return () => {
            clearTimeout(timeoutID);
        }
    }, [keyword]);

    const renderSearchResult = () => {
        return (
            <div className="mt-0 row px-3">
                <div className="list-group w-100 shadow rounded-all">
                    {
                        results.slice(null,6).map(result => {
                            return (
                                <SingleItem key={result.id} menuItem={result}/>
                            );
                        })
                    }
                </div>
            </div>
        );
    };

    return (
        <div className="mt-5 mb-4 mx-3">
            <div className="mb-0 row px-3">

                <input
                    className="form-control form-control-lg shadow rounded-all"
                    type="search"
                    placeholder="Search by Name"
                    onChange={e => setKeyword(e.target.value)}
                />
            </div>
            {keyword === '' ? null : renderSearchResult()}
        </div>
    );
};

export default SearchBar;