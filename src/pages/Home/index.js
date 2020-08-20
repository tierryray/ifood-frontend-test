import React, { useEffect, useState } from 'react';
import { Collapse, Container } from '@material-ui/core';

import { toast } from 'react-toastify';

import api from '../../services/api';

import Header from '../../components/Header';
import Filters from './Filters';
import FilterButton from '../../components/FilterButton';
import Playlists from '../../components/Playlists';
import LoadingSpinner from '../../components/LoadingSpinner';

import useAuth from '../../hooks/useAuth';

function Home() {
    const { signOut } = useAuth();

    //  Initial state of playlist
    const [playlists, setPlaylists] = useState([]);
    const [filtersVisibility, setFiltersVisibility] = useState(false);

    const [filteredPlaylists, setFilteredPlaylists] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const [loading, setLoading] = useState(false);

    async function getFeaturedPlaylists(params) {
        const newParams = params;
        // eslint-disable-next-line no-restricted-syntax
        for (const prop in newParams) {
            if (newParams[prop] === '' || newParams[prop] === undefined) {
                delete newParams[prop];
            }
        }

        try {
            setLoading(true);
            const { data } = await api.get('/browse/featured-playlists', {
                params: newParams,
            });
            const { items } = data.playlists;
            setPlaylists(items);
        } catch (error) {
            if (error.response.status === 401) {
                signOut();
            } else {
                toast.error('Ops! Algo deu errado. Tente novamente!');
            }
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (!searchTerm) {
            setFilteredPlaylists(playlists);
        }

        const newPlaylists = playlists.map((playlist) => {
            return {
                ...playlist,
                isVisible: !!playlist.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()),
            };
        });

        setFilteredPlaylists(newPlaylists);
    }, [searchTerm, playlists]);

    return (
        <div style={{ height: '100%' }}>
            <Header
                setSearchTerm={setSearchTerm}
                filtersVisibility={filtersVisibility}
                setFiltersVisibility={setFiltersVisibility}
            />
            <Container style={{ height: '85%' }}>
                <FilterButton
                    filtersVisibility={filtersVisibility}
                    setFiltersVisibility={setFiltersVisibility}
                    isMobile
                />
                <Collapse in={filtersVisibility}>
                    <Filters onSubmit={getFeaturedPlaylists} />
                </Collapse>

                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <Playlists playlists={filteredPlaylists} />
                )}
            </Container>
        </div>
    );
}

export default Home;
