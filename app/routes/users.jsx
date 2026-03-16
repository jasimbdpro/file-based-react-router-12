import { db } from "../db.server";
import { UserSchema } from "../models/User"; // Your Mongoose model

export async function loader() {
  // This runs ONLY on the server
  const users = await UserSchema.find().lean();
  return { users };
}

export default function UsersPage({ loaderData }) {
  // This runs on the client
  return (
    <ul>
      {loaderData.users.map(user => (
        <li key={user._id}>{user.name}</li>
      ))}
    </ul>
  );
}
