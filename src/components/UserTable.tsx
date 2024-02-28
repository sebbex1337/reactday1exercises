import { useEffect, useState } from "react";
import { User } from "../data/data.ts";

interface UserTableProps {
    users: User[];
    editUser: (userId: number) => void;
}

export default function UserTable({ users, editUser }: UserTableProps) {
    const [localUsers, setLocalUsers] = useState<User[]>(users);

    const handleEditUser = (userId: number) => {
        editUser(userId);
    };

    useEffect(() => {
        setLocalUsers(users);
    }, [users]);

    return (
        <table className="simple-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Active</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                {localUsers.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>
                            <a href={user.email}>{user.email}</a>
                        </td>
                        <td>{user.isActive ? "Yes" : "No"}</td>
                        <td>
                            <button onClick={() => handleEditUser(user.id || -1)}>Edit</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
