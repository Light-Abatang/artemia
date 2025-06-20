import { auth } from "@/auth";
import { Authorizationcheck } from "@/config/authorization-check";
import Products from "./products";

export default async function page () {
    const session = await auth();
    return(
        <>
        <Authorizationcheck/>
        <Products userId={session?.user?.id}/>
        </>
    )
}