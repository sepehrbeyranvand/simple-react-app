import { Link } from "react-router-dom";

export default function NOtFound(){
    return(
        <div className="d-flex justify-content-center align-items-center flex-column">
            <h1>404 NotFound</h1>
            <p>The page you are looking for it doesnot exists.</p>
            <Link className="btn btn-info text-light rounded-3" to='/'>Do you want to back to the <strong>Home</strong> page?</Link>
        </div>
    )
}