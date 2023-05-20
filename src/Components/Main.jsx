import React from 'react';
import GameList from './GameList';
import gamesObj from './data'

function Main() {
    const games = gamesObj


    return (
        <main className='main'>
            <h2>Games List</h2>
            <GameList games={games} />
        </main>
    );
}

export default Main;
