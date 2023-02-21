import React, { useEffect, useState } from "react"
import UserDashBoard from "../UserDashBoard/UserDashBoard"
import DjDashboard from "../DjDashboard/DjDashboard"
import Guest from "../Guest"
localStorage.setItem("testData", {role: "user"})


export default function Landing() {
    const [userData, setUserData] = useState(null)
    useEffect(() => {
        const user = localStorage.getItem("testData")
        setUserData(user)
    }, [])


console.log(userData);

    // if (role === "user") <UserDashBoard />
    // if (role === "dj") <DjDashboard />

    // if (!userData) <Guest />


}