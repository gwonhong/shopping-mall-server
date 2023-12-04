const CartItem = (sequelize, DataTypes) =>
  sequelize.define("cartItem", {
    userId: {
      type: DataTypes.STRING,
      primaryKey: true,
      index: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

export default CartItem;
