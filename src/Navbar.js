import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="Navbar">
            <h3>Abstract | Help Center</h3>
            <div className="NavButtons">
                <button className="SubmitRequest">Submit a request</button>
                <button className="SignIn">Sign in</button>
            </div>    
        </div>
    )
}