import { BaseProps } from "../types";
import { FormEvent, useRef } from "react";
import { User } from "../data/data";

type UserFormProps = BaseProps & {
    onSubmitUser: (user: User) => void;
};

export default function UserForm({ title, onSubmitUser }: UserFormProps) {
    const inputRefName = useRef<HTMLInputElement>(null);
    const inputRefEmail = useRef<HTMLInputElement>(null);
    const inputRefActive = useRef<HTMLInputElement>(null);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //Read form inputs and submit the form to the parent
        const newUser: User = {
            name: inputRefName.current?.value || "",
            email: inputRefEmail.current?.value || "",
            isActive: inputRefActive.current?.checked || false,
        };
        onSubmitUser(newUser);
    };

    return (
        <>
            <h2>{title}</h2>
            <form onSubmit={onSubmit}>
                First Name: <input name="name" ref={inputRefName} />
                Email: <input name="email" ref={inputRefEmail} />
                Active: <input type="checkbox" name="isActive" ref={inputRefActive} />
                <button type="submit">Add User</button>
            </form>
        </>
    );
}
