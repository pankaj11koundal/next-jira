'use client'

import { MenuIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Sidebar } from './Sidebar';
import { usePathname } from 'next/navigation';

export const MobileSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathName]);

    return (
        <Sheet modal={false} open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant='secondary' className='lg:hidden'>
                    <MenuIcon className='size-5 text-neutral-500' />
                </Button>
            </SheetTrigger>
            <SheetContent side='left' className='p-0'>
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}

