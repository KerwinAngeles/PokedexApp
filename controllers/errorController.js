const noFound = ((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Page no found'
    });
});

module.exports = {
    noFound
}