import "../App.css";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { useTheme } from "@/components/theme-provider";

import {
  useUser,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/react-router";

function SignIn() {
  const { theme } = useTheme();

  return (
    <main className='flex bg-background text-foreground flex-col items-center justify-center h-screen'>
      <div className='absolute bottom-5 left-5'>
        <ModeToggle></ModeToggle>
      </div>

      <div className='w-full shadow-sm relative overflow-hidden rounded-lg border gap-1 flex flex-col max-w-[85rem] mb-8'>
        <div className='z-10 shadow-md flex flex-col gap-1 p-8 w-full h-full'>
          <h1 className='tracking-tighter text-4xl font-semibold'>
            Welcome to Arcwork.
          </h1>
          <h2 className='tracking-tight opacity-75'>
            A simple, local and intuitive way to manage your codebases.
          </h2>
        </div>
        <img
          alt='Arcwork'
          src={theme == "dark" ? "/Cover.jpg" : "/Cover-light.jpg"}
          className='absolute top-0 left-0 w-full h-full object-cover'
        />
      </div>

      <SignInButton mode='modal'>
        <Button>Sign in</Button>
      </SignInButton>

      <SignUpButton mode='modal'>
        <Button>Sign up</Button>
      </SignUpButton>
    </main>
  );
}

export default SignIn;
