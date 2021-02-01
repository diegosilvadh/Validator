const countries = require('./../databases/countries');
const userController = {
    
// Controller Users

    login: (req,res) => {
        return res.render('userLoginForm');
    },
    register:  (req, res) => {
        return res.render('userRegisterForm',{countries});
},

    profile: (req,res) => {
        return res.render('userProfile');
    },

}


module.exports = userController;