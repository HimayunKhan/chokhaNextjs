
"use client"
import ListProducts from "@/components/products/ListProducts";
import AuthContext from "@/context/AuthContext";
import axios from "axios";
import { useContext } from "react";

// const getProducts = async () => {
//   const { data } = await axios.get(`${process.env.API_URL}/api/products`);
//   return data?.data;
// };

const Home = () => {
  const {filteredProducts} = useContext(AuthContext)



  return (
    <>
      <ListProducts data={filteredProducts} />
    </>
  );
};
export default Home;
