const router = require('express').Router();

const {
    register
} = require('../../app/controllers/api/eventsController');

/**
* @swagger
* /api/register:
*   post:
*     summary: Webhook to accept event data
*     description: Stores event data on DB
*     responses:
*       200:
*         description: Successful response
*/
router.post('/register', register);

module.exports = router;