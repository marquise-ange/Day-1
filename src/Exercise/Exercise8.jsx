function NoticeBox() {
    const borderColor = "green";

    // JavaScript style object
    const noticeStyle = {
        backgroundColor: "#e8f5e9",
        padding: "20px",
        borderRadius: "10px",
        border: `2px solid ${borderColor}`,
    };

    return (
        <div style={noticeStyle}>
            <h2>Important Notice</h2>
            <p>Welcome! You have successfully completed your React lesson.</p>
        </div>
    );
}

export default NoticeBox;