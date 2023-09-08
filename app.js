// const express = require('express');
// const swaggerJsDoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express');

// var breaks = [
//     { id: 0, name: "sandpiles" },
//     { id: 1, name: "kalama bowls" },
//     { id: 2, name: "launiupoko" },
//     { id: 3, name: "thousand peaks" },
// ];

// const app = express();
// app.use(express.json());

// const swaggerOptions = {
//     swaggerDefinition: {
//         info: {
//             title: "Surf Breaks API",
//             version: "1.0.0"
//         }
//     },
//     apis: ["app.js"]
// };

// /**
//  * @swagger
//  * /breaks:
//  *  get:
//  *      summary: get all breaks
//  *      produces:
//  *          application/json
//  *      responses:
//  *          200:
//  *              description: success
//  *              schema:
//  *                  $ref: "#/definitions/break"
//  * definitions:
//  *  break:
//  *      properties:
//  *          id:
//  *              type: integer
//  *          name:
//  *              type: string
//  */

// const swaggerDocs = swaggerJsDoc(swaggerOptions);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// app.get("/breaks", (req, res) => {
//     res.send(breaks);
// });

// /**
//  * @swagger
//  * /break:
//  *  post:
//  *      summary: add a break
//  *      requestBody:
//  *          $ref: '#/components/requestBodies/BreakBody'
//  *      required:
//  *          - id:
//  *          - name:
//  *      responses:
//  *          201:
//  *              description: created break
//  * definitions:
//  *  break:
//  *      properties:
//  *          id:
//  *              type: integer
//  *          name:
//  *              type: string
//  * components:
//  *  requestBodies:
//  *      BreakBody:
//  *          description: A JSON object of break information
//  *          required: true
//  *          content:
//  *              application/json:
//  *              schema:
//  *                  $ref: '#/definitions/break'
//  */
// app.post("/break", (req, res) => {
//     res.send(`${req.body.name} created`);
// });

// /**
//  * @swagger
//  * /breaks/{id}:
//  *   delete:
//  *    tags:
//  *      - break
//  *    summary: Delete a break by ID
//  *    parameters:
//  *      - name: id
//  *        in: path
//  *        description: ID of break to delete
//  *        required: true
//  *        type: integer
//  *    responses:
//  *        204:
//  *            description: Break deleted
//  */
// app.delete("/breaks/:id", (req, res) => {
//     const breakId = parseInt(req.params.id);
//     const deletedBreak = breaks.find((item) => item.id === breakId);

//     if (!deletedBreak) {
//         res.status(404).send("Break not found");
//     } else {
//         breaks = breaks.filter((item) => item.id !== breakId);
//         res.status(204).send();
//     }
// });

// app.listen(4000, () => console.log('Listening on 4000'));
