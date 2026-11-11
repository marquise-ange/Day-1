function Greeting() {
    // JavaScript variables
    const name = "Marquise";
    const city = "Kigali";
    const year = 2026;

    // Calculate next year
    const nextYear = year + 1;

    return (
        <div>
            <h1>Hello, {name} from {city}</h1>

            <p>Current year: {year}</p>

            <p>Next year: {nextYear}</p>
        </div>
    );
}

export default Greeting;