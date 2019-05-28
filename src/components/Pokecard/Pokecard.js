import React from "react";
import { padZeros } from "../../helpers";
import "./Pokecard.css";

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

const Pokecard = ({ name, id, type, base_experience }) => (
  <div className="Pokecard">
    <div className="Pokecard-name">{name}</div>
    <div>
      <img src={`${POKE_API}${padZeros(id)}.png`} alt={name} />
    </div>
    <div>Type: {type}</div>
    <div>EXP: {base_experience}</div>
  </div>
);

export default Pokecard;
