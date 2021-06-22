const express= require ('express')
const router = express.Router ();
const {
    getAllGroceries,
    createGrocery,
    updateGrocery,
    deleteGrocery,
} = require ('./controller/shopController');

router.get ("/", function (req, res, next){
    res.json (true);
});

router.get ('/get-all-groceries', getAllGroceries);
router.post ('/create-groceries', createGrocery);
router.put ('/update-groceries-by-id:id', updateGrocery);
router.delete ('/delete-groceries-by-id:id', deleteGrocery);
module.exports = router;