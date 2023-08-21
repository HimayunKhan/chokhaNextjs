// import Loader from "@/components/layouts/Loader";
// import React, { lazy, Suspense } from "react";

// const LazyProductDetailsLoader = lazy(() => import("@/components/products/ProductDetailsLoader"));

// const ProductDetailsPage = ({ params }) => {
//   return (
//     <Suspense fallback={<div className="text-center text-32  text-black"><Loader/></div>}>
//       <LazyProductDetailsLoader productId={params.id} />
//     </Suspense>
//   );
// };

// export default ProductDetailsPage;

import ProductDetails from "@/components/products/ProductDetails";
import axios from "axios";
import React from "react";

const getProductDetails = async (productId) => {
  const { data } = await axios.get(
    `${process.env.API_URL}/api/products/${productId}`
  );
  return data.data;
};

const productDetails = async({params}) => {
  const product = await getProductDetails(params.id);

  return (
    <>
      <ProductDetails product={product} />
    
    </>
  );
};

export default productDetails;
