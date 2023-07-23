import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <header>
        <div className="container">
            <Link to="/"><h1>TechPulse</h1></Link>
            <Link to="/post"><h3>Add Post</h3></Link>
        </div>
        </header>
    )
}

export default Navbar