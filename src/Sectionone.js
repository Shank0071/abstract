import "./Sectionone.css"
import { UilArrowRight } from '@iconscout/react-unicons'

export default function Sectionone() {
    return (
        <div className="Sectionone">
            <h1>How can we help?</h1>
            <div>
                <input type="search" placeholder="Search"/>
                <UilArrowRight className="arrow"/>
            </div>
           
        </div>
    )
}