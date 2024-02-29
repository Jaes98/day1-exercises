import { User } from "../data/data";
type userTableProps = {
    users: User[];
    tblClass: string;
    };
export default function UserTable({users, tblClass}: userTableProps) {

    return (
      <table className={tblClass}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.isActive ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}
