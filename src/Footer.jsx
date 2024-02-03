import { useState } from 'react';
import './Footer.css';

function Footer() {
    const [isPrivacyPolicyModalOpen, setIsPrivacyPolicyModalOpen] = useState(false);
    const [isWorkForUsModalOpen, setIsWorkForUsModalOpen] = useState(false);
    const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);
    const [isSocialMediaModalOpen, setIsSocialMediaModalOpen] = useState(false);
    const [contactUsName, setContactUsName] = useState('');
    const [contactUsContent, setContactUsContent] = useState('');
    const [inquiryType, setInquiryType] = useState('');
    const [otherInquiry, setOtherInquiry] = useState('');
    const [selectedPlatform, setSelectedPlatform] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setconfirmEmail] = useState('');
    const [position, setPosition] = useState('');
    const [wizard, setWizard] = useState('');
    const [showMessage, setshowMessage] = useState(false);

    const handleInquiryChange = (e) => {
        setInquiryType(e.target.value);
        setOtherInquiry('');
    };

    const showModal = isPrivacyPolicyModalOpen || isWorkForUsModalOpen || isContactUsModalOpen || isSocialMediaModalOpen;

    return (
        <footer>
            <a className="footer-link" href="#privacy-policy" onClick={() => setIsPrivacyPolicyModalOpen(true)}>Privacy Policy</a>
            <a className="footer-link" href="#work-for-us" onClick={() => setIsWorkForUsModalOpen(true)}>Work for Us</a>
            <a className="footer-link" href="#contact-us" onClick={() => setIsContactUsModalOpen(true)}>Contact Us</a>
            <a className="footer-link" href="#social-media" onClick={() => setIsSocialMediaModalOpen(true)}>Social Media</a>
            <div className={`modal-overlay ${showModal ? 'open' : ''}`} onClick={() => {
                setIsPrivacyPolicyModalOpen(false);
                setIsWorkForUsModalOpen(false);
                setIsContactUsModalOpen(false);
                setIsSocialMediaModalOpen(false);}}></div>
            <dialog className="modal" open={isPrivacyPolicyModalOpen} aria-hidden={!isPrivacyPolicyModalOpen}>
                <h2>Privacy Policy for Hogwarts School of Witchcraft and Wizardry</h2>
                <p>Effective Date: Dec 12th, 2023</p>
                <p>Welcome to Hogwarts School of Witchcraft and Wizardry. This privacy policy outlines how we collect, use, protect, and share information gathered about you on our website, as well as information and resources used from the Harry Potter Wiki.</p>
                <h2>Information Collection and Use</h2>
                <p>No information is actually collected.</p>
                <p>This website also utilizes resources from the Harry Potter Wiki, which are released under the Creative Commons Attribution-Share Alike License (CC-BY-SA). These resources are used in accordance with the terms of this license.</p>
                <button type="button" onClick={() => setIsPrivacyPolicyModalOpen(false)}>Close</button>
            </dialog>

            <dialog className="modal" open={isWorkForUsModalOpen} aria-hidden={!isWorkForUsModalOpen}>
                <h2>Apply for a Position at Hogwarts</h2>
                <form onSubmit={(e) => {e.preventDefault(); setshowMessage(true);}}>
                    <label id="name-label" htmlFor="name">Name: <span className="required">* required</span></label>
                    <input id="name" name="name" type="text" onInput={(e) => {setName(e.target.value); setshowMessage(false);}}/>

                    <label id="email-label" htmlFor="email">Email: <span className="required">* required</span></label>
                    <input id="email" name="email" type="text" onInput={(e) => {setEmail(e.target.value); setshowMessage(false);}}/>

                    <label id="confirm-email-label" htmlFor="confirm-email">Confirm Email: <span className="required">* required</span></label>
                    <input id="confirm-email" name="confirm-email" type="text" onInput={(e) => {setconfirmEmail(e.target.value); setshowMessage(false);}}/>

                    <label id="position-label" htmlFor="position">Position Applied For: <span className="required">* required</span></label>
                    <input id="position" name="position" type="text" onInput={(e) => {setPosition(e.target.value); setshowMessage(false);}}/>

                    <label id="wizard-label" htmlFor="wizard">Are you a wizard? <span className="required">* required</span></label>
                    <select id="wizard" name="wizard" onInput={(e) => {setWizard(e.target.value); setshowMessage(false);}}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    {confirmEmail != email && <span>Emails don't match</span>}
                    {(!name || !email || !confirmEmail || !position || !wizard) && <span>You must enter all required fields</span>}
                    {showMessage && <span>You entered: {name}, {email}, {position}, {wizard}</span>}
                    
                    <button type="submit" className="link-style-button">Submit</button>
                    <button type="button" onClick={() => setIsWorkForUsModalOpen(false)}>Close</button>
                </form>
            </dialog>

            <dialog className="modal" open={isContactUsModalOpen} aria-hidden={!isContactUsModalOpen}>
                <form onSubmit={(e) => e.preventDefault()}>
                    <h2>Contact Us</h2>

                    <label htmlFor="contact-name">Name:</label>
                    <input id="contact-name" type="text" value={contactUsName} onChange={(e) => setContactUsName(e.target.value)} />

                    <label htmlFor="contact-content">Message:</label>
                    <textarea id="contact-content" value={contactUsContent} onChange={(e) => setContactUsContent(e.target.value)} />

                    <label htmlFor="inquiry-type">Type of Inquiry:</label>
                    <select id="inquiry-type" value={inquiryType} onChange={handleInquiryChange}>
                        <option value="">Select</option>
                        <option value="admissions">Admissions</option>
                        <option value="course">Course Information</option>
                        <option value="other">Other</option>
                    </select>

                    {inquiryType === 'other' && (
                        <div>
                            <label htmlFor="other-inquiry">Please specify:</label>
                            <input id="other-inquiry" type="text" value={otherInquiry} onChange={(e) => setOtherInquiry(e.target.value)} />
                        </div>
                    )}

                    <button type="submit" className="submit-button">Send</button>
                    <button type="button" className="close-button" onClick={() => setIsContactUsModalOpen(false)}>Close</button>
                </form>
            </dialog>

            <dialog className="modal" open={isSocialMediaModalOpen} aria-hidden={!isSocialMediaModalOpen}>
                <h2>Connect with Hogwarts on Social Media</h2>
                <select value={selectedPlatform} onChange={(e) => setSelectedPlatform(e.target.value)}>
                    <option value="">Select Platform</option>
                    <option value="facebook">Facebook</option>
                    <option value="twitter">Twitter</option>
                    <option value="instagram">Instagram</option>
                </select>

                {selectedPlatform && (
                    <div>
                        <p>Follow us on {selectedPlatform} for the latest updates and magical insights!</p>
                    </div>
                )}

                <button type="button" onClick={() => setIsSocialMediaModalOpen(false)}>Close</button>
            </dialog>
        </footer>
    );
}

export default Footer;
