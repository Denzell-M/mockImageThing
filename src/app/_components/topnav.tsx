import { SignedIn, SignedOut, SignOutButton, SignInButton, UserButton } from "@clerk/nextjs";

export default function TopNav() {
    return (
        <nav className="flex w-full items-center">
            <div> Thing </div>
            <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                    <SignOutButton />
                </SignedIn>
            </div>
        </nav>
    )
}