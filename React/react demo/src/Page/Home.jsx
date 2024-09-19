import React, { useState } from 'react'

export default function Home() {
    const [username, setuserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:9000/auth/register`, {
            method: "POST",
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then((res) => res.json())
            .then((data) => console.log(data))

    }

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit} >
                <input value={username} onChange={(e) => setuserName(e.target.value)} type="text" placeholder='username' />

                <br /><br />


                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='email' /> <br /><br />


                <input value={password} onChange={(e) => setpassword(e.target.value)} type="text" placeholder='password' /> <br /><br />
                <button> signup</button>

            </form>
        </div>
    )
}
