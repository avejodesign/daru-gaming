"use client"

import { useEffect, useRef, useState } from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import Tabbar from "@/app/components/Tabbar";

import Image, { StaticImageData } from "next/image";

import Image01 from "@/assets/dashboard/image-01.png";
import Image02 from "@/assets/dashboard/image-02.png";
import Image03 from "@/assets/dashboard/image-03.png";
import Image04 from "@/assets/dashboard/image-04.png";

import CloseSVG from "@/assets/close.svg";
import CopySVG from "@/assets/dashboard/copy.svg";
import AlertIcon from "@/assets/alert-icon.png"
import StreamLineSVG from "@/assets/streamline.svg";

type Products = {
	id: number;
	src: StaticImageData;
	confirmViewKey: boolean;
};



export default function Library() {
	const [confirmPopupView, setConfirmPopupView] = useState<boolean>(false);
	const popupRef = useRef<HTMLDivElement>(null);
	const [products, setProducts] = useState<Products[]>([
		{
			id: 1,
			src: Image01,
			confirmViewKey: false,
		},
		{
			id: 2,
			src: Image02,
			confirmViewKey: false,
		},
		{
			id: 3,
			src: Image03,
			confirmViewKey: false,
		},
		{
			id: 4,
			src: Image04,
			confirmViewKey: false,
		},
		{
			id: 5,
			src: Image04,
			confirmViewKey: false,
		},
		{
			id: 6,
			src: Image03,
			confirmViewKey: false,
		},
		{
			id: 7,
			src: Image02,
			confirmViewKey: false,
		},
		{
			id: 8,
			src: Image01,
			confirmViewKey: false,
		},
	]);
	const [loadingState, setLoadingState] = useState(false);
	const [productKeyConfirm, setProductKeyConfirm] = useState<number>(1);
	const [productGetAuthcode, setProductGetAuthcode] = useState<number>(0);

	function handleViewProduct(id: number, confirmViewKey: boolean) {
		setLoadingState(false)
		setProductKeyConfirm(id);
		setConfirmPopupView(true);
		if (confirmViewKey) {
			if (productGetAuthcode != id) {
				setProductGetAuthcode(id);
				setTimeout(() => {
					setLoadingState(true);
				}, 1000);
			} else {
			setTimeout(() => {
					setLoadingState(true);
				}, 1000);
			}
		}
	}

	function handleValidateViewKey() {
		setProducts(products.map(product =>
			product.id === productKeyConfirm ? { ...product, ["confirmViewKey"]: true } : product
		));
		setConfirmPopupView(false);
		setProductGetAuthcode(productKeyConfirm);
		setTimeout(() => {
			setLoadingState(true);
		}, 1000);
	}

	function closeKeyAuthcode() {
		setProductKeyConfirm(0);
		setProductGetAuthcode(0);
		setLoadingState(false);
	}

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			// Verificando se o clique foi fora do popup
			if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
				setConfirmPopupView(false);
			}
		}

		if (confirmPopupView) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [confirmPopupView]);

	return (
		<>
			<div className="w-full container mx-auto mt-20 md:px-30 relative text-white">
				<div className="md:p-10 p-5 backdrop-blur-md clip-path-element" style={{ background: "rgba(49, 55, 66, 0.80)" }}>
					<Tabbar />
					<ul className="flex flex-wrap justify-start list-library gap-10 md:px-0 px-10 mt-6 relative" >
						{products.map((item, index) => (
							<li key={index} >
								<div className={`${item.confirmViewKey && item.id == productKeyConfirm ? "bg-cyan-300 p-4 clip-path-element cursor-pointer" : "bg-white/20 p-4 clip-path-element hover:bg-cyan-400 transition cursor-pointer"}`} onClick={() => handleViewProduct(item.id, item.confirmViewKey)}>
									<Image className="w-full clip-path-element" src={item.src} alt="" />
									<div className="relative hidden w-full z-10 ">
										{/* Dropdown Select */}
										<button
											className="flex justify-between cursor-pointer hover:bg-white/10 transition w-full font-medium py-5 px-6 rounded items-center"
										>
											{productGetAuthcode}
										</button>
									</div>
								</div>
								{productGetAuthcode == productKeyConfirm && item.id == productKeyConfirm ? (
									<div className="md:h-125 h-180">
										<div className="absolute md:p-10 p-6 mt-8 left-0 z-100 w-full md:border-16 border-10 border-cyan-300 bg-cyan-400/20">
										{!loadingState ? (
											<>
												<div className="md:mb-12 mb-6">	
													<Skeleton style={{ maxWidth: "600px", width: "90%"}} height={30} />
												</div>
												<div className="flex md:flex-row flex-col md:gap-8 mb-6">
													<div className="mb-4 w-full">
														<div className="mb-2">
															<Skeleton style={{ maxWidth: "200px", width: "90%"}} height={20} />
														</div>
														<Skeleton style={{ width: "100%"}} height={60} />
													</div>
													<div className="mb-4 w-full">
														<div className="mb-2">
															<Skeleton style={{ maxWidth: "200px", width: "90%"}} height={20} />
														</div>
														<Skeleton style={{ width: "100%"}} height={60} />
													</div>
												</div>
												<div className="flex md:flex-row flex-col gap-6">
													<div className="w-50 mr-10">
														<div className="mb-2">
															<Skeleton style={{  width: "90%"}} height={20} />
														</div>
														<Skeleton style={{ width: "100%"}} height={20} />
													</div>
													<div className="w-50 mr-10">
														<div className="mb-2">
															<Skeleton style={{  width: "90%"}} height={20} />
														</div>
														<Skeleton style={{ width: "100%"}} height={20} />
													</div>
												</div>
												<div className="flex md:gap-6 mt-6">
													<div className="box-shape w-60">
														<Skeleton style={{ width: "100%"}} height={60} />	
													</div>
													<div className="box-shape w-60">
														<Skeleton style={{ width: "100%"}} height={60} />
													</div>
												</div>
											</>
										) : (
											<>
												<div className="flex justify-between md:mb-12 mb-6 relative">
													<h2 className="md:text-4xl text-2xl font-semibold">EA Sports FC 24 PC Steam Offline EA App</h2>
													<CloseSVG onClick={() => closeKeyAuthcode()} className="cursor-pointer md:block absolute right-0" />
												</div>
												<div className="flex md:flex-row flex-col md:gap-8 mb-6">
													<div className="mb-4 w-full">
														<label htmlFor="display_name" className="text-base font-medium">User</label>
														<div className="flex relative">
															<input id="display_name" className="h-16 transition border border-white/60 focus:border-white/100 w-full p-4 font-medium outline-none bg-white/10 focus:bg-white/20 mt-2" value="THESPAP1" readOnly />
															<CopySVG className="absolute right-0 mt-7 mr-4" />
														</div>
													</div>
													<div className="mb-4 w-full">
														<label htmlFor="display_name" className="text-base font-medium">Password</label>
														<div className="flex relative">
															<input id="display_name" className="h-16 transition border border-white/60 focus:border-white/100 w-full p-4 font-medium outline-none bg-white/10 focus:bg-white/20 mt-2" value="IATAV61G" readOnly />
															<CopySVG className="absolute right-0 mt-7 mr-4" />
														</div>
													</div>
												</div>
												<div className="flex md:flex-row flex-col md:gap-30 gap-4 w-full">
													<div className="gap-2">
														<h4 className="text-lg font-medium">Order number</h4>
														<p className="text-lg font-semibold text-white/60">#3098029384012</p>
													</div>
													<div className="gap-2">
														<h4 className="text-lg font-medium">Order date</h4>
														<p className="text-lg font-semibold text-white/60">March 11, 2025</p>
													</div>
												</div>
												<div className="flex md:flex-row flex-col gap-6 mt-6">
													<div className="box-shape">
														<button onClick={() => setConfirmPopupView(false)} className="px-10 bg-[#0BC4E5]  cursor-pointer h-14 shape-outline button-product font-semibold text-[#00D8FF] gap-2">Watch video tutorial</button>
													</div>
													<div className="box-shape ">
														<button onClick={() => handleValidateViewKey()} className="px-10 bg-[#0BC4E5] cursor-pointer h-14 shape button-product font-semibold text-black gap-2">Get Authcode</button>
													</div>
												</div>
											</>
										)}
										</div>
									</div>
								) : (
									<></>
								)}
							</li>
						))}
					</ul>


				</div>
				{confirmPopupView ? (
					<div className={`${products[productKeyConfirm - 1].confirmViewKey ? "hidden" : "fixed top-[0] left-[0] w-full bg-black/60 h-full text-white flex justify-center items-center"}`}>

						<div className="bg-[#30434D] clip-path-element md:w-[700px] w-full p-8" ref={popupRef}>
							<div className="flex justify-between mb-6">
								<h4 className="text-xl font-semibold">Important Information</h4>
								<CloseSVG onClick={() => setConfirmPopupView(false)} className="cursor-pointer" />
							</div>
							<div className="border border-amber-300 bg-amber-300/20 p-6 mb-6">
								<Image src={AlertIcon} alt="" className="w-6 mb-4" />
								<h3 className="text-lg font-bold mb-2">AFTER VIEWING THE INFORMATION, IT WILL NOT BE POSSIBLE TO REQUEST A REFUND FOR THE ORDER. </h3>
								<p className="text-md font-semibold">Not sure if your PC meets the system requirements? Go to the product description and see the minimum and recommended requirements to run the GAME. </p>
							</div>
							<div className="border border-cyan-300 bg-cyan-300/20 p-6">
								<StreamLineSVG className="mb-4" />
								<p className="text-md font-semibold">The account with this game is for exclusive use on PC, via Steam, Ubisoft Connect, Rockstar Launcher, Epic Games, EA App. It will not be possible to play on CONSOLES.</p>
							</div>
							<div className="flex gap-6 mt-6">
								<div className="box-shape w-full">
									<button onClick={() => setConfirmPopupView(false)} className="w-full bg-[#0BC4E5]  cursor-pointer h-14 shape-outline button-product font-semibold text-[#00D8FF] gap-2">Back</button>
								</div>
								<div className="box-shape w-full">
									<button onClick={() => handleValidateViewKey()} className="w-full bg-[#0BC4E5] cursor-pointer h-14 shape button-product font-semibold text-black gap-2">Ok, View key</button>
								</div>
							</div>
						</div>
					</div>
				) : (
					<></>
				)}


			</div>
		</>
	);
}
