"use client";
import { useEffect, useState } from "react";

type Data = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export default function Home() {
  const [data, setData] = useState<Data[]>([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="flex flex-col items-center font-serif">
      <h1 className="text-2xl">Users List</h1>
      <ul className="flex flex-col gap-2 ">
        {data.map((user: Data) => (
          <div
            key={user.id}
            className="p-2 hover:bg-green-500 bg-purple-500 rounded-lg"
          >
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
