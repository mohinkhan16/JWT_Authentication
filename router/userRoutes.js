
import express from "express"
import userController from "../controller/user.controller.js";

 const router = express.Router();

router.post("/add",userController.add);

router.get("/getAll",userController.getAll);

router.post ("/login",userController.login);

router.post ("/authlogin",userController.authLogin)

router.get("/logout",userController.logout);

router.get("/logoutAll",userController.logoutAll);

router.patch("/update",userController.updateUser);

router.delete("/delete",userController.deleteUser)
export default router;