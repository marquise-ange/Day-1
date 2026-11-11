function Profile() {
    // JavaScript variables
    const imagePath = "/profile.jpg";
    const userName = "Marquise Ange";

    return (
        <div>
            <h2>My Profile</h2>

            <img
                src={imagePath}
                alt={`Profile picture of ${userName}`}
                width={200}
                height={200}
            />

            <p>{userName}</p>
        </div>
    );
}

export default Profile;