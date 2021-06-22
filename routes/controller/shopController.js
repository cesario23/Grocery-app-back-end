const Shop = require ("../model/Shop");

async function getAllGroceries (req, res){
    try{
        let allGroceries = await Shop.find ({});
        res.json ({payload: allGroceries})

    }catch (e){
        res.status(500).json ({message:e.message, error: e})
    }
}

async function createGrocery (req, res){
   try{
       let createdGrocery = new Shop ({
           grocery: req.body.grocery
       });
       let savedGrocery = await createdGrocery.save();
       res.json ({payload: savedGrocery})

   }catch (e){
       res.status(500).json({message:e.message, error:e})
   }
}

async function updateGrocery (req, res){
    try{
        let updatedGrocery = await Shop.findByIdAndUpdate(
            {_id: req.params.id},
            req.body,
            {
                new: true,
            }
        );
        res.json({payload: updatedGrocery});

    }catch (e){
        res.status(500).json({message:e.message, error:e})
    }

};

async function deleteGrocery (req, res) {
    try{
    let deletedGrocery = await Shop.findByIdAndRemove(req.params.id);
    res.json({payload: deletedGrocery})
    }catch(e){
        res.status(500).json({message:e.message, error:e})
    }

}

module.exports = {
getAllGroceries,
createGrocery,
updateGrocery,
deleteGrocery,
}