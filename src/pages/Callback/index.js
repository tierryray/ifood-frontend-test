import React, { useEffect } from 'react';
import queryString from 'query-string';

import LoadingSpinner from '../../components/LoadingSpinner';

function Callback() {
    useEffect(() => {
        const hash = queryString.parse(window.location.hash);

        if (hash.access_token) {
            localStorage.setItem('@spotify-token', hash.access_token);
            window.location.href = '/';
        }
    }, []);

    return <LoadingSpinner loading />;
}

export default Callback;
