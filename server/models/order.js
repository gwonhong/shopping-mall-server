const Order = (sequelize, DataTypes) =>
  sequelize.define("order", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

export default Order;
