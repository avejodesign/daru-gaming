"use client"

import { usePathname } from 'next/navigation'; // Para capturar a URL atual
import Link from "next/link";

export default function Tabbar() {
    const pathname = usePathname(); // Pega a URL atual

    return (
        <nav className="overflow-x-auto" style={{ WebkitOverflowScrolling: "touch", scrollBehavior: "smooth", scrollSnapType: "x mandatory"}}>
            <ul className="tabbar flex md:gap-10 gap-6 md:text-xl text-lg md:w-full w-[400px] h-9">
                <li className="font-semibold ">
                    <Link href="/dashboard/library" className={`${pathname == '/dashboard/library' ? 'text-white underline underline-offset-8 decoration-[#0BC4E5]' : 'text-white/60' }`}>
                        Your games
                    </Link>
                </li>
                <li className="font-semibold ">
                    <Link href="/dashboard/wishlist" className={`${pathname == '/dashboard/wishlist' ? 'text-white underline underline-offset-8 decoration-[#0BC4E5]' : 'text-white/60' }`}>
                        Wishlist
                    </Link>
                </li>
                <li className="font-semibold ">
                    <Link href="/dashboard/orders" className={`${pathname == '/dashboard/orders' ? 'text-white underline underline-offset-8 decoration-[#0BC4E5]' : 'text-white/60' }`}>
                        Orders
                    </Link>
                </li>
                <li className="font-semibold ">
                    <Link href="/dashboard/details" className={`${pathname == '/dashboard/details' ? 'text-white underline underline-offset-8 decoration-[#0BC4E5]' : 'text-white/60' }`}>
                        My account
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
