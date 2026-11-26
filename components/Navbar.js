"use client";

import Image from "next/image";
import React from "react";
import Logo from "@/public/flower-logo.png";
import { Button } from "./ui/button";
import { User, ShoppingCart, Search } from "lucide-react"
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full h-15 shadow-sm z-50 fixed top-0 left-0 bg-pink-300 shadow-pink-600 flex items-center justify-between px-4">
      <Image
        src={Logo}
        alt="Logo"
        width={50}
        height={50}
        className="rounded-full object-contain"
      />

      <div className="flex items-center gap-5 text-white">
        <Search className="size-4" />
        <div className="flex items-center gap-1">
        <User className="cursor-pointer size-5" />
        <Button className={"bg-pink-600 hover:text-pink-700 text-white font-medium"} variant="outline">Sign In</Button>
        </div>
        <Link href={"/cart"}><ShoppingCart className="cursor-pointer" /></Link>
      </div>
    </header>
  );
};

export default Navbar;
