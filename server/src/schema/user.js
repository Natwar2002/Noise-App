import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: [true, 'Email already exists'],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please enter a valid email address'
            ]
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        firstName: {
            type: String,
            required: [true, 'First name is required']
        },
        lastName: {
            type: String,
            required: [true, 'Last name is required']
        },
        username: {
            type: String,
            required: [true, 'Username is required'],
            unique: [true, 'Username must be unique'],
            minLength: [3, 'Username must contain at least 3 characters'],
            match: [
                /^[a-zA-Z0-9]+$/,
                'Username must contain only letters and numbers'
            ]
        },
        avatar: {
            type: String
        }
    },
    { timestamps: true }
);

userSchema.pre('save', function saveUser(next) {
    if (this.isNew) {
        const user = this;
        const SALT = bcrypt.genSaltSync(9);
        const hashedPassword = bcrypt.hashSync(user.password, SALT);
        user.password = hashedPassword;
        user.avatar = `https://robohash.org/${user.username}`;
    }
    next();
});

const User = mongoose.model('User', userSchema);

export default User;