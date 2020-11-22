const defaultLessons = [
  [
    {
      premises: ["P", "P⇒Q"],
      conclusion: "Q",
      rules: ["E⇒"],
    },
    {
      premises: ["P∨Q", "P⇒R", "Q⇒R"],
      conclusion: "R",
      rules: ["E∨"],
    },
  ],
  [{ premises: ["P¬¬"], conclusion: "P", rules: ["E¬"] }],
];

export default defaultLessons;
