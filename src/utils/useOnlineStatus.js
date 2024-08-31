import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  //check internet connection
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  // return boolean
  return onlineStatus;
};

export default useOnlineStatus;
