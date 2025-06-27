import "../App.css";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  SignInButton,
} from "@clerk/react-router";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function SignIn() {
  const user = useUser();
  if (user) {
  }

  return (
    <main className='flex bg-background text-foreground flex-col items-center justify-center h-screen'>
      <div className='absolute bottom-5 left-5'>
        <ModeToggle></ModeToggle>
      </div>

      <Card className='w-96'>
        <CardHeader>
          <CardTitle className='text-2xl font-semibold'>Arcwork</CardTitle>
          <CardDescription>
            A simple, local and intuitive way to manage your codebases.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <SignInButton>
            <Button>Sign in</Button>
          </SignInButton>
        </CardFooter>
      </Card>
    </main>
  );
}

export default SignIn;