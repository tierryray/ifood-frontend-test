import React, { useEffect, useState, useCallback } from 'react';

import api from '../../services/api';

import Filters from './Filters';
import Header from '../../components/Header';

function Home() {
    const [playlists, setPlaylists] = useState([]);
    const [params, setParams] = useState({});

    useEffect(() => {
        async function getFeaturedPlaylists() {
            try {
                const { data } = await api.get('/browse/featured-playlists', {
                    params,
                });
                const { items } = data.playlists;
                setPlaylists(items);
            } catch (error) {
                // console.log(error);
            }
        }
        getFeaturedPlaylists();
    }, [params]);

    const handleSubmit = useCallback((data) => {
        console.log(data);
        setParams(data);
    }, []);

    return (
        <div>
            <Header />
            {/* <Filters onSubmit={handleSubmit} /> */}
        </div>
    );
}

export default Home;
