"use client";

import { useEffect, useState } from "react";

export default function Host() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    try {
      const id = setInterval(
        () =>
          fetch("http://localhost:3000/data.json")
            .then((res) => res.json())
            .then((data) => {
              setPlayers(data["players"]);
            }),
        1000
      );
      return () => clearInterval(id);
    } catch {
      console.log("failed");
    }
  }, []);

  return (
    <div className="flex flex-col text-center gap-12">
      <div className="flex self-center gap-5">
        <p>Player Count:</p>
        <input
          name="playerCount"
          id="playerCount"
          type="number"
          min={1}
          max={8}
          defaultValue={0}
          className="bg-zinc-300 border border-black text-center rounded"
        />
      </div>
      <div className="self-center flex gap-3">
        <p>Joined: </p>
        <p>{players.join(", ")}</p>
      </div>
    </div>
  );
}
