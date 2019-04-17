# Use My Tech Stuff

###### Back-End

###Jamie Goodnight, Back-End Developer

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
| PUT    | `api/tech/:id`        | Successful Login, Data          | Used to edit the logged in user's tech.                                 |
| DELETE | `api/tech/:id/`       | Successful Login                | Used to delete the logged in user's tech.                               |

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

### Get Users

Method used: **[GET]** `/api/users/`

On Success: Returns an array of users.

---

### Get Specific User

Method used: **[GET]** `/api/users/:id/`

On Success: Returns a specific user.

---

---

### Get List of all Tech

Method used: **[GET]** `/api/tech/`

On Success: Returns an array of all tech in database.

Parameters:

| Name          | Type       | Required | Notes                             |
| ------------- | ---------- | -------- | --------------------------------- |
| Authorization | **Header** | yes      | Acquired from a successful login. |

---

---

### Get List of all Tabs saved by a specific user.

Method used: **[GET]** `/api/tech/:id/`

On Success: Returns a specific piece of tech in the database.

Parameters:

| Name          | Type       | Required | Notes                             |
| ------------- | ---------- | -------- | --------------------------------- |
| Authorization | **Header** | yes      | Acquired from a successful login. |

---

### Post Tec

Method used: **[POST]** `/api/tabs/`

On Success: Adds a new tab to the database.

Parameters:

| Name              | Type       | Required | Notes                                         |
| ----------------- | ---------- | -------- | --------------------------------------------- |
| Authorization     | **Header** | yes      | Acquired from a successful login.             |
| title             | string     | yes      | The name of the website being saved.          |
| website           | string     | yes      | The address of the website being saved.       |
| category          | string     | no       | The category the website will be saved under. |
| favicon           | string     | no       | The image url of a favicon from the website.  |
| date              | integer    | no       | The date the website was saved to tabless.    |
| short_description | string     | no       | A short description of the website.           |
| long_description  | string     | no       | A long description of the website.            |

---

### Update Tabs

Method used: **[PUT]** `api/tabs/:id/`

On Success: Returns updated array.

Parameters:

| Name              | Type       | Required | Notes                                         |
| ----------------- | ---------- | -------- | --------------------------------------------- |
| Authorization     | **Header** | yes      | Acquired from a successful login.             |
| title             | string     | yes      | The name of the website being saved.          |
| website           | string     | yes      | The address of the website being saved.       |
| category          | string     | no       | The category the website will be saved under. |
| favicon           | string     | no       | The image url of a favicon from the website.  |
| date              | integer    | no       | The date the website was saved to tabless.    |
| short_description | string     | no       | A short description of the website.           |
| long_description  | string     | no       | A long description of the website.            |

---

### Delete Tab

Method used: **[DELETE]** `//api/tabs/:id`

On Success: Deletes tab from database.

Parameters:

| Name          | Type       | Required | Notes                             |
| ------------- | ---------- | -------- | --------------------------------- |
| Authorization | **Header** | yes      | Acquired from a successful login. |
