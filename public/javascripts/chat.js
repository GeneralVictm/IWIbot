var exports = module.exports = {};
var lastScrollPosition;

exports.appendSendMessage = function appendSendMessage(msg) {


    var msgSend = '<div class="row msg "><div class="col-lg-5">'
        + '</div><div class="col-lg-4"><div class="msg-send">'
        + msg + '</div></div><div class="col-lg-3"></div></div>';
    $(msgSend).appendTo("#chat div.container").hide().fadeIn();
    window.scrollTo(0, document.body.scrollHeight);

};

exports.appendReceivedMessage = function appendReceivedMessage(msg) {

    var msgReceived = '<div class="row msg "><div class="col-lg-3">'
        + '</div><div class="col-lg-4"><div class="msg-recived">'
        + msg + '</div></div><div class="col-lg-5"></div></div>';

    $(msgReceived).appendTo("#chat div.container").hide().fadeIn();

    window.scrollTo(0, document.body.scrollHeight);
};

exports.chatSubmit = function chatSubmit() {

    var $messageField = $('#messageField');
    var value = $messageField.val().toString();
    exports.appendSendMessage(value);
    window.scrollTo(0, document.body.scrollHeight);
    return value;
};
exports.chatToggle = function chatToggle() {

    var $notification = $(".notification");
    var $toggleIcon = $("i.toggleIcon");
    var $voiceChatToggle = $(".voice , .history");
    var $chatForm = $('#chatForm');

    $notification.hide().text();
    $toggleIcon.toggleClass(".fa fa-microphone");

    if($('.history').css('display') === 'block') {
        exports.setLastScrollPosition(window.scrollY);
    }

    var options = {};
    var tmpPosition = 0;
    /*options.duration = 200;*/
    options.start = function () {

    };
    options.complete = function () {
        console.log('got invoked: ' + exports.getLastScrollPosition());
        $(window).scrollTop(exports.getLastScrollPosition());
    };
    $voiceChatToggle.toggle(options);
    $chatForm.toggle();

};
exports.getLastScrollPosition = function getLastScrollPosition() {

    return lastScrollPosition;


};
exports.setLastScrollPosition = function setLastScrollPosition(value) {

     lastScrollPosition = value;
     console.log(lastScrollPosition);
 };


