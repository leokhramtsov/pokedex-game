import React, { Component } from "react";
import Pokedex from "../Pokedex/Pokedex";
import "./Pokegame.css";

class Pokegame extends Component {
  state = {
    chars: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
    ],
    pokedex1: {
      chars: [],
      totalExp: 0
    },
    pokedex2: {
      chars: [],
      totalExp: 0
    }
  };

  componentDidMount() {
    this.assignHands();
  }

  assignHands = () => {
    this.setState(prevState => ({
      ...prevState,
      pokedex1: {
        chars: [],
        totalExp: 0
      },
      pokedex2: {
        chars: [],
        totalExp: 0
      }
    }));

    let chars = this.state.chars.slice();

    for (let i = 0; i <= Math.ceil(chars.length / 2); i++) {
      const idx = Math.floor(Math.random() * chars.length);
      const randomChar = chars.splice(idx, 1)[0];
      this.setState(prevState => ({
        ...prevState,
        pokedex1: {
          ...prevState.pokedex1,
          chars: [...prevState.pokedex1.chars, randomChar]
        }
      }));
    }

    this.setState(prevState => ({
      ...prevState,
      pokedex2: {
        ...prevState.pokedex2,
        chars
      }
    }));

    this.setState(prevState => ({
      ...prevState,
      pokedex1: {
        ...prevState.pokedex1,
        totalExp: this.calcTotalExp(prevState.pokedex1.chars)
      },
      pokedex2: {
        ...prevState.pokedex2,
        totalExp: this.calcTotalExp(prevState.pokedex2.chars)
      }
    }));
  };

  calcTotalExp = hand => {
    return hand.reduce((total, char) => total + char.base_experience, 0);
  };

  render() {
    const { pokedex1, pokedex2 } = this.state;
    return (
      <React.Fragment>
        <button className="btn-play" onClick={this.assignHands}>
          Play Again
        </button>
        <hr />
        <Pokedex
          title="hand-1"
          chars={pokedex1.chars}
          totalExp={pokedex1.totalExp}
          isWinner={pokedex1.totalExp > pokedex2.totalExp}
        />
        <hr />
        <Pokedex
          title="hand-2"
          chars={pokedex2.chars}
          totalExp={pokedex2.totalExp}
          isWinner={pokedex2.totalExp > pokedex1.totalExp}
        />
      </React.Fragment>
    );
  }
}

export default Pokegame;
