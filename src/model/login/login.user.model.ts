import mongoose, { connect } from "mongoose";
import { User } from "../schema/user.schema";
import { compareSync } from "bcrypt";

const LoginUserModel = async (email: string, password: string) => {
  try {
    await connect("mongodb://localhost:27017/Tasker");
    const ScanEmail = await User.findOne({ email: email });
    if (ScanEmail == null) {
      throw { state: 403, message: `the email not found` };
    }
    const ValditionPassword = compareSync(
      password,
      ScanEmail.password as string
    );

    if (!ValditionPassword) {
      throw { state: 403, message: `the password incorrect` };
    }

    return {
      id: ScanEmail._id,
      email: ScanEmail.email,
      name: ScanEmail.name,
      friend_favo:ScanEmail.favorite_user,
      tasks: ScanEmail.tasks,
    };
  } catch (err) {
    throw err;
  } finally {
    await mongoose.connection.close();
  }
};

export { LoginUserModel };
