import express from "express";
import formidable from "express-formidable";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFilterController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controller/productController.js";

const route = express.Router();

// create product routes
route.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// update product routes
route.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get product
route.get("/get-product", getProductController);

//get single product
route.get("/get-product/:slug", getSingleProductController);

//get photo
route.get("/get-photo/:pid", productPhotoController);

//delete product
route.delete("/delete-product/:pid", deleteProductController);

//filter product
route.post("/product-filters", productFilterController);

//count product
route.get("/product-count", productCountController);

// product per page
route.get("/product-list/:page", productListController);

//search product
route.get("/search/:keyword", searchProductController);

//similar product
route.get("/related-product/:pid/:cid", relatedProductController);

//category wise product
route.get("/product-category/:slug", productCategoryController);

export default route;
