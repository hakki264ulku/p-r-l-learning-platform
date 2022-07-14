import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

export const Logout = () => {
    const history = useHistory()
    useEffect(() => {
        console.log("trying to delete");
        localStorage.removeItem("isAuthenticated")
        history.push("/login")
    })
    
  return (
    <div>logout</div>
  )
}
