window.app = (function() {
    var authState = 0;

    function signIn(credentials, success, error) {
        var randomNumber= Math.floor(Math.random()*11);
        
        if(arguments.length != 3) {
            alert('Hint: signIn expects 3 arguments: credentials object, success callback, error callback');
            return;
        }
        
        if(randomNumber < 5) {
            authState = 1;
            success.call(success, "Welcome back faithful user!");
        }
        else {
            error.call(error, "Sorry! An error has occurred, please try again.");
        }
    };
    
    function signOut(callback) {
    
        if(arguments.length != 1) {
            alert('Hint: signOut expects 1 argument: complete callback');
            return;
        }
        
        authState = 0;
        callback.call(callback, "You've been sign out, see you next time!");
    };
    
    function isSignedIn() {
        return authState == 1;
    };
    
    return {
        signIn : signIn,
        signOut : signOut,
        isSignedIn : isSignedIn
    };
})();