import React from "react";
import TeamButton from "./TeamButton";

export default function Game({ team1, team2, spread }) {

    return (
        <div className="pick-container">
            <TeamButton teamAbbreviation={team1} />
            <h1 className="spread">{spread}</h1>
            <TeamButton teamAbbreviation={team2} />
        </div>
    )
}


