"use client";
import { createContext } from "react";
import { ProductContextType } from "../lib/types/product";

export const ProductContext = createContext<ProductContextType | null>(null);
