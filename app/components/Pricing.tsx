import React from 'react';
import { typeOfCart } from '@/lib/drizzle';
import { singleProductType } from '@/types';

const Pricing = ({ productData, data }: { productData: singleProductType[], data: typeOfCart[] }) => {
  const shipping = 0;

  const orderTotal = productData.reduce((total, priceItem) => {
    const quantityItem = data.find(item => item.productid === priceItem._id);
    return quantityItem ? total + priceItem.price * (quantityItem.quantity as number) : total;
  }, 0);

  return (
    <div className="flex p-4 md:p-8 overflow-clip w-full flex-col md:max-w-6xl md:mx-auto space-y-6 px-6 mt-20 bg-gray-100/50 dark:bg-white rounded-md">
      <h6 className="font-bold text-gray-900 text-2xl mb-10">Order Summary</h6>
      <div className="flex justify-between">
        <p className="text-lg font-bold">Quantity:</p>
        <p className="font-bold">{data.reduce((total, item) => total + (item.quantity as number), 0)}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-lg font-bold">Order Total:</p>
        <p className="font-bold">${orderTotal}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-lg font-bold">Shipping:</p>
        <p className="font-bold">${shipping}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-lg font-bold">Subtotal:</p>
        <p className="font-bold">${orderTotal + shipping}</p>
      </div>
      <button className="text-white bg-gray-950 border font-semibold px-4 py-2 w-full rounded-md">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Pricing;
