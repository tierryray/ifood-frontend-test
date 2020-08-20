import React, { useEffect, useState, useCallback } from 'react';
import { Collapse, Container } from '@material-ui/core';

import { toast } from 'react-toastify';

import axios from 'axios';
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
    const [params, setParams] = useState({});
    const [filtersVisibility, setFiltersVisibility] = useState(false);

    const [filteredPlaylists, setFilteredPlaylists] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getFeaturedPlaylists() {
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
        getFeaturedPlaylists();
    }, [params, signOut]);

    const filterEndpoint = 'http://www.mocky.io/v2/5a25fade2e0000213aa90776';

    const fetchFilters = useCallback(async () => {
        try {
            const { data } = await axios.get(filterEndpoint);
            const dinamicParams = {};

            const newFilters = data.filters.map((filter) => {
                if (filter.values) {
                    return {
                        ...filter,
                        type: 'SELECT',
                    };
                }

                if (filter?.validation?.entityType) {
                    if (filter.validation.entityType === 'DATE_TIME') {
                        return {
                            ...filter,
                            type: 'DATE',
                        };
                    }
                }

                if (filter?.validation?.primitiveType) {
                    if (filter.validation.primitiveType === 'INTEGER') {
                        dinamicParams[filter.id] = '';
                        return {
                            ...filter,
                            type: 'NUMBER',
                        };
                    }
                }
            });

            return { newFilters, dinamicParams };
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleSubmit = useCallback((data) => {
        setParams(data);
    }, []);

    useEffect(() => {
        if (!searchTerm) {
            setFilteredPlaylists(playlists);
        }

        setFilteredPlaylists(
            playlists.filter((playlist) =>
                playlist.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
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
                    <Filters
                        onSubmit={handleSubmit}
                        fetchFilters={fetchFilters}
                    />
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
