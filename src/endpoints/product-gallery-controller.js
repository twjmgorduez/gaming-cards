
module.exports = function (productGalleryService) {
    return {

        showGallery(req, res) {
            
            productGalleryService.showGallery((err, cards) => {
                res.json(cards)
            });
        }, 

        showProduct(req, res) {
            
            productGalleryService.showProduct(req.params.id, (err, card) => {
                res.json(card)
            });
        }
    }
}