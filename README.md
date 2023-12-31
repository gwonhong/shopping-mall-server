# shopping mall project

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the node server at [http://localhost:8080](http://localhost:8080).

## Server

쇼핑몰을 위한 API 서버

### 사용 기술

- Node.js, express
- sequelize, MySQL
- JWT: Stateless한 API 서버에서 로그인 기능 구현을 위해 세션 대신 JWT를 사용

### Routes

#### `/users`

- POST `/`: register user
- PUT `/`: edit (currently logged in) user informations
- DELETE `/`: delete (currently logged in) user
- POST `/login`: user login

#### `/sellers`

- POST `/`: register seller
- PUT `/`: edit (currently logged in) seller informations
- DELETE `/`: delete (currently logged in) seller
- POST `/login`: seller login

#### `/products`

- GET `/`: get all products
- POST `/`: create product (under currently logged in seller)
- GET `/:id`: get product details (with matching id)
- PUT `/:id`: edit product (of the currently logged in seller)
- DELETE `:id`: delete product (of the currently logged in seller)

#### `/cart`

#### `/orders`

### ERD


![ShoppingMall](https://github.com/gwonhong/shopping-mall-server/assets/75533669/c7925280-a72d-4e93-92d8-ff23340e1651)
