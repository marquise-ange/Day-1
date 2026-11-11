function Technologies() {
    const technologies = ["HTML", "CSS", "JavaScript"];

    return (
        <div>
            <h2>Technologies I'm Learning</h2>

            {/* Display technologies dynamically using map() */}
            <ul>
                {technologies.map((technology, index) => (
                    <li key={index}>{technology}</li>
                ))}
            </ul>
        </div>
    );
}

export default Technologies;