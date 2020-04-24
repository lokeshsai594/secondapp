const express = require('express');
const router = express.Router();
const User = require('../DB/user');


//togetalltheposts
/**
 *  @swagger
 *   /posts:
 *    get:
 *       summary: returns all the posts
 *       description: Use to get all the data of posts
 *       responses: 
 *           '200':
 *            description: a successfull response
 *            schema:
 *                type: object
 *                properties: 
 *                  firstname:
 *                     type: string
 *                     example: John
 *                  lastname: 
 *                     type: string
 *                     example: Wick
 *            
 */
router.get('/', async (req, res)=>{
    try{
        const posts = await User.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});


/**
 *  @swagger
 *  /posts:
 *    post:
 *       summary: to create a new post
 *       consumes: 
 *           - application/json
 *       parameters:
 *           - in: body
 *             name: body
 *             description: the name to be created
 *             schema:
 *                 type: object
 *                 properties: 
 *                    firstname:
 *                      type: string
 *                      example: john
 *                    lastname:
 *                      type: string
 *                      example: Snow
 *             required:
 *                - firstname  
 *                - lastname
 *       responses:
 *         201:
 *           description: Created
 */
//tocreateapost
router.post('/', async (req, res)=> {
    const post = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname
    });
    try{
        const savedpost = await post.save();
        res.json(savedpost);
    } catch (err) {
        res.json({ message: err });
    }
});

/**
 *  @swagger
 *  /posts/{postId}:
 *     get:
 *        summary: returns a post by postId
 *        parameters:
 *             - in: path
 *               name: postId
 *               required: true
 *               type: integer
 *               description: The ID of the user to return
 *        responses:
 *          200:
 *            description: A user object
 *            schema:
 *                type: object
 *                properties: 
 *                  firstname:
 *                     type: string
 *                     example: string
 *                  lastnamename: 
 *                     type: string
 *                     example: string
 *          400:
 *              description: The specified user ID is invalid 
 *          404:
 *              description: A user with the specified ID was not found.
 *          default:
 *              description: Unexcepted error.
 */

 //togetaspecficpost
router.get('/:postId', async (req, res)=> {
    try{
    const post = await User.findById(req.params.postId);
    res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});


/**
 *  @swagger
 *   /posts/{postId}:
 *     delete:
 *         summary: to delete a particular post by postId 
 *         parameters:
 *             - in: path
 *               name: postId
 *               required: true
 *               type: integer
 *               description: delete a particular post by postId parameter
 *         responses:
 *           200:
 *            description: successfully deleted the post 
 *            schema:
 *                type: object
 *                properties: 
 *                  firstname:
 *                     type: string
 *                     example: valar
 *                  lastname: 
 *                     type: string
 *                     example: morghulus
 */
//todeleteaspecificpost
router.delete('/:postId', async (req, res) => {
    try{
      const removedpost = await User.remove({_id: req.params.postId });
      res.json(removedpost);
    } catch (err) {
        res.json({ message: err });
    }
});

/**
 *  @swagger
 *  /posts/{postId}:
 *    patch:
 *        summary: to update a particular post by postId
 *        parameters:
 *           - in: path
 *             name: postId
 *             required: true
 *             type: integer
 *             description: to update a particular post
 *        responses:
 *          200:
 *            description: postId updated successfully
 *            schema:
 *                type: object
 *                properties: 
 *                  firstname:
 *                     type: string
 *                     example: John
 *                  lastname: 
 *                     type: string
 *                     example: Wick
 */
//toupdateapost
router.patch('/:postId', async (req, res)=> {
    try{
    const updatepost = await User.updateOne(
        { _id: req.params.postId }, 
        { $set: { firstname: req.body.firstname , lastname: req.body.lastname }
    });
    res.json(updatepost);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;