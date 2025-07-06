import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton } from "@clerk/clerk-react";
import { useState } from "react";

const SettingsCategory = [
  "Appearance",
  "Profile",
  "Models",
  "Billing",
] as const;

export default function Settings() {
  const [category, setCategory] =
    useState<(typeof SettingsCategory)[number]>("Appearance");

  return (
    <main className='flex flex-row w-full h-screen bg-background text-foreground dark:bg-black'>
      <div className='flex flex-row w-full h-full bg-card dark:bg-black'>
        {/* Left pane: Categories */}
        <aside className='w-1/3 min-w-[180px] max-w-xs border-r p-4 pl-2 flex flex-col bg-muted/30 dark:bg-black'>
          <nav className='flex flex-col gap-2'>
            {SettingsCategory.map((category) => (
              <Button
                variant='ghost'
                className='text-primary justify-start border'
                onClick={() => setCategory(category)}
              >
                {category}
              </Button>
            ))}
          </nav>
        </aside>
        {/* Right pane: Options */}
        {category === "Appearance" && (
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
        )}
      </div>
    </main>
  );
}
