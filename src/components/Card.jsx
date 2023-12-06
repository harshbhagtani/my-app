import { faker } from "@faker-js/faker";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { pokemons } from "../data/pokemon";

const pokemonsArr = pokemons.map((p) => ({
  ...p,
  description: faker.lorem.word(),
  fullDescription: faker.lorem.paragraph()
}));

const Card = ({ searchQuery }) => {
  const [pokemons, setPokemons] = useState();

  const fetchPokemons = (query) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        for (let i = 0; i < 1000000; i++) {}
        res(pokemonsArr?.filter((item) => item?.name?.includes(query)));
      }, 1000);
    });
  };

  useEffect(() => {
    fetchPokemons(searchQuery).then((res) => {
      setPokemons(res);
    });
  }, [searchQuery]);

  return (
    <div>
      {pokemons?.map((item) => (
        <div>
          <h3>Name: {item.name}</h3>
          <a href={item.url}>More data</a>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Card);
