import User from "../models/userModel";
import { Context } from 'hono';

export const GetUsers = async (c: Context) => {
    c.header('Content-Type', 'application/json');

    try {
        const users = await User.find({});
        c.status(200);
        return c.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);

        return c.body("Error fetching users", { status: 500 })
    }
};

export const GetUser = async (c: Context) => {
    const id = c.req.param('user_id');
    c.header('Content-Type', 'application/json');

    try {
        const user = await User.findById(id);

        if (user) {
            c.status(200);
            return c.json({
                name: user.name,
                age: user.age,
                email: user.email
            });
        } else {
            return c.body("user not found", { status: 500 })
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        return c.body("Error fetching user", { status: 500 })
    }
};

export const AddUser = async (c: Context) => {
    const { name, age, email, password } = await c.req.json();
    c.header('Content-Type', 'application/json');

    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            return c.body("User already exists", { status: 400 });
        }

        const user = await User.create({ name, age, email, password });
        if (user) {
            return c.body("User added to the database...", { status: 201 });
        } else {
            return c.body("Invalid user data", { status: 400 });
        }
    } catch (error) {
        console.error('Error adding user:', error);
        return c.body("Error adding user", { status: 500 })
    }
};

export const UpdateUser = async (c: Context) => {
    const id = c.req.param('user_id');
    const { name, age, email, password } = await c.req.json();

    try {
        const user = await User.findById(id);

        if (!user) {
            return c.body("User not found", { status: 404 });
        }

        user.name = name;
        user.age = age;
        user.email = email;
        user.password = password;

        const updatedUser = await user.save();

        if (updatedUser) {
            return c.body("User updated successfully...", { status: 200 });
        } else {
            return c.body("Failed to update user data", { status: 400 });
        }
    } catch (error) {
        console.error('Error updating user:', error);
        return c.body("Error updating user", { status: 500 })
    }
};

export const DeleteUser = async (c: Context) => {
    const id = c.req.param('user_id');

    try {
        const user = await User.findById(id);

        if (!user) {
            return c.body("User not found", { status: 404 });
        }

        await User.deleteOne({ _id: id });
        return c.body("User deleted successfully", { status: 200 });
    } catch (error) {
        console.error('Error deleting user:', error);
        return c.body("Error deleting user", { status: 500 })
    }
};
