"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

const navItems: NavItem[] = [
  {
    name: "Blog",
    link: "",
  },
  {
    name: "Resources",
    link: "",
  },
  {
    name: "Contact",
    link: "",
  },
];

const Navbar = () => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [initial, setInitial] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.01) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  useEffect(() => {
    setInitial(false);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: initial ? 0 : -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed inset-x-0 top-0 z-[5000] flex h-16 w-full items-center filter backdrop-blur-lg transition-colors duration-100",
          {
            "bg-red": scrollYProgress.get() >= 0.01,
            "bg-transparent": scrollYProgress.get() < 0.01,
          },
        )}
      >
        <div className="relative mx-auto h-full w-full max-w-[84rem]">
          <div className="navbar-border"></div>

          <div className="grid h-full grid-cols-3 px-6">
            <div className="flex items-center justify-start">
              <h1 className="font-heading text-lg font-bold">Luminary</h1>
            </div>
            <div className="flex items-center justify-center">
              <ul className="flex items-center space-x-6 rounded-full border border-neutral-500/20 bg-neutral-50/5 px-6 py-2 text-sm text-neutral-100">
                <li className="">
                  <Link href="">Blog</Link>
                </li>
                <li className="">
                  <Link href="">Resources</Link>
                </li>
                <li className="">
                  <Link href="">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-end">
              <Link href="/signin">
                <Button
                  className="rounded-full bg-gray-4/30 px-4 hover:bg-gray-3/30"
                  size="sm"
                >
                  Sign in
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default Navbar;
