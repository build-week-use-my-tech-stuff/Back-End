# Use My Tech Stuff
https://usemytechstuff.herokuapp.com/
###### Back-End

![Tech Xchange](https://i.imgur.com/q4wJuO0.png) 

# Jamie Goodnight

###### Back-End Developer

### Prerequisites (for local use)

- run `yarn` in order to install all dependencies
- use the command `yarn server` to run a live server!

## Endpoints

| Method | Endpoint              | Requires                        | Description                                                             |
| ------ | --------------------- | ------------------------------- | ----------------------------------------------------------------------- |
| POST   | `/api/auth/register/` | `username`, `password`, `email` | Used for adding a new user to database.                                 |
| POST   | `/api/auth/login/`    | `username`, `password`          | Used to log a user in. Returns a token and the user's name in its body. |
| GET    | `/api/users`          | Successful Login                | Used to show all users in the database.                                 |
| GET    | `/api/users/:id/`     | Successful Login                | Used to show a specific user in the database.                           |
| GET    | `/api/tech`           | Successful Login                | Used to show tech in the database.                                      |
| GET    | `/api/tech/:id/`      | Successful Login                | Used to show a specific piece of tech in the database.                  |
| POST   | `/api/tech/`          | Successful Login, Data          | Used to post a new piece of tech to the database.                       |
| PUT    | `/api/tech/:id`       | Successful Login, Data          | Used to edit the logged in user's tech.                                 |
| POST   | `/api/tech/:id`       | Successful Login, Data          | Used to post a comment on the specific piece of tech.                   |
| DELETE | `/api/tech/:id/`      | Successful Login                | Used to delete the logged in user's tech.                               |

---

### User Registration

Method used: **[POST]** `/api/auth/register/`

On Success: Returns the the new user.

Parameters:

| Name     | Type   | Required | Notes                                  |
| -------- | ------ | -------- | -------------------------------------- |
| username | string | yes      | Must be unique.                        |
| password | string | yes      | Can be up to 128 characters in length. |
| email    | string | yes      | The email the user wishes to use.      |

Example of what to use:

```
{
    username: "Lambda",
    password: "testpassword",
    email: "lambda@lambda.com"
}
```

---

### User Login

Method used: **[POST]** `/api/auth/login/`

On Success:
Returns a token to be used to authenticate the user, the user id, and the username.

Parameters:

| Name     | Type   | Required |
| -------- | ------ | -------- |
| username | string | yes      |
| password | string | yes      |

Example of what to use:

```
{
    username: "Lambda",
    password: "testpassword"
}
```

---

### Get List of all Tech

Method used: **[GET]** `/api/tech/`

On Success: Returns an array of all tech in database.

Parameters:

| Name          | Type       | Required | Notes                             |
| ------------- | ---------- | -------- | --------------------------------- |
| Authorization | **Header** | yes      | Acquired from a successful login. |

---

### Get a specific piece of Tech.

Method used: **[GET]** `/api/tech/:id/`

On Success: Returns a specific piece of tech in the database.

Parameters:

| Name          | Type       | Required | Notes                             |
| ------------- | ---------- | -------- | --------------------------------- |
| Authorization | **Header** | yes      | Acquired from a successful login. |

---

### Post Tech

Method used: **[POST]** `/api/tech/`

On Success: Adds a new tab to the database.

Parameters:

| Name          | Type       | Required | Notes                                                    |
| ------------- | ---------- | -------- | -------------------------------------------------------- |
| Authorization | **Header** | yes      | Acquired from a successful login.                        |
| name          | string     | yes      | The name of the website being saved.                     |
| user_id       | string     | yes      | The address of the tech being saved.                     |
| category      | text       | yes      | The category the tech will be saved under.               |
| picture       | string     | yes      | The image url to display the tech being saved.           |
| cost          | string     | yes      | The cost of the tech being saved.                        |
| availability  | string     | yes      | Whether or not the tech being saved is available to rent |
| description   | text       | yes      | A description of the tech being saved.                   |

---

### Update Tech

Method used: **[PUT]** `api/tech/:id/`

On Success: Returns updated array.

Parameters:

| Name          | Type       | Required | Notes                                                    |
| ------------- | ---------- | -------- | -------------------------------------------------------- |
| Authorization | **Header** | yes      | Acquired from a successful login.                        |
| name          | string     | no       | The name of the website being saved.                     |
| category      | text       | no       | The category the tech will be saved under.               |
| picture       | string     | no       | The image url to display the tech being saved.           |
| cost          | string     | no       | The cost of the tech being saved.                        |
| availability  | string     | no       | Whether or not the tech being saved is available to rent |
| description   | text       | no       | A description of the tech being saved.                   |

---

### Post Comment

Method used: **[POST]** `api/tech/:id/`

On Success: Returns updated array.

Parameters:

| Name          | Type       | Required | Notes                                        |
| ------------- | ---------- | -------- | -------------------------------------------- |
| Authorization | **Header** | yes      | Acquired from a successful login.            |
| content       | string     | yes      | The content of the post being saved.         |
| user_id       | text       | yes      | The id of the user making the comment.       |
| tech_id       | string     | yes      | The id of the tech the comment is made on.   |
| Date          | string     | no       | The date the comment being saved was posted. |

---

### Delete Tech

Method used: **[DELETE]** `/api/tech/:id`

On Success: Deletes the tech from the database.

Parameters:

| Name          | Type       | Required | Notes                             |
| ------------- | ---------- | -------- | --------------------------------- |
| Authorization | **Header** | yes      | Acquired from a successful login. |

---

### Get Users

Method used: **[GET]** `/api/users/`

On Success: Returns an array of users.

---

### Get Specific User

Method used: **[GET]** `/api/users/:id/`

On Success: Returns a specific user.

---

```

```
