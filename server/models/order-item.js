const OrderItem = (sequelize, DataTypes) =>
  sequelize.define("orderItem", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

export default OrderItem;
