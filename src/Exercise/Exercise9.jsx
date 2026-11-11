function StatusBadge() {
    const isActive = true;

    return (
        <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${isActive
                    ? "text-green-700 bg-green-100"
                    : "text-gray-600 bg-gray-100"
                }`}
        >
            {isActive ? "Active" : "Inactive"}
        </span>
    );
}

export default StatusBadge;