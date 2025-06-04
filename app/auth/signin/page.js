import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function SignIn () {
    return(
        <main className="min-h-[520px] flex justify-center bg-gray-50 py-8 px-2">
            <article>
                <div className="w-full md:w-[30em] rounded-md bg-white p-4">
                    <h1 className="text-2xl mb-2">Sign into Artemis</h1>
                    <p>Sign in Using...</p>
                    <form className="mb-2">
                        <button className="w-full h-[3.2em] bg-black border-b-2 border-blue-500 rounded-md flex justify-center gap-2 items-center">
                            <FaGoogle className="text-white text-2xl"/>
                            <span className="text-white text-lg">Google Account</span>
                        </button>
                        <button className="w-full h-[3.2em] bg-black border-b-2 border-blue-500 rounded-md flex justify-center gap-2 items-center">
                            <FaSquareXTwitter className="text-white text-2xl"/>
                            <span className="text-white text-lg">Twitter Account</span>
                        </button>
                    </form>
                    <p className="text-gray-600 text-xs">By clicking on the signin button you confirm that you have agreed  with our {""} <Link href="#" className="text-gray-800 underline">Terms of Use</Link>{""} and {""} <Link href="#" className="text-gray-800 underline">Privacy Policy</Link> 
                    </p>
                </div>
            </article>
        </main>
    )

}