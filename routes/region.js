const express = require('express');
const router = express.Router();
const regionController = require('../controllers/regionController');

router.get('/mantRegions/index', regionController.GetAllRegions);
router.get('/mantRegions/saveRegion', regionController.GetCreateRegion);
router.get('/mantRegions/confirm/:regionId', regionController.GetDeleteConfirm);
router.get('/mantRegions/editRegion/:regionId', regionController.GetEditRegion);
router.post('/mantRegions/saveRegion', regionController.PostCreateRegion);
router.post('/mantRegions/editRegion', regionController.PostEditRegion);
router.post('/confirm', regionController.PostDeleteRegion);

module.exports = router;