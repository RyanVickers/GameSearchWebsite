import React from "react";

const GamesList = (props) =>{
    return(
        <>
            {props.games.map((game,index)=>
                <div className={"d-flex justify-content-start"}>
                <img src={game.url} alt='Game Cover'/>
            </div>)}
        </>
    )
};

export default GamesList;