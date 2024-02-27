import { Link } from "react-router-dom"

export function Policies(){
    return(
        <>
        <Link to={"/settings"}>
            <p>Go back</p>
        </Link>
        <p>Shiny private data just for me :O</p>
        <p>Smluvní podmínky, GDPR</p>
        </>
    )
}