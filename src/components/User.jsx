import { useEffect, useState } from "react";

const User = ({ name, location }) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    useEffect(() => {
        // Api calls
    }, []);

    
    return (
        <div className="user-card">
            <h1>Count : {count}</h1>
            <h1>Count2 : {count2}</h1>
            <button onClick={() => {
                setCount(count + 1);
                setCount2(count2 + 1);
            }}>Count Increase</button>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h4>Contact : @thakur_kaushinder</h4>
        </div>
    )
};
export default User;