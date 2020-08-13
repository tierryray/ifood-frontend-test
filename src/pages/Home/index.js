import React from 'react';

import useAuth from '../../hooks/useAuth';

function Home() {
    const { signed, signIn, loading } = useAuth();

    return <h1>Logado!</h1>;
}

export default Home;
