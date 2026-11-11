function StudentResult() {
    const score = 75;

    // Compute a value before return
    let result;

    if (score >= 60) {
        result = "Pass";
    } else {
        result = "Retry";
    }

    return (
        <div>
            <h2>Student Results</h2>

            <p>Score: {score}</p>

            <p>Result: {result}</p>

            {/* Using a ternary expression */}
            <p>Status: {score >= 60 ? "Pass" : "Retry"}</p>
        </div>
    );
}

export default StudentResult;