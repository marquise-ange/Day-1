function ContactCard() {
    return (
        <div className="contact-card">
            <img src="/profile.jpg" alt="Profile picture" />
            <input type="text" placeholder="Enter your name" />
            <br />
            <ul>
                <li>Frontend Developer</li>
                <li>Information Management Student</li>
            </ul>
        </div>
    );
}

export default ContactCard;