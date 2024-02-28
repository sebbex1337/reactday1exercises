interface ProfileProps {
    name: string;
    email: string;
    isActive: boolean;
    singleLine?: boolean;
}

export default function Profile({ name, email, isActive, singleLine }: ProfileProps) {
    return (
        <>
            {!singleLine ? (
                <div>
                    <h3>Name: {name}</h3>
                    <p>Email: {email}</p>
                    <p>Active: {isActive ? "Yes" : "No"}</p>
                </div>
            ) : (
                <p>
                    {name}, {email} {isActive ? "Is Active" : "Not Active"}
                </p>
            )}
        </>
    );
}
