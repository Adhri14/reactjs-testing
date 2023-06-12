import React, { useState } from "react";

export default function SimpleShowHide() {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div>
      <p>Saya sedang {show ? "muncul" : "sembunyi"}</p>
      <button onClick={toggleShow}>{show ? "Sembunyikan" : "Tampilkan"}</button>
    </div>
  );
}
