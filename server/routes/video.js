import express from 'express'

import {uploadVideo,getAllvideos} from '../controller/video.js'
import {likeController} from '../controller/like.js'
import {viewController} from '../controller/views.js'
import {likeVideoController,getAlllikeVideoController,deleteLikeVideoController} from '../controller/likedVideo.js'
import {watchLaterController,getAllwatchLaterController,deletewatchLaterController} from '../controller/watchLater.js'
import {HistoryController,getAllHistoryController,deleteHistoryController} from '../controller/History.js'
import upload from '../Helpers/fileHelper.js'
import auth from '../middleware/auth.js'

const routes=express.Router();

routes.post("/uploadVideo",auth,upload.single("file"),uploadVideo)

routes.get("/getvideos",getAllvideos);
routes.patch('/like/:id',auth,likeController)
routes.patch('/view/:id',viewController)

routes.post('/likeVideo',auth,likeVideoController)
routes.get('/getAlllikeVideo',getAlllikeVideoController)
routes.delete('/deleteLikedVideo/:videoId/:Viewer',auth,deleteLikeVideoController)

routes.post('/watchLater',auth,watchLaterController)
routes.get('/getAllwatchLater',getAllwatchLaterController)
routes.delete('/deleteWatchlater/:videoId/:Viewer',auth,deletewatchLaterController)

routes.post('/History',auth,HistoryController)
routes.get('/getAllHistory',getAllHistoryController)
routes.delete('/deleteHistory/:userId',auth,deleteHistoryController)

export default routes;

