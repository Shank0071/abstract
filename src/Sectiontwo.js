import "./Sectiontwo.css"
import code from "./codebranch.png"
import abstractsupport from "./abstractsupport.png"
import manageaccount from "./manageaccount.png"
import managebilling from "./managebilling.png"
import manageorganizations from "./manageorganizations.png"
import abstractauthentication from "./abstractauthentication.png"
import { UilArrowRight } from '@iconscout/react-unicons'



export default function Sectiontwo() {
    return (
        <div className="Sectiontwo">
            <div className="container">
                <div>
                    <img src={code} alt="ojo" />
                </div>
                <div className="container2">
                    <h3>Branches</h3>
                    <p>Abstract lets you manage, version, and document your designs in one place.</p>
                    <button><span>Learn More</span><span><UilArrowRight className="arrow"/></span></button>
                </div>
            </div>
            <div className="container">
                <div>
                    <img src={manageaccount} alt="ojo" />
                </div>
                <div className="container2">
                    <h3>Manage your account</h3>
                    <p>Configure your account settings, such as your email, profile details, and password.</p>
                    <button><span>Learn More</span><span><UilArrowRight className="arrow"/></span></button>
                </div>
            </div>
            <div className="container">
                <div>
                    <img src={manageorganizations} alt="ojo" />
                </div>
                <div className="container2">
                    <h3>Manage organizations, teams and projects</h3>
                    <p>Use Abstract organizations, teams, and projects to organize your people and your work.</p>
                    <button><span>Learn More</span><span><UilArrowRight className="arrow"/></span></button>
                </div>
            </div>
            <div className="container">
                <div>
                    <img src={managebilling} alt="ojo" />
                </div>
                <div className="container2">
                    <h3>Manage billing</h3>
                    <p>Change subscriptions and payment details.</p>
                    <button><span>Learn More</span><span><UilArrowRight className="arrow"/></span></button>
                </div>
            </div>
            <div className="container">
            <div>
                    <img src={abstractauthentication} alt="ojo" />
                </div>
                <div className="container2">
                    <h3>Authenticate to abstract</h3>
                    <p>Set up and configure SSO, SCIM, and Just-in-Time provisioning..</p>
                    <button><span>Learn More</span><span><UilArrowRight className="arrow"/></span></button>
                </div>
            </div>
            <div className="container">
                <div>
                    <img src={abstractsupport} alt="ojo" />
                </div>
                <div className="container2">
                    <h3>Abstract Support</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Itaque et sunt illo deleniti quam. .</p>
                    <button><span>Learn More</span><span><UilArrowRight className="arrow"/></span></button>
                </div>
            </div>
        </div>
    )
}