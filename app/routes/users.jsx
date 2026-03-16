export async function loader() {
  const { UserSchema } = await import("../models/User.server");

  const users = await UserSchema.find().lean();

  return { users };
}

export default function UsersPage({ loaderData }) {
  return (
    <ul>
      {loaderData.users.map((user) => (
        <li key={user._id}>{user.name}</li>
      ))}
    </ul>
  );
}