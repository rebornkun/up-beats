import React, { useEffect } from "react";
import { useNavigate, Navigate } from "react-router";
import Login from "./Login";

export default function Aunthenticate({ children }) {
    const navigate = useNavigate()
  const savedToken = window.localStorage.getItem("token");
  if (true) {
    return(
    navigate("/")
    )
  }
  return <div>{children}</div>
}
