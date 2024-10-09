"use client";

import { useEffect, useState } from "react";

type Data = {
  id: number;
  name: string;
};

export default function Home() {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [users, setUsers] = useState<Data[]>([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    if (isFetching) {
      setTimeout(() => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setUsers(data);
            setIsFetching(false);
          })
          .catch((error) => {
            console.error("Failed to fetch:", error);
            setIsFetching(false);
          });
      }, 2000);
    }
  }, [isFetching]);

  const handleOnClick = () => {
    setIsFetching(true);
  };

  return (
    <div>
      <button
        className="bg-purple-500 p-2 rounded-lg"
        onClick={handleOnClick}
        disabled={isFetching}
      >
        {isFetching ? "Cargando..." : "Activar Fetch"}
      </button>
      {users &&
        users.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
    </div>
  );
}
