Promises Project

## Resources
Read or watch:
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://developers.google.com/web/fundamentals/primers/promises)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

## Learning Objectives
By the end of this project, you should be able to explain the following concepts without the help of Google:
- Promises (how, why, and what)
- How to use the `then`, `resolve`, `catch` methods
- How to use every method of the Promise object
- Throw / Try
- The `await` operator
- How to use an `async` function

## Requirements
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension
- Your code will be tested using `Jest` and the command `npm run test`
- Your code will be verified against lint using `ESLint`
- All of your functions must be exported

## Setup
### Install NodeJS 12.11.x
In your home directory, run the following commands:
```sh
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```
Verify installation:
```sh
nodejs -v
# v12.11.1
npm -v
# 6.11.3
```

### Install Jest, Babel, and ESLint
In your project directory, install Jest, Babel, and ESLint using the supplied `package.json`:
```sh
npm install
```

### Configuration Files
Add the following files to your project directory:

#### `package.json`
```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

#### `babel.config.js`
```javascript
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

#### `.eslintrc.js`
```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'import/extensions': 'off',
  },
};
```

#### `utils.js`
```javascript
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}

export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
```

## Tasks

### 0. Keep every promise you make and only make promises you can keep
- **File:** `0-promise.js`
- **Prototype:** `function getResponseFromAPI()`

```javascript
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve();
  });
}

export default getResponseFromAPI;
```

### 1. Don't make a promise...if you know you can't keep it
- **File:** `1-promise.js`
- **Prototype:** `function getFullResponseFromAPI(success)`

```javascript
function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error

('The fake API is not working currently'));
    }
  });
}

export default getFullResponseFromAPI;
```

### 2. Catch me if you can!
- **File:** `2-then.js`
- **Prototype:** `function handleResponseFromAPI(promise)`

```javascript
function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}

export default handleResponseFromAPI;
```

### 3. Handle multiple successful promises
- **File:** `3-all.js`
- **Prototype:** `function handleProfileSignup()`

```javascript
import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const [photo, user] = values;
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
```

### 4. Simple promise
- **File:** `4-user-promise.js`
- **Prototype:** `function signUpUser(firstName, lastName)`

```javascript
function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}

export default signUpUser;
```

### 5. Reject the promises
- **File:** `5-photo-reject.js`
- **Prototype:** `function uploadPhoto(fileName)`

```javascript
function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}

export default uploadPhoto;
```

### 6. Handle multiple promises
- **File:** `6-final-user.js`
- **Prototype:** `function handleProfileSignup(firstName, lastName, fileName)`

```javascript
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);

  return Promise.allSettled([signUp, upload]).then((results) =>
    results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    }))
  );
}

export default handleProfileSignup;
```

### 7. Load balancer
- **File:** `7-load_balancer.js`
- **Prototype:** `function loadBalancer(chinaDownload, USDownload)`

```javascript
function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}

export default loadBalancer;
```

### 8. Throw error / try catch
- **File:** `8-try.js`
- **Prototype:** `function divideFunction(numerator, denominator)`

```javascript
function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}

export default divideFunction;
```

### 9. Throw an error
- **File:** `9-try.js`
- **Prototype:** `function guardrail(mathFunction)`

```javascript
function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}

export default guardrail;
```

### 10. Await / Async
- **File:** `100-await.js`
- **Prototype:** `async function asyncUploadUser()`

```javascript
import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return {
      photo,
      user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
```

## Response Data Format
- `uploadPhoto` returns a response with the format:
  ```json
  {
    "status": 200,
    "body": "photo-profile-1"
  }
  ```

- `createUser` returns a response with the format:
  ```json
  {
    "firstName": "Guillaume",
    "lastName": "Salva"
  }
  ```

## Example Usage

### 0-main.js
```javascript
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);
```

### 1-main.js
```javascript
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));
```

### 2-main.js
```javascript
import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);
```

### 3-main.js
```javascript
import handleProfileSignup from "./3-all";

handleProfileSignup();
```

### 4-main.js
```javascript
import signUpUser from "./4-user-promise";

console.log(signUpUser("Bob", "Dylan"));
```

### 5-main.js
```javascript
import uploadPhoto from './5-photo-reject';

console.log(uploadPhoto('guillaume.jpg'));
```

### 6-main.js
```javascript
import handleProfileSignup from './6-final-user';

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
```

### 7-main.js
```javascript
import loadBalancer from "./7-load_balancer";

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUK = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, ukSuccess);
});

const promiseUKSlow = new Promise(function(resolve, reject) {
    setTimeout(resolve, 400, ukSuccess);
});

const promiseFR = new Promise(function(resolve, reject) {
    setTimeout(resolve, 200, frSuccess);
});

const test = async () => {
    console.log(await loadBalancer(promiseUK, promiseFR));
    console.log(await loadBalancer(promiseUKSlow, promiseFR));
}

test();
```

### 8-main.js
```javascript
import divideFunction from './8-try';

console.log(divideFunction(10, 2));
console.log(divideFunction(10, 0));
```

### 9-main.js
```javascript
import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));
```

### 100-main.js
```javascript
import asyncUploadUser from "./100-await";

const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();
```

## Repository
- **GitHub repository:** `alx-backend-javascript`
- **Directory:** `0x01-ES6_promise`
