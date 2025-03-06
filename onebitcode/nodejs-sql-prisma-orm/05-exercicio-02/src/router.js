const { Router } = require("express");
const customerControler = require("./controllers/customers-controller")

const router = Router();

router.get("/customers", customerControler.index)
router.post("/customers", customerControler.create)
router.get("/customers/:id", customerControler.show)
router.put("/customers/:id", customerControler.update)
router.delete("/customers/:id", customerControler.delete)


module.exports = router;