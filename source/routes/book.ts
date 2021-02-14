import express from 'express';
import controller from '../controllers/book';

const router = express.Router();
router.get('/', controller.GetAllBooks);
router.post('/', controller.createBook);

export = router;
