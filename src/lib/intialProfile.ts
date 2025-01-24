import { RedirectToSignIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";


export const initialProfile = async () => {
    const user = await currentUser();

    if (!user) {
        await RedirectToSignIn;
        return
    }

    const profile = await db.user.findUnique({
        where: {
            userId: user.id
        }
    })

    if (profile) {
        return profile
    }



    const newProfile = await db.user.create({
        data: {
            userId: user.id,
            firstName: user.firstName ?? "",
            lastName: user.lastName ?? "",
            profilePic: user.imageUrl,
            email: user.emailAddresses[0].emailAddress
        }
    })

    return newProfile;
}