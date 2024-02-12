import { redirect } from "next/navigation";
import { getSession, login, logout } from "@/app/lib/actions";

export default async function Page() {
  const session = await getSession();
  return (
    <section className="h-[45rem] flex flex-col justify-center">
      <form
        action={async (formData) => {
          "use server";
          await login(formData);
          redirect("/");
        }}
        className="flex flex-col justify-center items-center space-y-10 bg-slate-400 w-[25rem] h-[30rem] rounded-lg p-10"
      >
        <label htmlFor="email" className="text-white">Welcome!, sign in plz</label>
        <input type="email" name="email" placeholder="Email" className="border border-black h-[2rem] w-full"/>
        <button className="bg-blue-400 w-20 h-10 rounded-full text-white" type="submit">Login</button>
      </form>
      <form
        action={async () => {
          "use server";
          await logout();
          redirect("/");
        }}
        className="flex flex-col justify-center items-center mt-6"
      >
        <button className="bg-red-400 w-20 h-10 rounded-full text-white" type="submit">Logout</button>
      </form>
      <pre className="hidden">{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
}
