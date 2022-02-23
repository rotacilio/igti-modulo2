import React, {useState} from "react";
import SearchMovie from "../components/SearchMovie";
import MoviesList from "../components/MoviesList";
import {config} from "../../shared/config";

const Home = () => {

    const [data, setData] = useState([]);

    const onSearch = (text) => {
        const url = `${config.baseUrl}s=${text.toLowerCase()}`;
        fetch(url)
            .then(response => response.json())
            .then(json => setData(json.Search))
            .catch(error => console.error(error));
    };

    return (
        <>
            <SearchMovie onClick={onSearch} />
            <MoviesList data={data} />
        </>
    );
}

export default Home;