## Express API with ORM

1. Clone this repository

2. Install dependency
```
npm install
```

3. Edit config/config.json

4. Create DB
```
npm run sequelize -- db:create
```

5. Migrate Table
```
npm run sequelize -- db:migrate
```

6. Run API
```
npm start
```

7. Try API with Postman

### Example

Simple use of Create, Read, Update, Delete (CRUD) is located in `examples` directory.