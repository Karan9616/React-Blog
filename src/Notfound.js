import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound =()=>{
    return (
        <div class="not-found">
            <h2>Sorry</h2>
            <p>That page canot be Found</p>
            <Link to="/">Back to Home Page..</Link>
        </div>
    );
}
export default NotFound;