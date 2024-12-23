import { getUsers } from "../_data/user";

export default async function UsersList() {
  const users = await getUsers();

  return (
    <div className="overflow-x-auto">
      <div className="table w-full py-4 text-sm">
        <div className="table-header-group">
          <p className="table-cell whitespace-nowrap border-b border-foreground/10 px-1 py-2 font-semibold">
            Email
          </p>
          <p className="table-cell whitespace-nowrap border-b border-foreground/10 px-1 py-2 font-semibold">
            Full Name
          </p>
          <p className="table-cell whitespace-nowrap border-b border-foreground/10 px-1 py-2 font-semibold">
            Role
          </p>
        </div>
        {users.map((user) => (
          <div
            key={user.id}
            className="table-row bg-transparent transition-[background-color] duration-1000 hover:bg-background-accent hover:duration-100"
          >
            <div className="table-cell whitespace-nowrap px-1 py-2">
              {user.email}
            </div>
            <div className="table-cell whitespace-nowrap px-1 py-2">
              {user.fullName}
            </div>
            <div className="table-cell whitespace-nowrap px-1 py-2">
              {user.role}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
