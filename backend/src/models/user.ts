import { DataTypes, Model, Optional } from "sequelize";
import connection from "../config/dbConnect";

interface UserAttributes {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserInput extends Optional<UserAttributes, "id"> {}
export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name cannot Null",
        },
        notEmpty: {
          msg: "Name cannot Empty",
        },
      },
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: {
        name: "email",
        msg: "Email must be unique",
      },
      validate: {
        notEmpty: {
          msg: "Email is required",
        },
        notNull: {
          msg: "Email is required",
        },
        isEmail: {
          msg: "Must Be Email",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password is required",
        },
        notEmpty: {
          msg: "Password is required",
        },
      },
    },
  },
  {
    timestamps: true,
    sequelize: connection,
    underscored: false,
  }
);

export default User;
