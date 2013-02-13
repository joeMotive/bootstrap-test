Bootstrap Test Project
==============

Hi-Tec Industries has asked you to complete a few features on their current product homepage.

## Project Requirements

### Working Sign In Form
Please hook up their current sign in form using their app.signIn API. When a user submits the form in the top right, a successful submission should swap the form for a "Sign Out" link. Authenticated state doesn't need to persist if the page is refreshed.

### Contextual menu bar.
The "Dropdown" menu item on the top bar should only be visible for users that are signed in.

### Authentication Results
Unfortunately, their auth service is only reliable ~50% of the time. Please use [Bootstrap Alerts](http://twitter.github.com/bootstrap/components.html#alerts) to give the customer the correct feedback. A successful submission should display the result message in a success alert. A failed submission should display the result message in a error alert. The placement of the alert is up to you.

### Working Sign Out Link
The "Sign Out" link should trigger the app.signOut API. When a user signs out, the message should be displayed using [Bootstrap Alerts](http://twitter.github.com/bootstrap/components.html#alerts) information alert.

## Project status and documentation

They've got a completed page (the included index.html) built using [Twitter Bootstrap](http://twitter.github.com/bootstrap/) and [jQuery](http://jquery.com/), as well as a javascript client to interact with their API. You should use these pieces to complete the requirements.

The app object is already accessible on the window. The javascript APIs provided are as follows:

### app.signIn(credentials, success, error)
```javascript
/**
 * @method signIn
 * @param {Object} credentials
 *   @param {String} username
 *   @param {String} password
 * @param {Function} success Called on success and passed one string argument which is a success message.
 * @param {Function} error Called on error and passed one string argument which is a error message.
 */
```

### app.signOut(complete)
```javascript
/**
 * @method signOut
 * @param {Function} complete Called on completion and passed one string argument which is a informational message.
 */
```

### app.isSignedIn()
```javascript
/**
 * @method isSignedIn
 * @return {Boolean} True is signed in, false otherwise.
 */
```
