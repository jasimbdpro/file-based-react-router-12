import { Link } from "react-router";
import { Welcome } from "../welcome/welcome";
import Category from "./category";

export function meta({} ) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return(
  <div>
    <Link to="/category">Category</Link>
    <Welcome />
  
  </div>
) ;
}
