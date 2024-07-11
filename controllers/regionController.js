const Regions = require('../models/Region');

const GetAllRegions = ((req, res, next) => {
    Regions.findAll().then((result) => {
        const region = result.map((result) => result.dataValues);
        res.render('mantRegions/index', {
            pageTitle: 'Regions',
            isActiveRegions: true,
            regions: region,
            validator: true
        });
    }).catch((error) => {
        console.log(error);
    });
});

const GetCreateRegion = ((req, res, next) => {
    res.render('mantRegions/saveRegion', {
        pageTitle: 'Create Region',
        isActiveRegions: true,
        validator: true
    });
});

const GetDeleteConfirm = ((req, res, next) => {
    const id = req.params.regionId;
    res.render('mantRegions/confirm', {
        pageTitle: 'Delete',
        isActiveRegions: true,
        id: id
    })
})

const GetEditRegion = ((req, res, next) => {
    const id = req.params.regionId;
    Regions.findOne({where: {id: id}}).then((result) => {
        const region = result.dataValues;
        if(!region){
            res.redirect('/mantRegions/index');
        }
        res.render('mantRegions/saveRegion', {
            pageTitle: 'Edit Region',
            isActiveRegions: true,
            editMode: true,
            region: region,
            validator: true
        });
    }).catch((error) => {
        console.log(error);
    })
});

const PostCreateRegion = ((req, res, next) => {
    const name = req.body.name;
    Regions.create({
        name: name
    }).then((result) => {
        console.log(result);
        res.status(302).redirect('/mantRegions/index');
    }).catch((error) =>{
        console.log(error);
    })
});

const PostEditRegion = ((req, res, next) => {
    const name = req.body.name;
    const id = req.body.id;

    Regions.update({name: name}, {where:{id:id}}).then((result) => {
        console.log(result);
        res.redirect('/mantRegions/index');
    }).catch((error) => {
        console.log(error);
    })
})

const PostDeleteRegion = ((req, res, next) => {
    const id = req.body.id;
    Regions.destroy({where: {id:id}}).then((result) => {
        console.log(result);
        res.redirect('/mantRegions/index');
    }).catch((error) => {
        console.log(error);
    });
});

module.exports = {
    GetAllRegions,
    GetCreateRegion,
    GetEditRegion,
    GetDeleteConfirm,
    PostCreateRegion,
    PostEditRegion,
    PostDeleteRegion
}