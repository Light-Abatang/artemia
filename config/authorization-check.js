  "use server"
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export async function Authorizationcheck () {
    const session = await auth ();
    //redirect to  sign in page if the user is not signed in
    if (!session?.user) {
        redirect("/auth/signin")
    }
}