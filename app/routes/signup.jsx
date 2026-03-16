// app/routes/signup.jsx
import { redirect } from "react-router";
import { User } from "../models/User";

export async function action({ request }) {
  const formData = await request.formData();
  const userData = Object.fromEntries(formData);

  try {
    await User.create(userData);
    return redirect("/dashboard");
  } catch (error) {
    return { error: "Could not create user" };
  }
}

export default function Signup() {
  return (
    <form method="post">
      <input type="text" name="username" placeholder="Username" />
      <input type="email" name="email" placeholder="Email" />
      <button type="submit">Sign Up</button>
    </form>
  );
}
