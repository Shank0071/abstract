import "./Footer.css"

export default function Footer() {
    return (
        <div className="Footer">
            <div className="container">
                <h3>Abstract</h3>
                <ul>
                    <li>Start Trial</li>
                    <li>Pricing</li>
                    <li>Download</li>
                </ul>
            </div>
            <div className="container">
                <h3>Resources</h3>
                <ul>
                    <li>Blog</li>
                    <li>Help Center</li>
                    <li>Release</li>
                    <li>Status</li>
                </ul>
            </div>
            <div className="container">
                <h3>Community</h3>
                <ul>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                    <li>Facebook</li>
                    <li>Dribbble</li>
                    <li>Podcast</li>
                </ul>
            </div>
            <div className="container container2">
                <div>
                    <h3>Company</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Legal</li>
                    </ul>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <p>info@abstract.com</p>
                </div>
            </div>
        </div>
    )
}