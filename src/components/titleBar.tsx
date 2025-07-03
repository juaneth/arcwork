import { SidebarTrigger } from "./ui/sidebar";
import { ModeToggle } from "./ui/theme-toggle";

export default function Titlebar() {
  return (
    <div
      data-tauri-drag-region
      className='bg-background titlebar z-50 h-8 w-full text-foreground fixed top-0 left-0 rounded-md border shadow-xs'
    >
      <div className='pl-20 h-full w-min flex flex-row items-center'>
        <SidebarTrigger />
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
}
