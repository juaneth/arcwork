import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton } from "@clerk/clerk-react";

export default function Settings() {
  return (
    <main className='flex flex-row w-full h-screen bg-background text-foreground dark:bg-black'>
      <div className='flex flex-row w-full h-full bg-card dark:bg-black'>
        {/* Left pane: Categories */}
        <aside className='w-1/3 min-w-[180px] max-w-xs border-r p-4 pl-2 flex flex-col bg-muted/30 dark:bg-black'>
          <nav className='flex flex-col gap-2'>
            <Button
              variant='outline'
              className='text-primary justify-start bg-black border border-primary/10'
            >
              Appearance
            </Button>
            <Button
              variant='outline'
              className='text-primary justify-start bg-black border border-black'
            >
              Profile
            </Button>
            <Button
              variant='outline'
              className='text-primary justify-start bg-black border border-black'
            >
              Models
            </Button>

            <Button
              variant='outline'
              className='text-primary justify-start bg-black border border-black'
            >
              Billing
            </Button>
          </nav>
        </aside>
        {/* Right pane: Options */}
        <section className='flex-1 p-8 flex flex-col gap-6 dark:bg-black'>
          <div>
            <h1 className='text-3xl font-semibold mb-2'>Settings</h1>
            <p className='text-muted-foreground text-sm mb-4'>
              Manage your profile, preferences, and more.
            </p>
          </div>
          <div className='flex flex-col gap-4 max-w-md'>
            <Button variant='outline' className='w-full'>
              Profile
            </Button>
            <Button variant='outline' className='w-full'>
              Preferences
            </Button>
            <SignOutButton>
              <Button variant='destructive' className='w-full mt-8'>
                Log out
              </Button>
            </SignOutButton>
            <SignInButton>
              <Button variant='outline' className='w-full'>
                Sign in
              </Button>
            </SignInButton>
          </div>
        </section>
      </div>
    </main>
  );
}
