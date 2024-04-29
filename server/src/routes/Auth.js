const authController = require('../controllers/Auth');
const express = require('express');
const router = express.Router();

router.post('/submitemail',authController.findEmail);
router.post('/signup',authController.signUp);
router.post('/signin',authController.signIn);
router.get('/signout',authController.signOut);
router.post('/forgotpassword',authController.forgotPassword);
router.post('/changepassword',authController.changePassword);
router.post('/changeemail',authController.changeEmailBeforeVerification);
router.post('/verifyemail',authController.changeEmailAfterVerification);
// for testing
router.get('/test', (req, res) => {
        res.json({
            status: 200,
            message: 'test succeeded'
        }) 
    })
router.post('/post', (req, res) => {
    res.json({
        status: 200,
        message: 'post succeeded'
    }) 
})
// module.exports = router;
exports.router=router;