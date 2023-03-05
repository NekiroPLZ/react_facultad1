import React from "react";
import "./App.css";
import BookItem from "./components/BookItem";

const App = () => {
  const games = [
    {
      title: "Dota 2",
      release: new Date(2012, 12, 12),
      company: "Valve",
      hours: 3600,
    },
    {
      title: "CS GO",
      release: new Date(2012, 1, 3),
      company: "Valve",
      hours: 1800,
    },
    {
      title: "Skyrim",
      release: new Date(2011, 4, 4),
      company: "Bethesda",
      hours: 5000,
    },
  ];

  return (
    <div className="App">
      <div className="background">
        <BookItem
          title={games[0].title}
          release={games[0].release}
          company={games[0].company}
          hours={games[0].hours}
        />
        <BookItem
          title={games[1].title}
          release={games[1].release}
          company={games[1].company}
          hours={games[1].hours}
        />
        <BookItem
          title={games[2].title}
          release={games[2].release}
          company={games[2].company}
          hours={games[2].hours}
        />
      </div>
    </div>
  );
};

export default App;
