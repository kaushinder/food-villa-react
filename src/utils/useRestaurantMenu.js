import { useEffect, useState, useRef } from "react";

// Simple in-memory cache: resId -> data
// Lives for the duration of the browser session
const menuCache = new Map();

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo]   = useState(() => menuCache.get(resId) ?? null);
  const [loading, setLoading]   = useState(!menuCache.has(resId));
  const [error,   setError]     = useState(null);

  // Prevent setting state on unmounted component
  const isMounted = useRef(true);
  useEffect(() => {
    isMounted.current = true;
    return () => { isMounted.current = false; };
  }, []);

  useEffect(() => {
    if (!resId) return;

    // Cache hit — nothing to fetch
    if (menuCache.has(resId)) {
      setResInfo(menuCache.get(resId));
      setLoading(false);
      return;
    }

    const fetchMenu = async () => {
      try {
        setLoading(true);
        setError(null);

        const menuAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=${resId}`;
        const response = await fetch(menuAPI);

        if (!response.ok) throw new Error("API failed");

        const json = await response.json();

        if (!json?.data) throw new Error("No data in response");

        // Store in cache before updating state
        menuCache.set(resId, json.data);

        if (isMounted.current) {
          setResInfo(json.data);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted.current) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchMenu();
  }, [resId]);

  return { resInfo, loading, error };
};

export default useRestaurantMenu;
