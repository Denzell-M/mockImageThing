import {
  SignedIn,
  SignedOut,
  SignOutButton,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export default function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-2xl font-semibold">
      <div> PhotoThing </div>
      <div>
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
