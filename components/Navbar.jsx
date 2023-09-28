import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-around items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        Liste
      </Link>
      <Link className="text-dark bg-white p-2 rounded" href={"/ajouter"}>
        Ajouter
      </Link>
    </nav>
  );
}

export default Navbar;
