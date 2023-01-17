// TODO:SIGNUP

/**
 * @openapi
 * '/api/v1/signup':
 *  post:
 *     tags:
 *     - User
 *     summary: Register a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateUser'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUser:
 *      type: object
 *      required:
 *        - firstName
 *        - lastName
 *        - age
 *        - email
 *        - password
 *        - gender
 *        - genre
 *      properties:
 *        firstName:
 *          type: string
 *          default: Jane
 *        lastName:
 *          type: string
 *          default: Doe
 *        age:
 *          type: number
 *          default: 22
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        password:
 *          type: string
 *          default: stringPassword123
 *        passwordConfirmation:
 *          type: string
 *          default: stringPassword123
 *        gender:
 *          type: string
 *          default: 63899b2ef3d2a32326400c2b
 *        genre:
 *          type: [string]
 *          default: ["63899b2ef3d2a32326400c2b"]
 *    CreateUserResponse:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *        name:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */

// TODO:SIGNIN

/**
 * @openapi
 * '/api/v1/signin':
 *  post:
 *     tags:
 *     - User
 *     summary: Sign in user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/SignInUser'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SignInUserResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */

/**
 * @openapi
 * components:
 *  schemas:
 *    SignInUser:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        password:
 *          type: string
 *          default: stringPassword123
 *    SignInUserResponse:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *        name:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */

// TODO:ForgotPassword

/**
 * @openapi
 * '/api/v1/forgot-password':
 *  post:
 *     tags:
 *     - User
 *     summary: forgot password
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/forgotPassword'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/forgotPasswordResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */

/**
 * @openapi
 * components:
 *  schemas:
 *    forgotPassword:
 *      type: object
 *      required:
 *        - email
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *    forgotPasswordResponse:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 */
