const express = require('express');
const router = express.Router();
const typeController = require('../controllers/typeController');

router.get('/mantTypes/index', typeController.GetAllTypes);
router.get('/mantTypes/saveType', typeController.GetCreateTypes);
router.get('/mantTypes/confirm/:typeId', typeController.GetDeleteConfirm);
router.get('/mantTypes/editType/:typeId', typeController.GetEditType);
router.post('/mantTypes/saveType', typeController.PostCreateType);
router.post('/mantTypes/editType', typeController.PostEditType);
router.post('/confirm-type', typeController.PostDeleteType);

module.exports = router;