import React from "react";
import teamColors from "./teamcolors";

export default function TeamButton({ teamAbbreviation }) {
    const colors = teamColors[teamAbbreviation]

    return (
        <button className="team-button"
            style={{
                backgroundColor: colors.primary,
                color: colors.secondary,
                border: colors.secondary
            }}
        >
            {teamAbbreviation}
        </button>
    )

}