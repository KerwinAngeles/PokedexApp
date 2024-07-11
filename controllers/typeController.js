const Type = require('../models/Type');

const GetAllTypes = ((req, res, next) => {
    Type.findAll().then((result) => {
        const type = result.map((result) => result.dataValues)
        res.render('mantTypes/index', {
            pageTitle: 'Types',
            isActiveTypes: true,
            types: type,
            validator: true
        });
    }).catch((error) => {
        console.log(error);
    })
});

const GetCreateTypes = ((req, res, next) => {
    res.render('mantTypes/saveType', {
        pageTitle: 'Create Type',
        isActiveTypes: true,
        validator: true
    });
});

const GetDeleteConfirm = ((req, res, next) => {
    const id = req.params.typeId;
    res.render('mantTypes/confirm', {
        pageTitle: 'Delete',
        isActiveTypes: true,
        id: id
    });
});

const GetEditType = ((req, res, next) => {
    const id = req.params.typeId;
    Type.findOne({where: {id: id}}).then((result) => {
        const type = result.dataValues;
        if(!type){
            res.redirect('/mantTypes/index');
        }
        res.render('mantTypes/saveType', {
            pageTitle: 'Edit Type',
            isActiveTypes: true,
            editMode: true,
            type: type,
            validator: true
        });
    }).catch((error) => {
        console.log(error);
    });
});


const PostCreateType = ((req, res, next) => {
    const name = req.body.name;
    Type.create({
        name: name
    }).then((result) => {
        console.log(result);
        res.status(302).redirect('/mantTypes/index');
    }).catch((error) =>{
        console.log(error);
    })
});


const PostEditType = ((req, res, next) => {
    const name = req.body.name;
    const id = req.body.id;
    Type.update({name: name}, {where:{id: id}}).then((result) => {
        console.log(result);
        res.redirect('/mantTypes/index');
    }).catch((error) => {
        console.log(error);
    })
})

const PostDeleteType = ((req, res, next) => {
    const id = req.body.id;
    Type.destroy({where: {id:id}}).then((result) => {
        console.log(result);
        res.redirect('/mantTypes/index');
    }).catch((error) => {
        console.log(error);
    });
});

module.exports = {
    GetAllTypes,
    GetCreateTypes,
    GetEditType,
    GetDeleteConfirm,
    PostCreateType,
    PostEditType,
    PostDeleteType
};