import express from 'express';
import { aboutPageController, blogPageController, cofeesPageController, contactPageController, homePageController } from '../controllers/pageController.js';

const router = express.Router();

// Create Home router
router.get('/', homePageController);

// Create About router
router.get('/about', aboutPageController);

// Create Contact page Router
router.get('/contact', contactPageController);

// Create blog page Router
router.get('/blog', blogPageController);

// Create cofees page router
router.get('/coffees', cofeesPageController);

// Export router
export default router;