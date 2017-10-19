$(document).ready(function(){

  $(".TOPLIST").click(function(){
        $(".carousel").toggle(10000);
    });

$.getJSON("https://api.airtable.com/v0/appwd6yCHy68SJWZz/musics?api_key=keyhZGarU6yaFz3CW",
            function(data) {
            console.log(data);
            $.each(data.records, function(key,val) {
              console.log(val.fields.title);
              $('<li>'+val.fields.title+'</li>').appendTo('#TOPLIST');
              $("<iframe src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe>").appendTo('#TOPLIST');

            });

          }
        );

});
