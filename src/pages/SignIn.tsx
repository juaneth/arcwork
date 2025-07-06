import "../App.css";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { useTheme } from "@/components/theme-provider";

import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/react-router";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function SignIn() {
  const { theme } = useTheme();

  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className='flex flex-row w-full h-screen justify-center items-center bg-background text-foreground p-2 sm:p-8'>
      <img
        alt='Arcwork'
        src={theme == "dark" ? "/Cover.jpg" : "/Cover-light.jpg"}
        className='absolute top-0 left-0 w-full h-full object-cover opacity-60 dark:opacity-20 dark:blur-3xl blur-2xl'
      />
      <div className='shadow-sm h-96 relative overflow-hidden rounded-lg rounded-r-none border border-r-0 dark:border-r-1 gap-1 flex flex-col'>
        <div className='z-10 shadow-md flex flex-col gap-1 p-8 w-full h-full'>
          <h1 className='tracking-tighter text-4xl font-semibold'>
            Welcome to Arcwork.
          </h1>
          <h2 className='tracking-tight opacity-75'>
            A simple, local and intuitive way to manage your codebases.
          </h2>
          <div className='flex flex-col gap-2 mt-auto'>
            <SignInButton mode='modal'>
              <Button className='w-full backdrop-blur-xl'>Sign in</Button>
            </SignInButton>
            <SignUpButton mode='modal'>
              <Button variant='outline' className='w-full backdrop-blur-xl'>
                Sign up
              </Button>
            </SignUpButton>
          </div>
        </div>
        <img
          alt='Arcwork'
          src={theme == "dark" ? "/Cover.jpg" : "/Cover-light.jpg"}
          className='absolute top-0 left-0 w-full h-full object-cover'
        />
      </div>
      <div className='shadow-sm h-96 relative overflow-hidden rounded-lg rounded-l-none border border-l-0 gap-1 flex flex-col'>
        <div className='z-10 shadow-md flex flex-col gap-1 p-8 w-full h-full'>
          <h2 className='tracking-tighter text-2xl text-foreground/90 font-semibold'>
            Are you using Arcwork at work?
          </h2>
          <p className='tracking-tight opacity-75 text-sm'>
            Sign in to your account below with your company email or provided
            details.
          </p>
          <div className='flex flex-col gap-2 mt-4'>
            <SignInButton mode='modal'>
              <Button className='w-full'>Sign in to organization</Button>
            </SignInButton>
            <SignUpButton mode='modal'>
              <Button variant='outline' className='w-full'>
                Create an organization
              </Button>
            </SignUpButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
