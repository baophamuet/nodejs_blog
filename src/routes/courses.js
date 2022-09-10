const express = require('express')
 
const router = express.Router()

const courseController= require('../app/controllers/CourseController')
//const siteController= require('../app/controllers/SiteController')

    //newsController.indexx
    router.get('/nodejs',courseController.show)
 router.get('/java',courseController.showjava)
 router.get('/c',courseController.showc)
 //   router.get('/',siteContronler.home)    
module.exports = router;