var videos = [];
$.getJSON('http://gdata.youtube.com/feeds/api/users/DrawMeWhy/uploads?v=2&alt=json', function(data) {
    console.log(data.feed.entry);
    for(var i=0; i<data.feed.entry.length; i++) {
       var vid_temp = {};
       vid_temp.link = data.feed.entry[i].content.src;
       vid_temp.title = data.feed.entry[i].title.$t;
       vid_temp.description = data.feed.entry[i].media$group.media$description.$t;
       vid_temp.thumbnail = data.feed.entry[i].media$group.media$thumbnail[1].url;
       videos.push(vid_temp);
    }
    });
$(document).ready(function(){
    var video_list = "";
    for (var i=0;i<videos.length;i++) {
        video_list += "<div class=\"thumbnail\"> <img  src=\"" + videos[i].thumbnail + "\"/></div>";
    }
    video_list += "";
    $("#video_list").append(video_list);
    
     $("#testHand").hover(
    $(this).toggleClass("active")
      .next().stop(true, true).slideToggle();
    }
    );
 
/*$(document).on('drag', '.thumbnail', function() {
        $(this).remove();
    });*/
/*$(function(){
    $(".thumbnail").draggable();
    });*/

/*$(function(){
    $("#video_list").sortable();
    });
$("#testHand").hover(function(){$(this).fadeOut(100);$(this).fadeIn(500);});*/
/*http://gdata.youtube.com/feeds/api/users/DrawMeWhy/uploads?&alt=json*/