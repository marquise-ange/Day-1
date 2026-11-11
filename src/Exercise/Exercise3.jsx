function ContactForm() {
    function handleSubmit() {
        alert("Form submitted!");
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name:</label>
            <input
                type="text"
                id="name"
                tabIndex={1}
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                tabIndex={2}
            />

            <button type="submit" tabIndex={3}>
                Submit
            </button>
        </form>
    );
}

export default ContactForm;