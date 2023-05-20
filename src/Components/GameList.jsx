import React from "react";
import Game from "./Game";


export default function GameList({ games }) {


    return (
        <div className="games-list">
            {games.map((game) => (
                <Game
                    key={game.id}
                    team1={game.team1Abbreviation}
                    home={game.team1Location}
                    spread={game.spread}
                    team2={game.team2Abbreviation}
                    away={game.team2Location}
                />
            ))}
        </div>
    )
}