import postRoutes from './posts.js';
import userRoutes from './user.js'

export default router => {
    router.use('/posts',  postRoutes),
    router.use('/users',  userRoutes)
}