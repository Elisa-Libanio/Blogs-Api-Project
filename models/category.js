// module.exports = (sequelize, DataTypes) => 
//   sequelize.define('Category', {
//     name: DataTypes.STRING,
//   },
//   { 
//     tableName: 'Categories',
//     timestamps: false,
//   });

// como assim, eu nao estava retornando a categoria?
  module.exports = (sequelize, DataTypes) => {
   const Category = sequelize.define('Category', {
      name: DataTypes.STRING,
    },
    { 
      tableName: 'Categories',
      timestamps: false,
    });
  
    return Category;
  };
