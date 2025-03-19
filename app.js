/*
  ✨ Code Review & Refactor Suggestions ✨
  Excellent job working with objects, arrays, and functions!  
  The following improvements will help with efficiency, readability, and best practices.  
  Keep up the great work! 🚀
*/

// ✅ Exercise 2: Log Pokémon at index 58 and the `game` object.
console.log(pokemon[58]);
console.log(game);

// ✅ Exercise 3: Add a difficulty property to `game`
game.difficulty = "Easy";

// ✅ Exercise 4: Select a starter Pokémon and add it to `game.party`
const charmander = pokemon[3];
game.party.push(charmander);

// ✅ Exercise 5: Add three more Pokémon to `game.party`
const additionalPokemon = [pokemon[149], pokemon[24], pokemon[13]];
game.party.push(...additionalPokemon);

// ✅ Exercise 6: Complete gyms with difficulty < 3
game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) gym.completed = true;
});

// ✅ Exercise 7: Evolve the starter Pokémon (Charmander → Charmeleon)
game.party.splice(0, 1, pokemon[4]); // Replaces Charmander with Charmeleon

// ✅ Exercise 8: Print each Pokémon's name in the party
game.party.forEach((p) => console.log(p.name));

// ✅ Exercise 9: Print all starter Pokémon
console.log("Starter Pokémon:");
pokemon.filter((p) => p.starter).forEach((p) => console.log(p.name));

// ✅ Exercise 10: Add `catchPokemon` method to `game`
game.catchPokemon = (pokemonObj) => game.party.push(pokemonObj);

// Catching Abra
game.catchPokemon(pokemon[62]);
console.log("Exercise 10:", game.party);

// ✅ Exercise 11: Update `catchPokemon` to decrease pokeball count
game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj);
  const pokeball = game.items.find((i) => i.name === "pokeball");
  if (pokeball) pokeball.quantity--; // Ensures we don't modify undefined
};

// Catching Onix
game.catchPokemon(pokemon[94]);
console.log("Exercise 11:", game.party);
console.log("Updated Items:", game.items);

// ✅ Exercise 12: Complete gyms with difficulty < 6
game.gyms.forEach((gym) => {
  if (gym.difficulty < 6) gym.completed = true;
});
console.log("Exercise 12:", game.gyms);

// ✅ Exercise 13: Add `gymStatus` method to tally completed and incomplete gyms
game.gymStatus = function () {
  return {
    completed: game.gyms.filter((gym) => gym.completed).length,
    incomplete: game.gyms.filter((gym) => !gym.completed).length,
  };
};
console.log("Exercise 13:", game.gymStatus());

// ✅ Exercise 14: Add `partyCount` method to count Pokémon in the party
game.partyCount = () => game.party.length;
console.log("Exercise 14: Party Count:", game.partyCount());

// ✅ Exercise 15: Complete gyms with difficulty < 8
game.gyms.forEach((gym) => {
  if (gym.difficulty < 8) gym.completed = true;
});
console.log("Exercise 15:", game.gyms);

// ✅ Exercise 16: Log the entire `game` object
console.log("Exercise 16:", game);
