import { Hono } from 'hono';
import * as userController from '../controllers/userController';

const app = new Hono();

app.get('/status', (c) => {
    return c.body("StatusOK", {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
})

app.get('/users', userController.GetUsers);

app.get('/users/:user_id', userController.GetUser);

app.post('/adduser', userController.AddUser);

app.put('/updateuser/:user_id', userController.UpdateUser);

app.delete('/deleteuser/:user_id', userController.DeleteUser);

const userRoutes = new Hono();
userRoutes.route('/api/v1', app);

export default userRoutes;