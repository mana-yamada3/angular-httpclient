let express = require('express');
let router = express.Router();
 
const customers = require('../controllers/controller.js');

router.post('/create', customers.create);
router.get('/retrieveinfos', customers.retrieveAllCustomers);
router.put('/updatebyid/:id', customers.updateById);
router.delete('/deletebyid/:id', customers.deleteById);

module.exports = router;