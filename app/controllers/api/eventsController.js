const Event = require('../../models/Event');

/**
 * @desc    Save or register a new event
 * @method  POST api/register
 * @access  public
 */
exports.register = async (req, res) => {
    try {
        const { event,challenge } = req.body;
        const payload = req.body;
        
        //Checks if it is the first connection to the board
        if(challenge){
          res.status(200).send(req.body);
        }else{
        // Save event to DB
        const newEvent = new Event({
          boardId:event.boardId,
          eventType:event.type,
          event,
          payload,
        });
        await newEvent.save();
        res.sendStatus(200);
        }
      } catch (err) {
        console.error(err);
        res.sendStatus(500);
      }
};