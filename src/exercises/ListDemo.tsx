import { BaseProps } from "../types";
import { users } from "../data/data";
import UserTable from "../components/UserTable";
type Props = BaseProps;

export default function ListDemo({ title }: Props) {
    return (
        <>
            <h2>{title}</h2>
            {/** Render all users in a table RIGHT HERE */}
            <UserTable users={users} />

            {/**After that refactor the table-part into a separate Component and use like this */}
            {/*<UserTable users={users} />*/}
        </>
    );
}
