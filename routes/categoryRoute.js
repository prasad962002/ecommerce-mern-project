import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  categoryController,
  createCategoryController,
  updateCategoryController,
  SingleCategoryController,
  deleteCategoryController,
} from "../controller/categoryController.js";

const router = express.Router();

//create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//Update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//Get all Category
router.get("/get-category", categoryController);

//Single Category
router.get("/single-category/:slug", SingleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
