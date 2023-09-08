# Maui-Surf-Breaks-API-CRUD-Swagger
A CRUD API created with Swagger

This is a simple Express.js application that serves as an API for Maui surf breaks. It allows you to list, create, update, and delete surf breaks. The API is documented using Swagger for easy reference.

## Dependencies

- express
- node.js
- npm
- nodemon
- swagger-jsdoc
- swagger-ui-express

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/surf-breaks-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd surf-breaks-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start
   ```

   If you have nodemon installed, you can use the following command to start the app with automatic server restart on code changes:

   ```bash
   npm run dev
   ```

5. Access the API documentation in the browser:
- To access the Swagger documentation for the API: [http://localhost:4000/api-docs](http://localhost:4000/api-docs)
- To list JSON data: [http://localhost:4000/breaks](http://localhost:4000/breaks)

## API Endpoints

### List All Surf Breaks

- **URL:** `/breaks`
- **Method:** `GET`
- **Description:** Get a list of all surf breaks.
- **Response:** A JSON array of surf breaks.

### Create a New Surf Break

- **URL:** `/break`
- **Method:** `POST`
- **Description:** Add a new surf break.
- **Request Body:** Provide a JSON object with `id` and `name` properties.
- **Response:** The newly created surf break as a JSON object.

### Delete a Surf Break by ID

- **URL:** `/break/:id`
- **Method:** `DELETE`
- **Description:** Delete a surf break by its ID.
- **URL Parameters:** `id` (integer) - The ID of the surf break to delete.
- **Response:** A confirmation message indicating that the surf break was deleted.

### Update a Surf Break by ID

- **URL:** `/break/:id`
- **Method:** `PUT`
- **Description:** Update a surf break by its ID.
- **URL Parameters:** `id` (integer) - The ID of the surf break to update.
- **Request Body:** Provide a JSON object with the updated `name`.
- **Response:** A confirmation message indicating that the surf break was updated.

### Swagger Hub
```
https://app.swaggerhub.com/apis/featherstoned/my-surf_break_project_crud/1.0.0
```

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/)

Copyright (c) 2023, Xochitl Mora

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.





