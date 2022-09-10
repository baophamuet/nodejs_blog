
class NewsController {
    // get - news
    index(req,res) {
        res.render('news');
    }


    show(req,res) {
        res.send("Hi")
    }

    showsport(req,res) {
       res.send('FOOTBALL is king sport ')
    }
}

module.exports = new NewsController;
