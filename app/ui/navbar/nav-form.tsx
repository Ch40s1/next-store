// "use server";

// import { getSession } from "@/app/lib/actions";

// export default async function WelcomeUser() {
//   const session = await getSession();

//   if (!session) {
//     // If session is null, render nothing
//     return null;
//   }

//   return (
//     <>
//       <div>
//         <p>Welcome! {session.user.name}</p>
//         {/* <p>{session.user.email}</p> */}
//       </div>
//     </>
//   );
// }
