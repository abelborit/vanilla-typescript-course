import axios from "axios";
import { Pokemon } from "./interfaces";

const getPokemon = async (pokemonId: number): Promise<Pokemon> => {
  const { data } = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );
  // console.log(data);

  return data;
};

getPokemon(4)
  .then((pokemon) => console.log(pokemon))
  .catch((error) => console.error(error))
  .finally(() => console.log("Fin de getPokemon"));
