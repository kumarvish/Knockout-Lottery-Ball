exports.home = function (req, res) {
    res.render('generator/home', {state: '/generator'});
}