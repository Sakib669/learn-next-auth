import mongoose, { model, models, Schema } from "mongoose";

export interface IUser {
  email: string;
  password: string;
  id?: mongoose.Types.ObjectId;
  createdAt?: Date;
  modifiedAt?: Date;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  //   next();
});

const User = models?.User || model<IUser>("User", userSchema);

export default User;
