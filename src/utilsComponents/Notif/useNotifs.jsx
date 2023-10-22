import { useEffect, useState } from "react";

const useNotifs = () => {
  const [loaded, setLoaded] = useState(false);
  let containerNotif = null;
  useEffect(() => {
    containerNotif = document.getElementById("notifs_container");
    if (containerNotif == null) {
      containerNotif = document.createElement("div");
      containerNotif.setAttribute("id", "notifs_container");
    }
    document.body.prepend(containerNotif);
    setLoaded(true);
  }, []);

  return { loaded };
};

export default useNotifs;
