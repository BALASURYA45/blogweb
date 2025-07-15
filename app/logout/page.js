'use client';
import { useEffect } from "react";

const Logout = () => {
    useEffect(() => {
        alert("Logout successful");
    }, []);

    return (
        <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center", 
            height: "100vh" 
        }}>
            <img 
                src="https://up.yimg.com/ib/th/id/OIP.VS53kiHGDz-pJdgc6ovjiwHaD-?pid=Api&rs=1&c=1&qlt=95&w=183&h=98" 
                alt="Logout Illustration" 
                style={{ marginBottom: "20px" }}
            />
            <p>Logout successful</p>
        </div>
    );
};


export default Logout;