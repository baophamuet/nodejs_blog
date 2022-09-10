const { mutipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Course')

class SiteController {
    // get - news
    home(req,res,next ) {
        //res.render('home');
        Course.find({})
            .then(courses=> {
                res.render('home',{
                    courses: mutipleMongooseToObject(courses)
                })
            } )
            .catch(next)

    }

    search(req,res) {
        res.render('search')    
    }

}

module.exports = new SiteController;
