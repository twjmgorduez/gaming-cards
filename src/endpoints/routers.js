import express from 'express'
const productGalleryService = require('../services/product-gallery-service')()
const productGalleryController = require('../endpoints/product-gallery-controller')(productGalleryService)

const router = express.Router();

router.get("/show-gallery", productGalleryController.showGallery);
router.get("/show-product/:id", productGalleryController.showProduct);

export default router