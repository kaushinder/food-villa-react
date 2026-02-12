import { useEffect, useState } from "react";


const useOnlineStatus = () => {
    // check if online
    const [OnlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {

        window.addEventListener("online", () => setOnlineStatus(true));

        window.addEventListener("offline", () => setOnlineStatus(false));

    },[]);

// boolean value
    return OnlineStatus;
};
export default useOnlineStatus;