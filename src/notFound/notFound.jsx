import { useEffect, useState } from "react"

export default function NotFound() {
    const [bdata, setBdata] = useState([{}])

    useEffect(() => {
        fetch('http://localhost:3000/api').then(
            response => response.json()
        ).then(
            data => {
                setBdata(data)
            }
        )
    }, [])

    return (
        <div>
            {(bdata.users) == undefined ? (<p>loading</p>) : (bdata.users.map((user, i) => {
                return (
                    <p key={i}>{user}</p>
                )
            }))}
        </div>
    )
}