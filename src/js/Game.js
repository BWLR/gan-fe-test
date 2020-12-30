import React from 'react';

const Game = (props) => (
    <div className="c-game">
        <img className="c-game__image" alt={"Image for game: " + props.game.title} title={props.game.title} src={"/img/games/" + props.game.img} />
    </div>
);

export default Game;