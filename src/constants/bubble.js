const bubbleData = [
  {
    type1: "Water",
    type2: "Steel",
    count: 1,
  },
  {
    type1: "Water",
    type2: "Rock",
    count: 5,
  },
  {
    type1: "Water",
    type2: "Psychic",
    count: 7,
  },
  {
    type1: "Water",
    type2: "Poison",
    count: 3,
  },
  {
    type1: "Water",
    type2: "Ice",
    count: 4,
  },
  {
    type1: "Water",
    type2: "Ground",
    count: 10,
  },
  {
    type1: "Water",
    type2: "Grass",
    count: 3,
  },
  {
    type1: "Water",
    type2: "Ghost",
    count: 4,
  },
  {
    type1: "Water",
    type2: "Flying",
    count: 7,
  },
  {
    type1: "Water",
    type2: "Fighting",
    count: 4,
  },
  {
    type1: "Water",
    type2: "Fairy",
    count: 4,
  },
  {
    type1: "Water",
    type2: "Electric",
    count: 2,
  },
  {
    type1: "Water",
    type2: "Dragon",
    count: 5,
  },
  {
    type1: "Water",
    type2: "Dark",
    count: 8,
  },
  {
    type1: "Water",
    type2: "Bug",
    count: 2,
  },
  {
    type1: "Steel",
    type2: "Rock",
    count: 3,
  },
  {
    type1: "Steel",
    type2: "Psychic",
    count: 7,
  },
  {
    type1: "Steel",
    type2: "Poison",
    count: 2,
  },
  {
    type1: "Steel",
    type2: "Ground",
    count: 2,
  },
  {
    type1: "Steel",
    type2: "Ghost",
    count: 5,
  },
  {
    type1: "Steel",
    type2: "Flying",
    count: 2,
  },
  {
    type1: "Steel",
    type2: "Fighting",
    count: 1,
  },
  {
    type1: "Steel",
    type2: "Fairy",
    count: 4,
  },
  {
    type1: "Steel",
    type2: "Dragon",
    count: 5,
  },
  {
    type1: "Rock",
    type2: "Water",
    count: 6,
  },
  {
    type1: "Rock",
    type2: "Steel",
    count: 4,
  },
  {
    type1: "Rock",
    type2: "Psychic",
    count: 2,
  },
  {
    type1: "Rock",
    type2: "Poison",
    count: 3,
  },
  {
    type1: "Rock",
    type2: "Ice",
    count: 2,
  },
  {
    type1: "Rock",
    type2: "Ground",
    count: 6,
  },
  {
    type1: "Rock",
    type2: "Grass",
    count: 2,
  },
  {
    type1: "Rock",
    type2: "Flying",
    count: 6,
  },
  {
    type1: "Rock",
    type2: "Fire",
    count: 2,
  },
  {
    type1: "Rock",
    type2: "Fighting",
    count: 1,
  },
  {
    type1: "Rock",
    type2: "Fairy",
    count: 3,
  },
  {
    type1: "Rock",
    type2: "Electric",
    count: 4,
  },
  {
    type1: "Rock",
    type2: "Dragon",
    count: 2,
  },
  {
    type1: "Rock",
    type2: "Dark",
    count: 2,
  },
  {
    type1: "Rock",
    type2: "Bug",
    count: 2,
  },
  {
    type1: "Psychic",
    type2: "Steel",
    count: 2,
  },
  {
    type1: "Psychic",
    type2: "Normal",
    count: 2,
  },
  {
    type1: "Psychic",
    type2: "Ice",
    count: 1,
  },
  {
    type1: "Psychic",
    type2: "Grass",
    count: 2,
  },
  {
    type1: "Psychic",
    type2: "Ghost",
    count: 4,
  },
  {
    type1: "Psychic",
    type2: "Flying",
    count: 9,
  },
  {
    type1: "Psychic",
    type2: "Fire",
    count: 1,
  },
  {
    type1: "Psychic",
    type2: "Fighting",
    count: 3,
  },
  {
    type1: "Psychic",
    type2: "Fairy",
    count: 9,
  },
  {
    type1: "Psychic",
    type2: "Dragon",
    count: 1,
  },
  {
    type1: "Psychic",
    type2: "Dark",
    count: 1,
  },
  {
    type1: "Poison",
    type2: "Water",
    count: 3,
  },
  {
    type1: "Poison",
    type2: "Psychic",
    count: 2,
  },
  {
    type1: "Poison",
    type2: "Normal",
    count: 2,
  },
  {
    type1: "Poison",
    type2: "Ground",
    count: 4,
  },
  {
    type1: "Poison",
    type2: "Flying",
    count: 3,
  },
  {
    type1: "Poison",
    type2: "Fire",
    count: 2,
  },
  {
    type1: "Poison",
    type2: "Fighting",
    count: 2,
  },
  {
    type1: "Poison",
    type2: "Fairy",
    count: 1,
  },
  {
    type1: "Poison",
    type2: "Dragon",
    count: 4,
  },
  {
    type1: "Poison",
    type2: "Dark",
    count: 5,
  },
  {
    type1: "Poison",
    type2: "Bug",
    count: 1,
  },
  {
    type1: "Normal",
    type2: "Water",
    count: 1,
  },
  {
    type1: "Normal",
    type2: "Psychic",
    count: 5,
  },
  {
    type1: "Normal",
    type2: "Ground",
    count: 1,
  },
  {
    type1: "Normal",
    type2: "Grass",
    count: 2,
  },
  {
    type1: "Normal",
    type2: "Ghost",
    count: 2,
  },
  {
    type1: "Normal",
    type2: "Flying",
    count: 31,
  },
  {
    type1: "Normal",
    type2: "Fighting",
    count: 4,
  },
  {
    type1: "Normal",
    type2: "Fairy",
    count: 5,
  },
  {
    type1: "Normal",
    type2: "Dragon",
    count: 1,
  },
  {
    type1: "Ice",
    type2: "Water",
    count: 4,
  },
  {
    type1: "Ice",
    type2: "Steel",
    count: 2,
  },
  {
    type1: "Ice",
    type2: "Rock",
    count: 1,
  },
  {
    type1: "Ice",
    type2: "Psychic",
    count: 4,
  },
  {
    type1: "Ice",
    type2: "Ground",
    count: 3,
  },
  {
    type1: "Ice",
    type2: "Ghost",
    count: 1,
  },
  {
    type1: "Ice",
    type2: "Flying",
    count: 2,
  },
  {
    type1: "Ice",
    type2: "Fire",
    count: 1,
  },
  {
    type1: "Ice",
    type2: "Fairy",
    count: 1,
  },
  {
    type1: "Ice",
    type2: "Bug",
    count: 2,
  },
  {
    type1: "Ground",
    type2: "Steel",
    count: 5,
  },
  {
    type1: "Ground",
    type2: "Rock",
    count: 3,
  },
  {
    type1: "Ground",
    type2: "Psychic",
    count: 2,
  },
  {
    type1: "Ground",
    type2: "Normal",
    count: 1,
  },
  {
    type1: "Ground",
    type2: "Grass",
    count: 2,
  },
  {
    type1: "Ground",
    type2: "Ghost",
    count: 4,
  },
  {
    type1: "Ground",
    type2: "Flying",
    count: 4,
  },
  {
    type1: "Ground",
    type2: "Fire",
    count: 1,
  },
  {
    type1: "Ground",
    type2: "Fighting",
    count: 1,
  },
  {
    type1: "Ground",
    type2: "Electric",
    count: 1,
  },
  {
    type1: "Ground",
    type2: "Dragon",
    count: 2,
  },
  {
    type1: "Ground",
    type2: "Dark",
    count: 3,
  },
  {
    type1: "Grass",
    type2: "Steel",
    count: 3,
  },
  {
    type1: "Grass",
    type2: "Psychic",
    count: 3,
  },
  {
    type1: "Grass",
    type2: "Poison",
    count: 15,
  },
  {
    type1: "Grass",
    type2: "Normal",
    count: 3,
  },
  {
    type1: "Grass",
    type2: "Ice",
    count: 3,
  },
  {
    type1: "Grass",
    type2: "Ground",
    count: 1,
  },
  {
    type1: "Grass",
    type2: "Ghost",
    count: 3,
  },
  {
    type1: "Grass",
    type2: "Flying",
    count: 7,
  },
  {
    type1: "Grass",
    type2: "Fire",
    count: 1,
  },
  {
    type1: "Grass",
    type2: "Fighting",
    count: 5,
  },
  {
    type1: "Grass",
    type2: "Fairy",
    count: 5,
  },
  {
    type1: "Grass",
    type2: "Dragon",
    count: 5,
  },
  {
    type1: "Grass",
    type2: "Dark",
    count: 5,
  },
  {
    type1: "Ghost",
    type2: "Poison",
    count: 4,
  },
  {
    type1: "Ghost",
    type2: "Ground",
    count: 2,
  },
  {
    type1: "Ghost",
    type2: "Grass",
    count: 11,
  },
  {
    type1: "Ghost",
    type2: "Flying",
    count: 3,
  },
  {
    type1: "Ghost",
    type2: "Fire",
    count: 3,
  },
  {
    type1: "Ghost",
    type2: "Fairy",
    count: 2,
  },
  {
    type1: "Ghost",
    type2: "Dragon",
    count: 2,
  },
  {
    type1: "Ghost",
    type2: "Dark",
    count: 1,
  },
  {
    type1: "Flying",
    type2: "Water",
    count: 1,
  },
  {
    type1: "Flying",
    type2: "Steel",
    count: 1,
  },
  {
    type1: "Flying",
    type2: "Fighting",
    count: 1,
  },
  {
    type1: "Flying",
    type2: "Dragon",
    count: 2,
  },
  {
    type1: "Flying",
    type2: "Dark",
    count: 1,
  },
  {
    type1: "Fire",
    type2: "Water",
    count: 1,
  },
  {
    type1: "Fire",
    type2: "Steel",
    count: 1,
  },
  {
    type1: "Fire",
    type2: "Rock",
    count: 3,
  },
  {
    type1: "Fire",
    type2: "Psychic",
    count: 3,
  },
  {
    type1: "Fire",
    type2: "Poison",
    count: 1,
  },
  {
    type1: "Fire",
    type2: "Normal",
    count: 2,
  },
  {
    type1: "Fire",
    type2: "Ground",
    count: 3,
  },
  {
    type1: "Fire",
    type2: "Ghost",
    count: 5,
  },
  {
    type1: "Fire",
    type2: "Flying",
    count: 7,
  },
  {
    type1: "Fire",
    type2: "Fighting",
    count: 7,
  },
  {
    type1: "Fire",
    type2: "Dragon",
    count: 2,
  },
  {
    type1: "Fire",
    type2: "Dark",
    count: 1,
  },
  {
    type1: "Fire",
    type2: "Bug",
    count: 2,
  },
  {
    type1: "Fighting",
    type2: "Water",
    count: 2,
  },
  {
    type1: "Fighting",
    type2: "Steel",
    count: 3,
  },
  {
    type1: "Fighting",
    type2: "Psychic",
    count: 3,
  },
  {
    type1: "Fighting",
    type2: "Poison",
    count: 2,
  },
  {
    type1: "Fighting",
    type2: "Ice",
    count: 1,
  },
  {
    type1: "Fighting",
    type2: "Ghost",
    count: 2,
  },
  {
    type1: "Fighting",
    type2: "Flying",
    count: 2,
  },
  {
    type1: "Fighting",
    type2: "Fire",
    count: 1,
  },
  {
    type1: "Fighting",
    type2: "Electric",
    count: 1,
  },
  {
    type1: "Fighting",
    type2: "Dragon",
    count: 1,
  },
  {
    type1: "Fighting",
    type2: "Dark",
    count: 2,
  },
  {
    type1: "Fairy",
    type2: "Steel",
    count: 4,
  },
  {
    type1: "Fairy",
    type2: "Psychic",
    count: 1,
  },
  {
    type1: "Fairy",
    type2: "Flying",
    count: 4,
  },
  {
    type1: "Fairy",
    type2: "Fighting",
    count: 1,
  },
  {
    type1: "Electric",
    type2: "Water",
    count: 1,
  },
  {
    type1: "Electric",
    type2: "Steel",
    count: 4,
  },
  {
    type1: "Electric",
    type2: "Psychic",
    count: 1,
  },
  {
    type1: "Electric",
    type2: "Poison",
    count: 3,
  },
  {
    type1: "Electric",
    type2: "Normal",
    count: 2,
  },
  {
    type1: "Electric",
    type2: "Ice",
    count: 2,
  },
  {
    type1: "Electric",
    type2: "Ground",
    count: 1,
  },
  {
    type1: "Electric",
    type2: "Grass",
    count: 3,
  },
  {
    type1: "Electric",
    type2: "Ghost",
    count: 1,
  },
  {
    type1: "Electric",
    type2: "Flying",
    count: 8,
  },
  {
    type1: "Electric",
    type2: "Fire",
    count: 1,
  },
  {
    type1: "Electric",
    type2: "Fighting",
    count: 2,
  },
  {
    type1: "Electric",
    type2: "Fairy",
    count: 2,
  },
  {
    type1: "Electric",
    type2: "Dragon",
    count: 3,
  },
  {
    type1: "Electric",
    type2: "Dark",
    count: 2,
  },
  {
    type1: "Dragon",
    type2: "Water",
    count: 3,
  },
  {
    type1: "Dragon",
    type2: "Psychic",
    count: 4,
  },
  {
    type1: "Dragon",
    type2: "Normal",
    count: 1,
  },
  {
    type1: "Dragon",
    type2: "Ice",
    count: 6,
  },
  {
    type1: "Dragon",
    type2: "Ground",
    count: 7,
  },
  {
    type1: "Dragon",
    type2: "Ghost",
    count: 3,
  },
  {
    type1: "Dragon",
    type2: "Flying",
    count: 6,
  },
  {
    type1: "Dragon",
    type2: "Fire",
    count: 1,
  },
  {
    type1: "Dragon",
    type2: "Fighting",
    count: 2,
  },
  {
    type1: "Dragon",
    type2: "Fairy",
    count: 1,
  },
  {
    type1: "Dragon",
    type2: "Electric",
    count: 1,
  },
  {
    type1: "Dragon",
    type2: "Dark",
    count: 1,
  },
  {
    type1: "Dark",
    type2: "Steel",
    count: 3,
  },
  {
    type1: "Dark",
    type2: "Psychic",
    count: 2,
  },
  {
    type1: "Dark",
    type2: "Poison",
    count: 2,
  },
  {
    type1: "Dark",
    type2: "Normal",
    count: 5,
  },
  {
    type1: "Dark",
    type2: "Ice",
    count: 3,
  },
  {
    type1: "Dark",
    type2: "Ground",
    count: 1,
  },
  {
    type1: "Dark",
    type2: "Grass",
    count: 2,
  },
  {
    type1: "Dark",
    type2: "Ghost",
    count: 2,
  },
  {
    type1: "Dark",
    type2: "Flying",
    count: 7,
  },
  {
    type1: "Dark",
    type2: "Fire",
    count: 4,
  },
  {
    type1: "Dark",
    type2: "Fighting",
    count: 2,
  },
  {
    type1: "Dark",
    type2: "Fairy",
    count: 3,
  },
  {
    type1: "Dark",
    type2: "Dragon",
    count: 4,
  },
  {
    type1: "Bug",
    type2: "Water",
    count: 3,
  },
  {
    type1: "Bug",
    type2: "Steel",
    count: 7,
  },
  {
    type1: "Bug",
    type2: "Rock",
    count: 4,
  },
  {
    type1: "Bug",
    type2: "Psychic",
    count: 3,
  },
  {
    type1: "Bug",
    type2: "Poison",
    count: 12,
  },
  {
    type1: "Bug",
    type2: "Ground",
    count: 2,
  },
  {
    type1: "Bug",
    type2: "Grass",
    count: 6,
  },
  {
    type1: "Bug",
    type2: "Ghost",
    count: 1,
  },
  {
    type1: "Bug",
    type2: "Flying",
    count: 14,
  },
  {
    type1: "Bug",
    type2: "Fire",
    count: 2,
  },
  {
    type1: "Bug",
    type2: "Fighting",
    count: 5,
  },
  {
    type1: "Bug",
    type2: "Fairy",
    count: 2,
  },
  {
    type1: "Bug",
    type2: "Electric",
    count: 4,
  },
  {
    type1: "Bug",
    type2: "Dark",
    count: 1,
  },
];

export default bubbleData;
