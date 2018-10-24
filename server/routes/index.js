const  express =  require("express");
const router = express.Router();
const isAuthenticated =  require("../middlewares/isAuthenticated");
const {calculatePriceValidation} = require("../middlewares/validations")
const {signUp,logIn,me} =  require("../controllers/users");
const {createRestuarant,getAllRestaurants,getOneRestuarant} =  require("../controllers/restaorants");
const {calculatePrice,createOder} = require('../controllers/orders');



router.post('/users/signup',signUp)
router.post('/users/login',logIn)
router.get('/users/me',isAuthenticated,me)


router.post('/restuarants',isAuthenticated,createRestuarant)
router.get('/restuarants',getAllRestaurants)
router.get('/restuarants/:id',getOneRestuarant)


router.post('/orders/calculate',calculatePriceValidation,calculatePrice);
router.post('/orders',isAuthenticated,createOder);




module.exports = router;

