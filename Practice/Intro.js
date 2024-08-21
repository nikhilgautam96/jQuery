/**
 * 
    1. jQuery is a JavaScript Library, that greatly simplifies JavaScript programming.
    2. jQuery is a lightweight, "write less, do more", JavaScript library, the purpose of jQuery 
        is to make it much easier to use JavaScript on your website.

    3. jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, 
        and wraps them into methods that you can call with a single line of code.

    4. jQuery also simplifies a lot of the complicated things from JavaScript, 
        like AJAX calls and DOM manipulation.

    5. The jQuery library contains the following features:
        1. HTML/DOM manipulation
        2. CSS manipulation
        3. HTML event methods
        4. Effects and animations
        5. AJAX
        6. Utilities

    6. SYNTAX:
        - $(selector).action()
 */
/**
   $(document).ready(function() {
        // deprecated
        // it makes sure that the document is loaded before running any 
            jQuery action/function on the document.
    })
*/

$(function () {
    $('button').on('click', function () {
        let hide = false;
        $('p').toggle('slow');
    });
});
