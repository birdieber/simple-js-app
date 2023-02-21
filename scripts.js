let pokemonList = [
  { name: `Bulbasaur`, type: [`grass`, `poison`], height: 0.7 },
  { name: `Charizard`, type: [`fire`, `flying`], height: 1.7 },
  { name: `Squirtle`, type: [`water`], height: 0.5 },
];

for (let index = 0; index < pokemonList.length; index++) {
  console.log(
    `Pokemon: ${pokemonList[index].name} ${pokemonList[index].height}.`
  );
}

//exercise here

for (let index = 0; index < pokemonList.length; index++) {
  if (pokemonList[index].height > 1) {
    document.write(
      `Pokemon: ${pokemonList[index].name} ${pokemonList[index].height}`
    );
    document.write(`- Wow! That's big!  <br/>`);
  } else {
    document.write(
      `Pokemon: ${pokemonList[index].name} ${pokemonList[index].height} <br/>`
    );
  }
}
