const express = require('express'),
	router = express.Router();
const Controller = require('../controllers/comment');
const checkAuthMiddleware = require('../middleware/check-auth');

router.get('/getAll', Controller.getAll);
router.get('/post/:id', Controller.getCommentByPostId);
router.get('/:id', Controller.getCommentById);
router.post(
	'/:userId/:postId/create',
	// checkAuthMiddleware.checkAuth,
	Controller.create
);
router.put(
	'/:commentId/update',
	checkAuthMiddleware.checkAuth,
	Controller.update
);
router.delete(
	'/:commentId/delete',
	checkAuthMiddleware.checkAuth,
	Controller.delete
);
module.exports = router;
