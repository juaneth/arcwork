import "../App.css";

import { Button } from "@/components/ui/button";

import { useTheme } from "../components/theme-provider";

function Home() {
  const { theme } = useTheme();

  return (
    <div className='flex flex-col w-full p-2 md:pl-0 gap-2 items-center'>
      <div className='w-full shadow-sm min-h-34 relative overflow-hidden rounded-lg border gap-1 flex flex-col'>
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

      <div className='w-full shadow-sm from-primary/5 justify-between dark:from-card dark:to-card dark:bg-card to-card bg-gradient-to-t min-h-64 p-4 px-5 relative overflow-hidden rounded-lg border gap-1 flex flex-col'>
        <h1 className='tracking-tight text-xl font-normal'>Recent projects</h1>
        <div className='flex flex-row gap-2 items-center self-end'>
          <Button className='font-normal'>Create a project</Button>

          <div className='w-px h-5 bg-primary/30 rounded-lg'></div>

          <Button variant={"outline"} className='font-normal'>
            Import a project
          </Button>
        </div>
      </div>

      <div className='w-full shadow-sm from-primary/5 justify-between dark:from-card dark:to-card dark:bg-card to-card bg-gradient-to-t min-h-64 p-4 px-5 relative overflow-hidden rounded-lg border gap-1 flex flex-col'>
        <h1 className='tracking-tight text-xl font-normal'>Template Store</h1>
        <div className='flex flex-row gap-2 items-center self-end'>
          <Button className='font-normal'>Create a project</Button>

          <div className='w-px h-5 bg-primary/30 rounded-lg'></div>

          <Button variant={"outline"} className='font-normal'>
            Import a project
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
