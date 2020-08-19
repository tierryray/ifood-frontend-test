import React, { useEffect, useState, useCallback } from 'react';
import { Collapse, Container } from '@material-ui/core';

import api from '../../services/api';

import Header from '../../components/Header';
import Filters from './Filters';
import FilterButton from '../../components/FilterButton';
import Playlists from '../../components/Playlists';

function Home() {
    const [playlists, setPlaylists] = useState([]);
    const [params, setParams] = useState({});
    const [filtersVisibility, setFiltersVisibility] = useState(false);

    useEffect(() => {
        async function getFeaturedPlaylists() {
            try {
                const { data } = await api.get('/browse/featured-playlists');
                const { items } = data.playlists;
                setPlaylists(items);
            } catch (error) {
                console.log(error);
            }
        }
        getFeaturedPlaylists();
    }, [params]);

    const handleSubmit = useCallback((data) => {
        setParams(data);
    }, []);

    return (
        <div>
            <Header
                filtersVisibility={filtersVisibility}
                setFiltersVisibility={setFiltersVisibility}
            />
            <Container>
                <FilterButton
                    filtersVisibility={filtersVisibility}
                    setFiltersVisibility={setFiltersVisibility}
                    isMobile
                />
                <Collapse in={filtersVisibility}>
                    <Filters onSubmit={handleSubmit} />
                </Collapse>
                <Playlists playlists={playlists} />
            </Container>
        </div>
    );
}

export default Home;
