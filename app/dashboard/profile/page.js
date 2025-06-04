import { Button } from "@mui/material"
import Image from "next/image"

Image

export default function Profile () {
    return (
        <main className="min-h-screen flex justify-center py-4 md:py-6 md:px-12 lg-8 lg:px-16 bg-gray-100">
            <div className="w-full md:w-[380px] flex flex-col gap-4 border border-gray-200 bg-gray-50 p-2 md:p-6">
              <div className="flex justify-center">
                <Image 
                src="/10030.png" 
                width={80} 
                height={80} 
                alt="profile image" 
                className="w-[80px] h-[80px] rounded-full"/>
              </div>
                <p className="text-center py-3 border-b">Light Abatang</p>
                <p className="text-center py-3 border-b">rinyeabatang@gmail.com</p>
                <p className="text-center py-3 border-b">UserId: 077</p>
                <form>
                    <Button className="w-full" variant="contained" color="error" type="submit">Log Out</Button>
                </form>


            </div>
        </main>
    )
}