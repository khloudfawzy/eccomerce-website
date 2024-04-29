const User = require('../models/User');
const regex = require('../shared/regex');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.findEmail = async (req, res) => {
    const emailRegex = regex.email;
    let email = req.body.email;
    if (!req.body.email || !emailRegex.test(email)){
        return res.json({
            status: 400,
            message: 'invalid-email'
        })
    }
    //trim the email before searching in DB
    email = email.trim();
    User.find({email}).then( result => {
        if (result.length > 0) {
            return res.json({
                status: 200,
                nextStep: 'login'
            })
        } 
        return res.json({
            status: 200,
            nextStep: 'signup'
        })
    }).catch(error => {
        console.log(error);
        res.json({
            status: 500,
            message: 'error-occured-while-searching-for-email'
        })
    });
    
}

exports.signUp = async(req, res) => {
    let { email, password, confirmPassword } = req.body;
    email = email?.trim();
    password = password?.trim();
    confirmPassword = confirmPassword?.trim();

    if(!password || !confirmPassword) {
            res.json({
                status: 400,
                message: 'empty-required-inputs'
            })
    } else if (password.length < 8 || confirmPassword.length < 8 || password !== confirmPassword) {
        res.json({
            status: 400,
            message: 'not-valid data'
        })
    } else {
        User.find({email}).then (result => {
                // create new user
                bcrypt.hash(password, 10).then( hashedPassword => {
                    const newUser = new User({email, password: hashedPassword});
                    // set a cookie
                    const token = jwt.sign({ email: newUser.email }, 'shhhhh');
                    newUser.token = token;
                    res.cookie('jwt', token, {
                        httpOnly: true,
                    })
                    //save the user new data
                    newUser.save().then(result => {
                        //send success response
                        res.json({
                            status: 200,
                            message: 'register-successful',
                            data: result
                        })
                    }).catch(error =>{
                        res.json({
                            status: 500,
                            message: 'error-occured-while-saving-user',
                            error
                        })
                    })
                }).catch (error =>{
                    console.log(error);
                    res.json({
                        status: 500,
                        message: 'error-occured-while hashing password'
                    })
                })
        }).catch(error => {
            console.log(error);
            res.json({
                status: 500,
                message: 'error-occured-while-signing-up'
            })
        })
    }
};

exports.signIn = async(req, res) => {
    let { email, password } = req.body;
    email = email?.trim();
    password = password?.trim();

    if(!email || !password) {
            res.json({
                status: 400,
                message: 'empty-required-inputs'
            })
    } else {
        User.findOne({email}).then (user => {
            if (user.length){
                // check if password correct
                const hashedPassword = user.password;
                bcrypt.compare(password, hashedPassword).then(result => {
                    if(result){
                        // set a cookie
                        const token = jwt.sign({ email: newUser.email }, 'shhhhh');
                        user.token = token;
                        res.cookie('jwt', token, {
                            httpOnly: true,
                        })
                        // save the user token
                        user.save();

                        //send success response
                        res.json({
                            status: 200,
                            message: 'login-success'
                        })
                    } else {
                        res.json({
                            status: 400,
                            message: 'wrong-password'
                        })
                    }
                }).catch(error =>{
                    res.json({
                        status: 500,
                        message: 'error-happened-while-comparing-passwors'
                    })
                })
            } else {
                res.json({
                    status: 400,
                    message: 'email-not-found'
                })
            }
        }).catch(error => {
            console.log(error);
            res.json({
                status: 500,
                message: 'error-occured'
            })
        })
    }
};

exports.signOut = async(req, res) => {
    res.clearCookie('jwt');
    // get current user to set its token to null
    await URLSearchParams.findOne({token}).then( user => {
        if (user.length){
                // update the existing user's email
                user = {...user, token: null}
                    //save the user new email
                user.save().then(result => {
                    res.json({
                        status: 200,
                        message: 'signout-success'
                    })
            })
        }
    }).catch( error => {
        console.log(error);
        res.json({
            status: 400,
            message: 'error-while-fetching-user-token'
        }) 
    })
};

exports.forgotPassword = async(req, res) => {
    let { email} = req.body;
    email = email?.trim();

    if(!email) {
            res.json({
                status: 400,
                message: 'empty-required-inputs'
            })
    } else {
        User.findOne({email}).then (user => {
            if (user.length){
                //code for sending email here
            } else {
                res.json({
                    status: 400,
                    message: 'email-not-found'
                })
            }
        }).catch(error => {
            console.log(error);
            res.json({
                status: 500,
                message: 'error-occured'
            })
        })
    }
};
exports.changePassword = async(req, res) => {
    let { oldPassword, newPassword, confirmPassword } = req.body;
    const token = req.token;
    oldPassword = oldPassword?.trim();
    newPassword = password?.trim();
    confirmPassword = password?.trim();

    if(!oldPassword || !newPassword || !confirmPassword) {
            res.json({
                status: 400,
                message: 'empty-required-inputs'
            })
    } else if (newPassword.length < 8 || confirmPassword.length < 8 || newPassword !== confirmPassword) {
        res.json({
            status: 400,
            message: 'not-valid data'
        })
    } else {
        // get current user
        await URLSearchParams.findOne({token}).then( user => {
            if (user.length){
                // update the existing user's password
                bcrypt.hash(newPassword, 10).then( hashedPassword => {
                user = {...user, password: hashedPassword}
                    //save the user new password
                    user.save().then(result => {
                        //send success response
                        res.json({
                            status: 200,
                            message: 'password-changed-successfully',
                        })
                    }).catch(error =>{
                        res.json({
                            status: 500,
                            message: 'error-occured-while-saving-new password',
                            error
                        })
                    })
                }).catch (error =>{
                    console.log(error);
                    res.json({
                        status: 500,
                        message: 'error-occured-while hashing password'
                    })
                })
            }
        }).catch( error => {
            console.log(error);
            res.json({
                status: 400,
                message: 'error-while-fetching-user-token'
            }) 
        })
    }
};
exports.changeEmailBeforeVerification = async(req, res) => {
    const token = req.token;
    // get current user
    await URLSearchParams.findOne({token}).then( user => {
        if (user.length){
            //add logic to send verification email
        }
    }).catch( error => {
        console.log(error);
        res.json({
            status: 400,
            message: 'error-while-fetching-user-token'
        }) 
    })
};
exports.changeEmailAfterVerification = async(req, res) => {
    const newEmail = req.email;
    // get current user
    await URLSearchParams.findOne({token}).then( user => {
        if (user.length){
                // update the existing user's email
                user = {...user, email: newEmail}
                    //save the user new email
                user.save().then(result => {
                    //send success response
                    res.json({
                        status: 200,
                        message: 'email-changes-successfully'
                    })
            })
        }
    }).catch( error => {
        console.log(error);
        res.json({
            status: 400,
            message: 'error-while-fetching-user-token'
        }) 
    })
};