import { BaseProps } from "../types";
import { users as usersFromDB, User, getNextId } from "../data/data";
import { useState } from "react";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";
type Props = BaseProps;

export default function StateDemo3({ title }: Props) {
  const [users, setUsers] = useState<User[]>(usersFromDB || []);
  //Derived value. No need for a useState here
  const nextId = getNextId();

  const onSubmitUser = (newUser: User) => {
    newUser.id = nextId;
    //This is the only place you have to change something
    // users.push(newUser);
    // clone users to get new instance of users to trigger rerender
    setUsers((prev) => [...prev, newUser]);
    console.log(users);
  };

  return (
    <>
      <h2>{title}</h2>
      <UserTable users={users} tblClass={""} />
      <UserForm title="Add User" onSubmitUser={onSubmitUser} />
    </>
  );
}
