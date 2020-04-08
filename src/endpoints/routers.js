import express from 'express'
import { show_gallery, show_product} from '../endpoints/product_gallery.js'

const router = express.Router();

router.get("/show-gallery", show_gallery);
router.get("/show-product/:name", show_product);

export default router