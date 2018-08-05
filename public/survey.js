var questions = [
    'How much do you like the outdoors?',
    'How much do you like walks?',
    'How much do you like food?',
    'How much do you like to play games?',
    'How much do you like thunderstorms?',
    'How much do you like the snow?',
    'How much do you like meeting new people?',
    'how much do you like to sleep?',
    'How much do you like to swim?',
    'How much do you like to sleep in?'
]

questions.forEach((question, index) => {
    var radio = ''
    for(var i = 1; i < 6; i++){
        radio += `<input type="radio" name="question${index+1}" value="${i}" ${ i == 1 ? 'checked' : ''}> ${i}`
    }

    $('form').append(`<div id="question${index + 1}"><h3>${question}</h3>${radio}</div>`)
})

$('form').append('<input type="submit" value="Submit">')

$('form').submit(function(e) {
    e.preventDefault()
    console.log($(this).serializeArray())

    var data = $(this).serializeArray();

    $.ajax({
        type: "POST",
        url: "http://localhost:3000/api/friends",
        data: {},
        success: function(){
            console.log('submitted')
        },
        dataType: "json",
        contentType : "application/json"
      });
})