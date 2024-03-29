import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  orderStatusController,
  getAllOrdersController,
  getOrdersController,
  paymentController,
} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//register || method post
router.post("/register", registerController);

//Login || Post
router.post("/login", loginController);

//forgot password
router.post("/forgot-password", forgotPasswordController);

//Test Routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected router User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});

//protected router Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController)

//orders
router.get("/orders", requireSignIn, getOrdersController)

//all orders
router.get("/all-orders", requireSignIn, isAdmin,  getAllOrdersController)

//order status update
router.put("/order-status/:orderId", requireSignIn, isAdmin, orderStatusController)

//payments
router.post("/payment", requireSignIn, paymentController)

export default router;