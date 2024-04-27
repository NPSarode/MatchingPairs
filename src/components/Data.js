export const data = [
  {
    column: "Column A",
    type: "String",
    values: [
      {
        id: 1,
        value: "Sheila eats 2 pieces of a pizza cut in 8 pieces",
      },
      {
        id: 2,
        value: "Karaba read 5 pages of a story with 11 pages",
      },
      {
        id: 3,
        value: "5 pages down, 8 more to go for Jayesh.",
      },
      {
        id: 4,
        value: "Gautam has read almost half of the story.",
      },
    ],
  },
  {
    column: "Column B",
    type: "String",
    values: [
      {
        id: 1,
        value: "5/11",
      },
      {
        id: 2,
        value: "5/13",
      },
      {
        id: 3,
        value: "1/2",
      },
      {
        id: 4,
        value: "1/4",
      },
    ],
  },
  {
    matches: [
      { Column_A: 1, Column_B: 4 },
      { Column_A: 2, Column_B: 1 },
      { Column_A: 3, Column_B: 2 },
      { Column_A: 4, Column_B: 3 },
    ],
  },
];
