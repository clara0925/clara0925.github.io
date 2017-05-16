/** Created by Clara on 2017/5/14.
 * github pages 使用的http协议，第三方API被屏蔽，ajax代码如下，但是pages上的效果使用数组做出来的*/



 var quotes = [  "If you wait for the perfect moment when all is safe and assured, it may never arrive. " +
                "Mountains will not be climbed, races won, or lasting happiness achieved.   by Maurice Chevalier, Actor",
                    "Change your life today. Don’t gamble on the future, act now, without delay.   by Simone de Beauvoir, Writer",
                "Be happy for this moment. This moment is your life.   by Omar Khayyam, Polymath",
                "It’s in the nature of the human being to face challenges. … We’re required to do these things just as salmon swim upstream. " +
                "  by Neil Armstrong, Astronaut",
                "No matter how hard the past is, you can always begin again.   by Jack Kornfield, Writer",
                "A difficult time can be more readily endured if we retain the conviction that our existence " +
                "holds a purpose – a cause to pursue, a person to love, a goal to achieve.   by John C. Maxwell, Leadership Author",
                "We must not allow the clock and the calendar to blind us to the fact that each moment is a miracle and a mystery.   by H.G. Wells, Science Fiction Writer",
                "Realize what you really want. It stops you from chasing butterflies and puts you to work digging gold.   by William Moulton Marston, Psychologist",
                "The shortest distance between two people is a smile.   by Victor Borge, Comedian",
                "The beautiful thing about learning is nobody can take it away from you.   by B.B. King, Musician"];

var randomNumber = Math.floor(Math.random() * quotes.length);
document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}

// $(document).ready(function () {
//
//     function newQuote(){
//         $.ajax({
//             type: "GET",
//             url: "http://api.forismatic.com/api/1.0/",
//             dataType: "jsonp",
//             jsonp: "jsonp",
//             data: {
//                 method: "getQuote",
//                 lang: "en",
//                 format: "jsonp"
//             },
//             success: function (response) {
//                 if(response.quoteAuthor){
//                     $("#quoteDisplay").html("“" + response.quoteText + "”" + "by " + response.quoteAuthor);
//                 }
//                 else {
//                     $("#quoteDisplay").html("“" + response.quoteText + "”" + "by Unknown" );
//                 }
//             }
//         })
//     }
//     newQuote();
//
//     $("#getQuote").on("click",function (event) {
//         event.preventDefault();
//         newQuote();
//     })
// });



