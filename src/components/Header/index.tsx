import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, PhoneIcon, XMarkIcon } from "@heroicons/react/24/outline";

import {
  IconBrandFiverr,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandUpwork,
  IconMail,
} from "@tabler/icons-react";

const header = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "White Label",
    href: "#white_label",
  },
  {
    name: "Case Studies",
    href: "#case_studies",
  },
  {
    name: "Blog",
    href: "#blog",
  },
];
const callsToAction = [
  { name: "", href: "#", icon: IconMail },
  { name: "", href: "#", icon: PhoneIcon },
  { name: "", href: "#", icon: IconBrandLinkedin },
  { name: "", href: "#", icon: IconBrandInstagram },
  { name: "", href: "#", icon: IconBrandUpwork },
  { name: "", href: "#", icon: IconBrandFiverr },
];
import Logo from "../Logo";

export default function Header() {
  return (
    <Popover className="z-50 bg-black sticky top-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-black py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="#">
              <span className="sr-only">SocialSwarm</span>
              <Logo />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {header.map((item) => (
                <span key={item.name} className="px-5">
                  <Link
                    href={item.href}
                    className="text-lg font-semibold leading-6 text-gray-200"
                  >
                    {item.name}
                  </Link>
                </span>
              ))}
            </Popover>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link
              href="team[at]socialswarm.io"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 ">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    height={50}
                    width={50}
                    className="h-8 w-auto"
                    src="/favicon.ico"
                    alt="SocialSwarm"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {header.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8"></div>
              <div>
                <Link href={'#home'}>
                <p className="text-center text-base font-medium text-gray-500">
                  <Image alt="logo" src={'/banner.png'} width={236} height={236} className="bg-black rounded-md"/>
                 
                </p>
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
