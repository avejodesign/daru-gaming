import React from 'react'
import OrderItem from "./OrderItem";

interface Order {
    id: number;
    id_order: string;
    data: string;
    payment: string;
    price: string;
    status: string;
    purchasedProducts: string[];
}
  
interface OrderListPurchasedProps {
    orders: Order[];
}

export default function OrderListPurchased({orders}: OrderListPurchasedProps) {
  return (
    <div className="grid gap-6 md:w-240 w-full mx-auto">
        {orders.map((item, i) => (
            <OrderItem 
                key={i} 
                id={item.id}
                data={item.data} 
                id_order={item.id_order} 
                payment={item.payment} 
                price={item.price} 
                status={item.status} 
                purchasedProducts={item.purchasedProducts} 
            />
        ))}
    </div>
  )
}