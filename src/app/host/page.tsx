"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Host() {
  const [players, setPlayers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    try {
      const id = setInterval(() => {
        fetch("/data.json")
          .then((res) => res.json())
          .then((data) => {
            setPlayers(data["players"]);
          });
      }, 3000);
      return () => clearInterval(id);
    } catch {
      console.log("Cannot fetch data");
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
      <div>
        <button
          onClick={() =>
            fetch("/api/game", { method: "DELETE" }).then((res) => {
              if (!res.ok) {
                res.json().then((data) => console.log(res.status, data));
              } else router.push("/");
            })
          }
          className="bg-blue-500 rounded p-2 text-white hover:cursor-pointer hover:bg-blue-600"
        >
          DELETE HOST
        </button>
      </div>
    </div>
  );
}
