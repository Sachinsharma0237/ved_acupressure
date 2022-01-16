import React from 'react'
import './Home.css';

export default function Home(){
    return(
        <div className="bg-img1">
          <form action="/action_page.php" className="container2">
            <h1>Login</h1>
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required/>
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
            <button type="submit" className="btn">Login</button>
          </form>
        </div>
    )
}