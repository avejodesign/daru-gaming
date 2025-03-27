"use client"

import { useEffect, useRef, useState } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import Tabbar from "@/app/components/Tabbar";

import Image, { StaticImageData } from "next/image";

import Image01 from "@/assets/dashboard/image-01.png";
import Background01 from "@/assets/dashboard/games/background-01.jpg";
import Image02 from "@/assets/dashboard/image-02.png";
import Background02 from "@/assets/dashboard/games/background-02.jpg";
import Image03 from "@/assets/dashboard/image-03.png";
import Background03 from "@/assets/dashboard/games/background-03.jpg";
import Image04 from "@/assets/dashboard/image-04.png";
import Background04 from "@/assets/dashboard/games/background-04.jpg";

import CloseSVG from "@/assets/close.svg";
import CopySVG from "@/assets/dashboard/copy.svg";
import AlertIcon from "@/assets/alert-icon.png"
import StreamLineSVG from "@/assets/streamline.svg";

type Products = {
	id: number;
	src: StaticImageData;
	background: StaticImageData;
	name: string;
	user: string;
	password: string;
	order_number: string;
	order_date: string;
	confirmViewKey: boolean;
};

export default function Library() {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	useEffect(() => {
		if (typeof window !== "undefined") { // Garante que está rodando no cliente
		  setIsMobile(window.innerWidth <= 768);
	
		  const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		  };
	
		  window.addEventListener("resize", handleResize);
		  return () => window.removeEventListener("resize", handleResize);
		}
	  }, []);

	// Products
	const [products, setProducts] = useState<Products[]>([
		{
			id: 1,
			src: Image01,
			background: Background01,
			name: "EA Sports FC 24 PC Steam Offline EA App",
			user: "GAMERPRO123",
			password: "XYS8ZQ7K",
			order_number: "#5123984756123",
			order_date: "March 20, 2025",
			confirmViewKey: false,
		},
		{
			id: 2,
			src: Image02,
			background: Background02,
			name: "Farming Simulator 25 PC Steam Account Offline",
			user: "SIMFARMER22",
			password: "LMN4PQR5",
			order_number: "#9845632107854",
			order_date: "March 19, 2025",
			confirmViewKey: false,
		},
		{
			id: 3,
			src: Image03,
			background: Background03,
			name: "Marvel's Spider-Man 2 Steam Account Offline",
			user: "WEBWARRIOR99",
			password: "SPIDEY42X",
			order_number: "#6758493021576",
			order_date: "March 18, 2025",
			confirmViewKey: false,
		},
		{
			id: 4,
			src: Image04,
			background: Background04,
			name: "Red Dead Redemption 2 PC Steam Account Offline",
			user: "OUTLAWGAMER",
			password: "RDR2WILDWEST",
			order_number: "#2384756109234",
			order_date: "March 17, 2025",
			confirmViewKey: false,
		},
		{
			id: 5,
			src: Image04,
			background: Background04,
			name: "Red Dead Redemption 2 PC Steam Account Offline",
			user: "WESTERNPLAYER",
			password: "RDR2HUNTER",
			order_number: "#3456789012456",
			order_date: "March 16, 2025",
			confirmViewKey: false,
		},
		{
			id: 6,
			src: Image03,
			background: Background03,
			name: "Marvel's Spider-Man 2 Steam Account Offline",
			user: "SPIDEYFAN07",
			password: "VENOMX23",
			order_number: "#9238475610923",
			order_date: "March 15, 2025",
			confirmViewKey: false,
		},
		{
			id: 7,
			src: Image02,
			background: Background02,
			name: "Farming Simulator 25 PC Steam Account Offline",
			user: "FARMKING88",
			password: "GROWFAST12",
			order_number: "#1273649580236",
			order_date: "March 14, 2025",
			confirmViewKey: false,
		},
		{
			id: 8,
			src: Image01,
			background: Background01,
			name: "EA Sports FC 24 PC Steam Offline EA App",
			user: "SOCCERMANIA10",
			password: "GOALKEEPER77",
			order_number: "#9087654321876",
			order_date: "March 13, 2025",
			confirmViewKey: false,
		},
	]);
	
	const [backgroundSelectedProduct, setBackgroundSelectedProduct] = useState<StaticImageData | null>(null);

	// Key Confirm (Product Selected);
	const [productKeyConfirm, setProductKeyConfirm] = useState<number>(1);

	// Key Confirm (Product Select with Key Validated);
	const [productGetAuthcode, setProductGetAuthcode] = useState<number>(0);

	// Loading to Skeleton Working
	const [loadingState, setLoadingState] = useState(false);

	// Popup View Key
	const [confirmPopupView, setConfirmPopupView] = useState<boolean>(false);
	const popupRef = useRef<HTMLDivElement>(null);
	
	function handleViewProduct(id: number, confirmViewKey: boolean, background: StaticImageData) {
		setLoadingState(false)
		setProductKeyConfirm(id);
		setBackgroundSelectedProduct(background);
		setConfirmPopupView(true);
		if (confirmViewKey) {
			if (productGetAuthcode != id) {
				setProductGetAuthcode(id);
				setTimeout(() => {
					setLoadingState(true);
				}, 1000);
				console.log(background)
			} else {
				setBackgroundSelectedProduct(null);
				setProductGetAuthcode(0);
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
		setProductGetAuthcode(-1);
		setBackgroundSelectedProduct(null);
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
			<div className="absolute top-0 left-0 w-full h-120 overflow-hidden">
				{backgroundSelectedProduct != null ? (
					<div className="relative background-product-selected h-full">
							<Image src={backgroundSelectedProduct} alt="" className="h-full w-full object-cover" />
					</div>
					) : (
					<></>
				)}
			</div>
			<div className="md:w-[1100px] w-full container mx-auto mt-20  relative text-white">
				<div className="md:p-10 p-5 backdrop-blur-md clip-path-element" style={{ background: "rgba(49, 55, 66, 0.80)" }}>
					<Tabbar />
					<ul className="flex flex-wrap justify-start list-library gap-6 md:px-0 mt-6 relative" >
						
						{products.map((item, index) => (
							<li key={index} className={`${productGetAuthcode != item.id && productGetAuthcode == productKeyConfirm ? "opacity-20" : ""}`}>
									{isMobile ? (
										<div className={`${productGetAuthcode == item.id ? "bg-cyan-300 p-4 cursor-pointer selected text-black font-semibold" : "bg-white/20 hover:bg-cyan-400 p-4 font-semibold transition cursor-pointer"}`} onClick={() => handleViewProduct(item.id, item.confirmViewKey, item.background)}>
											<div className="flex">
												<div className="w-full max-w-20">
													<Image className="hover:brightness-50 transition w-full h-full object-cover" src={item.background} alt="" />
												</div>
												<p className="ml-4">{item.name}</p>
											</div>
										</div>		
									): (
										<div className={`${productGetAuthcode == item.id ? "bg-cyan-300 p-3 clip-path-element cursor-pointer selected" : "bg-white/20 p-3 clip-path-element hover:bg-cyan-400 transition cursor-pointer"}`} onClick={() => handleViewProduct(item.id, item.confirmViewKey, item.background)}>
											<Image className="hover:brightness-50 transition w-full object-cover clip-path-element" style={index > 3 ? { height: 150 } : {}} src={item.src} alt="" />
										</div>
									)}
								{productGetAuthcode == productKeyConfirm && item.id == productKeyConfirm ? (
									<div className="md:h-130 h-180">
										<div className="absolute md:p-10 p-6 md:mt-8 left-0 z-100 w-full md:border-16 border-10 border-cyan-300 bg-cyan-400/20">
											{!loadingState ? (
												<>
													<div className="md:mb-12 mb-6">
														<Skeleton style={{ maxWidth: "600px", width: "90%" }} height={30} />
													</div>
													<div className="flex md:flex-row flex-col md:gap-8 mb-6">
														<div className="mb-4 w-full">
															<div className="mb-2">
																<Skeleton style={{ maxWidth: "200px", width: "90%" }} height={20} />
															</div>
															<Skeleton style={{ width: "100%" }} height={60} />
														</div>
														<div className="mb-4 w-full">
															<div className="mb-2">
																<Skeleton style={{ maxWidth: "200px", width: "90%" }} height={20} />
															</div>
															<Skeleton style={{ width: "100%" }} height={60} />
														</div>
													</div>
													<div className="flex md:flex-row flex-col gap-6">
														<div className="w-50 mr-10">
															<div className="mb-2">
																<Skeleton style={{ width: "90%" }} height={20} />
															</div>
															<Skeleton style={{ width: "100%" }} height={20} />
														</div>
														<div className="w-50 mr-10">
															<div className="mb-2">
																<Skeleton style={{ width: "90%" }} height={20} />
															</div>
															<Skeleton style={{ width: "100%" }} height={20} />
														</div>
													</div>
													<div className="flex md:gap-6 mt-6">
														<div className="box-shape w-60">
															<Skeleton style={{ width: "100%" }} height={60} />
														</div>
														<div className="box-shape w-60">
															<Skeleton style={{ width: "100%" }} height={60} />
														</div>
													</div>
												</>
											) : (
												<>
													<div className="flex justify-between md:mb-12 mb-6 relative">
														<h2 className="md:text-3xl text-2xl font-semibold md:mr-0 mr-6">{item.name}</h2>
														<CloseSVG onClick={() => closeKeyAuthcode()} className="cursor-pointer md:block absolute right-0" />
													</div>
													<div className="flex md:flex-row flex-col md:gap-8 mb-6">
														<div className="mb-4 w-full">
															<label htmlFor="display_name" className="text-base font-medium">User</label>
															<div className="flex relative">
																<input id="display_name" className="h-16 transition border border-white/60 focus:border-white/100 w-full p-4 font-medium outline-none bg-white/10 focus:bg-white/20 mt-2" value={item.user} readOnly />
																<CopySVG className="absolute right-0 mt-7 mr-4" />
															</div>
														</div>
														<div className="mb-4 w-full">
															<label htmlFor="display_name" className="text-base font-medium">Password</label>
															<div className="flex relative">
																<input id="display_name" className="h-16 transition border border-white/60 focus:border-white/100 w-full p-4 font-medium outline-none bg-white/10 focus:bg-white/20 mt-2" value={item.password} readOnly />
																<CopySVG className="absolute right-0 mt-7 mr-4" />
															</div>
														</div>
													</div>
													<div className="flex md:flex-row flex-col md:gap-30 gap-4 w-full">
														<div className="gap-2">
															<h4 className="text-lg font-medium">Order number</h4>
															<p className="text-lg font-semibold text-white/60">{item.order_number}</p>
														</div>
														<div className="gap-2">
															<h4 className="text-lg font-medium">Order date</h4>
															<p className="text-lg font-semibold text-white/60">{item.order_date}</p>
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

						<div className="bg-[#30434D] clip-path-element md:w-[700px] w-full md:p-8 p-6" ref={popupRef}>
							<div className="flex justify-between mb-6">
								<h4 className="text-xl font-semibold">Important Information</h4>
								<CloseSVG onClick={() => setConfirmPopupView(false)} className="cursor-pointer" />
							</div>
							<div className="border border-amber-300 bg-amber-300/20 md:p-6 p-4 mb-6">
								<Image src={AlertIcon} alt="" className="w-6 md:mb-4 mb-2" />
								<h3 className="md:text-lg text-md font-bold mb-2">AFTER VIEWING THE INFORMATION, IT WILL NOT BE POSSIBLE TO REQUEST A REFUND FOR THE ORDER. </h3>
								<p className="md:text-md text-sm font-semibold">Not sure if your PC meets the system requirements? Go to the product description and see the minimum and recommended requirements to run the GAME. </p>
							</div>
							<div className="border border-cyan-300 bg-cyan-300/20 md:p-6 p-4">
								<StreamLineSVG className="mb-4" />
								<p className="md:text-md text-sm font-semibold">The account with this game is for exclusive use on PC, via Steam, Ubisoft Connect, Rockstar Launcher, Epic Games, EA App. It will not be possible to play on CONSOLES.</p>
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
