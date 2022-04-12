import express from "express";

import { signin, signup } from "../controllers/user.js";

const router = express.Router();

router.post('/signin', signin); // details from the form.
router.post('/signup', signup); // details from the form.


export default router;