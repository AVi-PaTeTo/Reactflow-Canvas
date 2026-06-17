import { Sun, Moon, Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

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
                    {/* Logo */}
                    <a
                        href="/"
                        className="text-cyan-500 flex items-center gap-2 font-black text-2xl mx-4"
                    >
                        GraphBuilder
                    </a>

                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                                        <li>
                                            <NavigationMenuLink>
                                                <a
                                                    href="/features"
                                                    className="block p-3 rounded-md hover:bg-accent"
                                                >
                                                    <div className="font-medium">Core Tools</div>
                                                    <p className="text-sm text-muted-foreground">
                                                        Main editor features
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        {/* Add more items as needed */}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <a href="/docs" className={navigationMenuTriggerStyle()}>
                                    Documentation
                                </a>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <a href="/examples" className={navigationMenuTriggerStyle()}>
                                    Examples
                                </a>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="flex-1" />

                    {/* Right Side */}
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
                                {/* <Button variant="ghost" size="icon"> */}
                                <Menu />
                                {/* </Button> */}
                            </SheetTrigger>
                            <SheetContent side="right">
                                <div className="flex flex-col gap-6 mt-8 text-lg">
                                    <a href="/" className="font-medium">
                                        Home
                                    </a>
                                    <a href="/features" className="font-medium">
                                        Features
                                    </a>
                                    <a href="/docs" className="font-medium">
                                        Documentation
                                    </a>
                                    <a href="/examples" className="font-medium">
                                        Examples
                                    </a>

                                    <div className="pt-6 border-t flex flex-col gap-3">
                                        <Button variant="outline">Login</Button>
                                        <Button>Get Started</Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </div>
    );
}
