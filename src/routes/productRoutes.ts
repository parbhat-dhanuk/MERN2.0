
import express,{Router} from "express"
import authMiddleware, { Role } from "../middleware/authMiddleware"
import {multer,storage} from "../middleware/multerMiddleware"
import productController from "../controllers/productController"

const upload = multer({storage:storage})
const router:Router=express.Router()

router.route("/").post(authMiddleware.isAuthAuthenticated,authMiddleware.restrictTo(Role.Admin),
upload.single('image'), productController.addProduct)

export default router