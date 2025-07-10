import User from "../schema/user.js";
import crudRepository from "./crudRepository.js";

const userRepository = {
    ...crudRepository(User),

    signUpUser: async function (data) {
        const newUser = new User(data);
        await newUser.save();
        const userObj = newUser.toObject();
        delete userObj.password;
        return userObj;
    },

    getByUsername: async function (name) {
        const user = await User.findOne({ username: name });
        return user;
    },
}

export default userRepository;