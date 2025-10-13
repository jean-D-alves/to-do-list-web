import { useState, useEffect } from "react";
import { handleUserData } from "../functions/handleUserData.js";

export default function Account() {

  const [userData, setUserData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await handleUserData();
      if (data) setUserData(data);
      console.log(data);
    }
    fetchData();
  }, []);
  return (
    <div className="account-content">
      {userData ? (
        <>
          <p> name : {userData.name}</p>
          <p> email : {userData.email}</p>
        </>
      ) : (
        <p>Carregando usuário...</p>
      )}
    </div>
  );
}
