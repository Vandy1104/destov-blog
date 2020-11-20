console.log('JS working');

$( document ).ready(function() {
  // $('h1').click(function(){
  //   $('h1').css('background-color','red');
  // })
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }


  var blog = [
    {
        id          : 0,
        photo       : "assets/blog-image1.webp",
        date        : '7 Dec 2020',
        title       : "First Post",
        description : "This is a great middle weight sports tourer with a full fairing, high windshield and touring oriented ergonomics with raised handlebars. Comfortable seating postion which is adjustable 3 ways, a punchy motor along with excellent handling and ABS make for a motorcycle that you just want to keep on riding."
    },
    {
        id          : 1,
        photo       : "assets/blog-image2.png",
        date        : '7 Sep 2020',
        title       : "Second Post",
        description : "This is a great middle weight sports tourer with a full fairing, high windshield and touring oriented ergonomics with raised handlebars. Comfortable seating postion which is adjustable 3 ways, a punchy motor along with excellent handling and ABS make for a motorcycle that you just want to keep on riding."
    },
    {
        id          : 2,
        photo       : "assets/blog-image3.jpg",
        date        : '17 June 2020',
        title       : "Third Post",
        description : "This is a great middle weight sports tourer with a full fairing, high windshield and touring oriented ergonomics with raised handlebars. Comfortable seating postion which is adjustable 3 ways, a punchy motor along with excellent handling and ABS make for a motorcycle that you just want to keep on riding."
    },
    {
        id          : 3,
        photo       : "assets/blog-image3.jpg",
        date        : '17 June 2020',
        title       : "Fourth Post",
        description : "This is a great middle weight sports tourer with a full fairing, high windshield and touring oriented ergonomics with raised handlebars. Comfortable seating postion which is adjustable 3 ways, a punchy motor along with excellent handling and ABS make for a motorcycle that you just want to keep on riding."
    },
    {
        id          : 4,
        photo       : "assets/blog-image3.jpg",
        date        : '17 June 2020',
        title       : "Fifth Post",
        description : "This is a great middle weight sports tourer with a full fairing, high windshield and touring oriented ergonomics with raised handlebars. Comfortable seating postion which is adjustable 3 ways, a punchy motor along with excellent handling and ABS make for a motorcycle that you just want to keep on riding."
    },
    {
        id          : 5,
        photo       : "assets/blog-image3.jpg",
        date        : '17 June 2020',
        title       : "Sixth Post",
        description : "This is a great middle weight sports tourer with a full fairing, high windshield and touring oriented ergonomics with raised handlebars. Comfortable seating postion which is adjustable 3 ways, a punchy motor along with excellent handling and ABS make for a motorcycle that you just want to keep on riding."
    }

];



//Function to display all blogs.
function allBlogs(){
  document.getElementById('show').innerHTML = " "; //to clear the container
  for(var i = 0; i < blog.length; i++) {
  document.getElementById('show').innerHTML
  += '<div class="container col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4">'
  +  '<div class="card mb-5 col-xs-12 col-sm-12">'
  +  '<img src="' + blog[i].photo + ' " class="card-img-top" alt="blog-image"/>'
  +  '<div class="card-body">'
  +  '<h6>' + blog[i].date + '</h6>'
  +  '<div class="my-1">'
  +  '<img src="assets/fb.svg" alt="" width="auto" height="20">'
  +  '<img class="pl-2" src="assets/instagram.svg" alt="" width="auto" height="20">'
  +  '<img class="pl-2" src="assets/whatsapp.svg" alt="" width="auto" height="20">'
  +  '</div>'
  +  '<h6 class="card-title mt-3">' + blog[i].title + '</h6>'
  +  '<p class="card-text">' + blog[i].description + '</p>'
  +  '</div>'
  +  '</div>'
  +  '</div>'
  }
};

allBlogs();


});   //document ready
