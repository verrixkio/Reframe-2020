console.log("testing");

$(document).ready(function () {
    $('.submit').click(function (event) { 
        var email = $('.email').val()
        var name = $('.name1').val()
        var message = $('.message').val()
        var statusElm =$('.status')
        statusElm.empty()
        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email is not valid</div>')
        }
    
        if(name.length >= 2) {
            statusElm.append('<div>Name is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Name is not valid</div>')
        }
    
        if(message.length > 10) {
            statusElm.append('<div>Message is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Message is not valid</div>')
        }
    })

    window.addEventListener('scroll', function(e) {
        if (window.scrollY >= 80 && window.scrollY <= 200 ) {
            $(".desktop .logo").removeClass("hidden");
        }
        if (window.scrollY <= 80) {
            $(".desktop .logo").addClass("hidden");
        }
        
      });

})