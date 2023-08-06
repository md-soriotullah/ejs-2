import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();

// Home page controller
export const homePageController = (req, res) => {
    const slider = fs.readFileSync(path.join(__dirname, './db/slider.json'));
    const customars = fs.readFileSync(path.join(__dirname, './db/customars.json'));
    res.render('index', {
        slider : JSON.parse(slider.toString()),
        customars : JSON.parse(customars.toString())
    })
};

// About page controller
export const aboutPageController = (req, res) => {
    res.render('about')
};

// Contact page controller
export const contactPageController = (req, res) => {
    res.render('contact')
};

// Blog page controller
export const blogPageController = (req, res) => {
    res.render('blog')
};

// Cofees page controller
export const cofeesPageController = (req, res) => {
    res.render('coffees')
};