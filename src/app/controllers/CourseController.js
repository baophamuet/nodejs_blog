const Course = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    show(req,res,next) {
        Course.findOne({slug: req.params.slug})
            .then(course =>{
               // res.json(course)
                res.render('courses/show',{course: mongooseToObject(course)})
            })
            .catch(next);
    }
    showjava(req,res) {
        res.send('hilo JAVA')
    }
    showc(req,res) {
        res.send('hilo C,C++')
    }
    

}

module.exports = new CourseController;
