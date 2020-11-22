const { ObjectId } = require("mongoose").Types;
module.exports = [
  [
    {
      premises: ["P", "P⇒Q"],
      conclusion: "Q",
      rules: ["E⇒"],
      id: new ObjectId(),
    },
    {
      premises: ["P∨Q", "P⇒R", "Q⇒R"],
      conclusion: "R",
      rules: ["E∨"],
      id: new ObjectId(),
    },
  ],
  [
    {
      premises: ["P¬¬", "P∧U"],
      conclusion: "P",
      rules: ["E¬"],
      id: new ObjectId(),
    },
    {
      premises: ["Q¬", "P⇒Q"],
      conclusion: "P¬",
      rules: ["E¬"],
      id: new ObjectId(),
    },
    {
      premises: ["P¬¬", "Z∨U", "Z⇒A", "V⇒A"],
      conclusion: "A",
      rules: ["E¬"],
      id: new ObjectId(),
    },
    {
      premises: ["P¬¬", "Z∨U", "Z⇒A", "V⇒A"],
      conclusion: "A",
      rules: ["E¬"],
      id: new ObjectId(),
    },
    {
      premises: ["P¬¬", "Z∨U", "Z⇒A", "V⇒A"],
      conclusion: "A",
      rules: ["E¬"],
      id: new ObjectId(),
    },
  ],
  [
    {
      premises: ["P¬¬", "Z∨U", "Z⇒A", "V⇒A"],
      conclusion: "A",
      rules: ["E¬"],
      id: new ObjectId(),
    },
  ],
  [
    {
      premises: ["P¬¬", "Z∨U", "Z⇒A", "V⇒A"],
      conclusion: "A",
      rules: ["E¬"],
      id: new ObjectId(),
    },
  ],
];
