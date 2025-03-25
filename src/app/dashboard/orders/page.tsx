"use client";

import Tabbar from "@/app/components/Tabbar";

import ChevronDownSVG from "@/assets/chevron-down.svg";

export default function Orders() {
  const orders = [
    {
      id: 1,
      id_order: "#3098029384012",
      data: "March 11, 2025",
      payment: "PIX",
      price: "R$ 167,92",
      status: "Released",
    },
    {
      id: 2,
      id_order: "#3098029384012",
      data: "March 11, 2025",
      payment: "PIX",
      price: "R$ 167,92",
      status: "Released",
    },
    {
      id: 3,
      id_order: "#3098029384012",
      data: "March 11, 2025",
      payment: "PIX",
      price: "R$ 167,92",
      status: "Released",
    },
    {
      id: 4,
      id_order: "#3098029384012",
      data: "March 11, 2025",
      payment: "PIX",
      price: "R$ 167,92",
      status: "Released",
    },
    {
      id: 5,
      id_order: "#3098029384012",
      data: "March 11, 2025",
      payment: "PIX",
      price: "R$ 167,92",
      status: "Released",
    },
    {
      id: 6,
      id_order: "#3098029384012",
      data: "March 11, 2025",
      payment: "PIX",
      price: "R$ 167,92",
      status: "Released",
    },
    {
      id: 7,
      id_order: "#3098029384012",
      data: "March 11, 2025",
      payment: "PIX",
      price: "R$ 167,92",
      status: "Released",
    },
    {
      id: 8,
      id_order: "#3098029384012",
      data: "March 11, 2025",
      payment: "PIX",
      price: "R$ 167,92",
      status: "Released",
    },
    {
      id: 9,
      id_order: "#3098029384012",
      data: "March 11, 2025",
      payment: "PIX",
      price: "R$ 167,92",
      status: "Released",
    },
  ];

  return (
    <div className="container w-full mx-auto relative md:px-30 text-white mt-20">
      <div className="md:p-10 p-5 backdrop-blur-md clip-path-element" style={{ background: "rgba(49, 55, 66, 0.80)" }}>
        <Tabbar />
        <div className="flex flex-col gap-6 mt-6">
          {orders.map((item, index) => (
            <div key={index} className="bg-white/20 hover:bg-white/40 transition p-6 clip-path-element cursor-pointer">
              <div className="flex md:flex-row flex-col justify-between relative">
                <div className="flex-1 md:block md:mb-0 mb-2">
                  <p className="md:text-lg text-md font-semibold text-white/60">{item.data}</p>
                  <h4 className="md:text-lg text-md font-medium">{item.id_order}</h4>
                </div>
                <div className="flex-1 md:block flex justify-between md:mb-0 mb-2">
                  <p className="md:text-lg text-md font-semibold text-white/60">Payment</p>
                  <h4 className="md:text-lg text-md font-medium">{item.payment}</h4>
                </div>
                <div className="flex-1 md:block flex justify-between md:mb-0 mb-2">
                  <p className="md:text-lg text-md font-semibold text-white/60">Price</p>
                  <h4 className="md:text-lg text-md font-medium">{item.price}</h4>
                </div>
                <div className="flex-1 md:block flex justify-between md:mb-0 mb-2">
                  <p className="md:text-lg text-md font-semibold text-white/60">Status</p>
                  <h4 className="md:text-lg text-md font-semibold text-green-400">{item.status}</h4>
                </div>
                <ChevronDownSVG className="md:block absolute right-0 top-0"/>
              </div>
            </div>
          )) }
        </div>
      </div>
    </div>
  );
}