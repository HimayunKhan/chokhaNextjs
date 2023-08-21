import Product from "../models/product";
import { NextResponse } from "next/server";

export const newProduct = async (request, response) => {
  try {
    const {
      name,
      description,
      price,
      seller,
      stock,
      category,
      images,
      reviews,
      ratings,
    } = await request.json();

    const productDoc = await Product.create({
      name,
      description,
      price,
      seller,
      stock,
      category,
      images,
      reviews,
      ratings,
    });

    const res = {
      success: true,
      message: "Product created successfully",
      data: productDoc,
    };

    return NextResponse.json(res);
  } catch (error) {
    // return createErrorResponse(error);
  }
};

export const getProducts = async (request, response) => {
  try {
    const productDoc = await Product.find();

    const res = {
      success: true,
      message: "Products fetched successfully",
      data: productDoc,
    };

    return NextResponse.json(res);
  } catch (error) {
    // return createErrorResponse(error);
  }
};

export const getProduct = async (request,context) => {
  try {
    const id = context.params.id;

    if (id) {
      const foundProduct = await Product.findOne({ _id: id });

      if (!foundProduct) {
        const res = {
          success: false,
          message: "Product not found",
          data: null,
        };

        return NextResponse.json(res);
      }

      const res = {
        success: true,
        message: "Product fetched successfully",
        data: foundProduct,
      };

      return NextResponse.json(res);
    }
  } catch (error) {
    // return createErrorResponse(error); 
  }
};
