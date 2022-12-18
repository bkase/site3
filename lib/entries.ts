export type Entry = {
  kind: 'blog' | 'tweet';
  title: string;
  imgUrl: string;
  date: Date;
  summary: string;
};

export const sampleEntries: Entry[] = [
  {
    kind: "tweet",
    title: "Solving Data Races in SnarkyJS",
    imgUrl: "/reducers-are-monoids-title.png",
    date: new Date(),
    summary: "SnarkyJS combines ideas from algebra and frontend state management to manage data races in zkApps on @MinaProtocol 🤯.\n\nHow? 🧵"
  },
  {
    kind: "blog",
    title: "Reducers are Monoids on Functions",
    imgUrl: "/reducers-are-monoids-title.png",
    date: new Date(1582100668065),
    summary: "Reducers, a tool for handling state changes, help engineers manage complexity in their applications. But why is this such a great tool for managing this complexity?"
  },
  {
    kind: "blog",
    title: "Semigroups and Monoids",
    imgUrl: "/semigroups-and-monoids-title.png",
    date: new Date(1581841641579),
    summary: "Semigroups and monoids are the two algebraic structures that are most useful to the working engineer. Discovering the algebra in our APIs give rise to a minimally complex and maximally expressive interface, and the shared vocabulary of these terms give rise to productive teams."
  },
];

