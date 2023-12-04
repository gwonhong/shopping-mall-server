const Seller = (sequelize, DataTypes) =>
  sequelize.define("seller", {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      validate: {
        isAlphanumeric: true,
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
  });

export default Seller;
