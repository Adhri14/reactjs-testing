import React, { useState, useEffect } from "react";

const data = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

export default function CompVariant() {
  const [user, setUser] = useState();

  useEffect(() => {
    setTimeout(() => {
      setUser("Adhri");
    }, 1000);
  }, []);
  return (
    <>
      {user && <p>Selamat datang {user}</p>}
      <p>Hari - hari yang ada : </p>
      {data.map((item) => (
        <p data-testid="hari" key={item}>
          {item}
        </p>
      ))}
    </>
  );
}
