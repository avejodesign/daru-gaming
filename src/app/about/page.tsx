import Image from "next/image";

import Background01 from "@/assets/about/background-01.png";
import Background02 from "@/assets/about/background-02.png";
import WebsiteNotebookPNG from "@/assets/about/website-notebook.png";
import ImageEnjoyPNG from "@/assets/about/image-enjoy.png";

import LargeCatalogSVG from "@/assets/about/large-catalog.svg";
import SupportSVG from "@/assets/about/support.svg";
import GlobalSVG from "@/assets/about/global.svg";
import TimezoneSVG from "@/assets/about/time-zone.svg";
import CartSVG from "@/assets/about/cart.svg";
import PlaySVG from "@/assets/about/play.svg";
import InstallSVG from "@/assets/about/install.svg";
import Accordion from "../components/Accordion";


export default function Home() {
    return (
        <div className="container mx-auto mt-20 clip-path-element text-white" style={{ background: "rgba(49, 55, 66, 0.80)" }}>
            <div className="top-0 left-0 lg:p-20 flex lg:flex-row flex-col items-center relative">
                <Image src={Background01} alt="Descrição" className="absolute -z-10 w-full h-full top-0 left-0" />
                <div className=" p-0 text-white flex-1">
                    <Image src={WebsiteNotebookPNG} alt="Descrição" width={600} height={600} className="" />
                </div>
                <div className="lg:p-20 p-6 text-white flex-1">
                    <p className="lg:text-4xl text-2xl font-semibold pb-4">Welcome toDatuGaming! We are passionate about providing a unique experience in the world of dogital gaming</p>
                    <p className="lg:text-base text-sm pb-6">Founded with the goal of providing gamers with easy and safe access to the best PC titles, our mission is to deliver high-quality products and exceptional, customers service.</p>
                    <div className="box-shape">
                        <button className="bg-[#0BC4E5] cursor-pointer h-14 shape button-product font-semibold text-black gap-2 px-10">Save informations</button>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 lg:p-20 p-6">
                <p className="lg:text-4xl text-3xl text-center font-semibold">Best features</p>
                <div className="lg:px-30 py-10 lg:gap-16 gap-10 text-left flex lg:flex-row flex-col">
                    <div className="flex-1">
                        <LargeCatalogSVG className="mb-4"/>
                        <h1 className="text-2xl bold font-medium mb-4">Large Catalog</h1>
                        <p>We offer thousands of games directly from the world&apos;s biggest publishers, including new releases, pre-orders, and the most famous and beloved titles and franchises.</p>
                    </div>
                    <div className="flex-1">
                        <SupportSVG className="mb-4"/>
                        <h1 className="text-2xl bold font-medium mb-4">Real Support</h1>
                        <p>Our support team consists of real, passionate gamers who do everything they can to assist you with any issues or questions. Your contact is always handled with care.</p>
                    </div>
                    <div className="flex-1">
                        <GlobalSVG className="mb-4"/>
                        <h1 className="text-2xl bold font-medium mb-4">Always Available</h1>
                        <p>Your content is always accessible. Log into your account, find your games, manage your library, and enjoy everything we offer, handcrafted just for you.</p>
                    </div>
                    <div className="flex-1">
                        <TimezoneSVG className="mb-4"/>
                        <h1 className="text-2xl bold font-medium mb-4">Global and Local</h1>
                        <p>Our goal is to be local, creating and offering unique content and campaigns, localization, and special pricing for each region we operate in.</p>
                    </div>
                </div>
            </div>
            <div className="columns-1 text-center relative ">
                <div className="absolute -z-10 w-full h-full top-0 left-0">
                    <Image src={Background02} alt="Descrição" className="w-full h-full" />
                </div>
                <div className="text lg:p-18 p-6">
                    <h1 className="lg:text-2xl text-xl pb-2">Our mission</h1>
                    <p className="lg:text-4xl text-2xl font-semibold pb-4 text-balance">We are a dedicated team of gaming enthusiasts and technology professionals. Our commitment is to ensure that you have access to the latest releases and most<br /> popular games with maximum ease and security.</p>
                    <p className="lg:text-2xl text-lg font-medium text-pretty">We are constantly updating our catalog to include the latest news <br /> and the most desired tites. Our Vision We believe that every <br /> gamer deserves a simple and enjoyable shopping experience</p>
                </div>
            </div>
            <div className="bg-gray-800 lg:p-20 p-6">
                <p className="lg:text-4xl text-3xl text-center font-semibold">How to work?</p>
                <div className="lg:px-30 py-10 lg:gap-16 gap-10 text-left flex lg:flex-row flex-col ">
                    <div className="flex-1 text-center">
                        <CartSVG className="mb-4 mx-auto"/>
                        <h1 className="text-2xl bold font-medium mb-4">Add Games to Your Cart</h1>
                        <p>Select your favorite games, add them to your cart, and complete your purchase with total security.</p>
                    </div>
                    <div className="flex-1 text-center">
                        <PlaySVG className="mb-4 mx-auto"/>
                        <h1 className="text-2xl bold font-medium mb-4">Access Your Games</h1>
                        <p>Go to your account to find and access your games.</p>
                    </div>
                    <div className="flex-1 text-center">
                        <InstallSVG className="mb-4 mx-auto"/>
                        <h1 className="text-2xl bold font-medium mb-4">Install and Play</h1>
                        <p>Install your game on your computer and start playing right away!</p>
                    </div>
                </div>
            </div>
            <div className="top-0 left-0 flex lg:flex-row flex-col items-center relative">
                <Image src={Background01} alt="Descrição" className="absolute -z-10 w-full h-full top-0 left-0" />
                <div className=" p-0 text-white flex-1">
                    <Image src={ImageEnjoyPNG} alt="Descrição" width={600} height={600} className="" />
                </div>
                <div className=" lg:p-20 p-8 text-white flex-1">
                    <p className="lg:text-4xl text-2xl font-semibold pb-4">Enjoy convenience, speed, and great prices! Search, discover, and access titles from the world&apos;s biggest publishers and top indie releases.</p>
                    <p className="text pb-6">Don&apos;t Have an Account Yet?</p>
                    <div className="box-shape">
                        <button className="bg-[#0BC4E5] cursor-pointer h-14 shape button-product font-semibold text-black gap-2 px-10">Save informations</button>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 lg:p-20 p-6">
                <p className="lg:text-4xl text-3xl text-center font-semibold mb-10">Frequently Asked Questions</p>
                <Accordion  />
            </div>
        </div>
    );
}
