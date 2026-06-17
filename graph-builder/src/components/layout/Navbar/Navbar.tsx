import { Sun, Moon, Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import {
    DropdownMenu,
    DropdownMenuGroup,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Toggle } from '@base-ui/react';
import { useAppStore } from '@/store/useStore';
import { useHotkeys } from 'react-hotkeys-hook';
import Sidepanel from '../Sidepanel/Sidepanel';
import SidepanelMobile from '../Sidepanel/SidepanelMobile';

export default function Navbar() {
    const mobilePanelOpen = useAppStore((s) => s.isMobilePanelOpen);
    const fullscreen = useAppStore((s) => s.fullscreenActive);

    const toggleTheme = useAppStore((s) => s.toggleTheme);
    const toggleMobilePanel = useAppStore((s) => s.toggleMobilePanel);

    useHotkeys('t', () => toggleTheme());

    return (
        <div className={`[grid-area:nav] m-3 z-50 ${fullscreen ? 'hidden' : 'flex'}`}>
            <div className="flex-1">
                <div className="flex justify-between h-full items-center bg-card/70 backdrop-blur-xs shadow-sm border rounded-md">
                    <a
                        href="/"
                        className="text-cyan-500 flex items-center gap-2 font-black text-2xl mx-4"
                    >
                        GraphBuilder
                    </a>

                    <div className="flex-1" />
                    <div className="flex items-center gap-4 mr-4">
                        <Button variant="ghost" className="hidden md:flex">
                            Login
                        </Button>
                        <Button className="hidden md:flex">Get Started</Button>

                        <Toggle
                            className="group cursor-pointer"
                            aria-label="switch theme"
                            onPressedChange={toggleTheme}
                        >
                            <Sun className="group-data-[pressed]:hidden" />
                            <Moon className=" group-data-[pressed]:block hidden" />
                        </Toggle>
                        {/* User Avatar Menu */}
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                {/* <User /> */}
                                <Avatar>
                                    <AvatarImage
                                        src="https://github.com/shadcn.png"
                                        alt="@shadcn"
                                        className="grayscale"
                                    />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className={`mt-[6px] translate-x-4`} align="end">
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Billing</DropdownMenuItem>
                                    <DropdownMenuItem>Settings</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Log out</DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Mobile Menu */}
                        <Sheet open={mobilePanelOpen} onOpenChange={toggleMobilePanel}>
                            <SheetTrigger className="md:hidden hover:cursor-pointer">
                                <Menu />
                            </SheetTrigger>
                            <SheetContent side="right">
                                <div className="flex flex-col gap-6 mt-10 text-lg md:hidden">
                                    <SidepanelMobile />
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </div>
    );
}
