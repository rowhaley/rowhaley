      function showDiv(text, image, iW, iH) {

          var div = document.createElement('div');

	  var start = new Date().getTime();

          window.addEventListener('click', function(event) {
	      if ((new Date().getTime() - start) > 500) {
		  div.style.visibility = "hidden";
	      }
         }, false);

          window.addEventListener('resize', function(event) {
              if (div.style.visibility == "visible") {
		  drawDiv(div, text, image, iW, iH);
              }
          }, false);

          drawDiv(div, text, image, iW, iH);

          document.body.appendChild(div);

      }


      function drawDiv(div, text, image, iW, iH) {

	  var iAspectRatio;
	  var wAspectRatio;
	  var width;

	  iAspectRatio = iW / iH;
	  wAspectRatio = window.innerWidth / (window.innerHeight - 50);

	  if (iAspectRatio > wAspectRatio) {
	      width = 0.98 * window.innerWidth;
	  } else {
	      width = 0.98 * (window.innerHeight - 50) * iAspectRatio;
	  }

          div.style.left = "1%";
          div.style.top = "1%";
          div.style.width = width + "px";
          div.style.height = "100%";
          div.style.position = "fixed";
          div.style.visibility = "visible";
          div.style.background = "transparent";
          div.style.opacity = "1.00";
          div.style.color = "black";
	  
          div.innerHTML = "<center><img src= '" + image + "'; width='" + width + "px';><div> <hw style = 'text-shadow: 2px 2px 2px white, -2px -2px 2px white;'><font size=+2>" + text + "</font></div></center>";
      }

      function showDivTxt(text) {

          var div = document.createElement('div');

	  var start = new Date().getTime();

          window.addEventListener('click', function(event) {
	      if ((new Date().getTime() - start) > 500) {
		  div.style.display = "none";
	      }
          }, false);

          window.addEventListener('resize', function(event) {
              if (div.style.display == "block") {
		  drawDivTxt(div, text);
              }
          }, false);

          drawDivTxt(div, text);

          document.body.appendChild(div);

      }
      
      function drawDivTxt(div, text) {
	  div.innerHTML =
	      "<div style='background-color: rgba(150, 150, 150, 0.5); overflow: hidden; position: fixed; left: 0px; top: 0px; bottom: 0px; right: 0px; z-index: 1000; display:block;'>" + 
  	      "<div style='background-color: rgb(255, 255, 255); width: 80%; height:90%; position: static; margin: 20px auto; padding: 10px 10px 10px; overflow: hidden; z-index: 1001; box-shadow: 0px 3px 8px rgba(34, 25, 25, 0.4);'>" +
              "<iframe src='" + text + "'; width=99%; height=90%'></iframe></div> </div>";
      }

      function showDivAudio(text, image, audio, iW, iH) {

          var div = document.createElement('div');

	  var start = new Date().getTime();
	  
          window.addEventListener('click', function(event) {
	      if ((new Date().getTime() - start) > 500) {
		  div.style.visibility = "hidden";
	      }
          }, false);

          window.addEventListener('resize', function(event) {
              if (div.style.visibility == "visible") {
		  drawDivAudio(div, text, image, audio, iW, iH);
              }
          }, false);

          drawDivAudio(div, text, image, audio, iW, iH);

          document.body.appendChild(div);

      }

      function drawDivAudio(div, text, image, audio, iW, iH) {

	  var iAspectRatio;
	  var wAspectRatio;
	  var width;

          iAspectRatio = iW / iH;

	  wAspectRatio = window.innerWidth / (window.innerHeight - 90);

	  if (iAspectRatio > wAspectRatio) {
	      width = 0.98 * window.innerWidth;
	  } else {
	      width = 0.98 * (window.innerHeight - 90) * iAspectRatio;
	  }

	  div.style.left = "1%";
          div.style.top = "1%";
          div.style.width = width + "px";
          div.style.height = "100%";
          div.style.position = "fixed";
          div.style.visibility = "visible";
          div.style.background = "transparent";
          div.style.opacity = "1.00";
          div.style.color = "black";
          div.innerHTML = "<center><img src= '" + image + "'; width='" + width + "px';><div><font size=+2><audio controls controlsList='nodownload'><source src= '" + audio + "' type= 'audio/mpeg'>Error</audio>&nbsp&nbsp" + text + "</font></div></center>";
      }

      function showDivVideo(text, video) {

          var div = document.createElement('div');

	  var start = new Date().getTime();

          window.addEventListener('click', function(event) {
	      if ((new Date().getTime() - start) > 500) {
		  div.style.visibility = "hidden";
	      }
          }, false);

          window.addEventListener('resize', function(event) {
              if (div.style.visibility == "visible") {
		  drawDivVideo(div, text, video);
              }
          }, false);

          drawDivVideo(div, text, video);

          document.body.appendChild(div);

      }


      function drawDivVideo(div, text, video) {
	  div.style.width = window.innerWidth + 'px';
	  div.innerHTML=
	      "<div class='container-video'; width='80%'; margin='0'; 'auto';>" +
	      "<div class='responsive-video';  overflow='hidden'; padding-bottom='56.25%'; position='relative'; height='0';>" +
	      "<iframe  src='" + video + "'; left='0'; top='50'; height='100%'; width='100%'; possition='absolute';" +
	      "frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'; 'allowfullscreen'>" +
	      "</iframe></div>" +
	      "<hw style = 'text-shadow: 2px 2px 2px white, -2px -2px 2px white;'><font size=+2><center>" + text + "</center></font></div>"
      }

      function showGeneric(item) {
    	  if (item.video) {
	      showDivVideo(item.text, item.video);
	  }
	  else if (item.audio) {
	      showDivAudio(item.text, item.image, item.audio, item.iW, item.iH);
	  }
	  else if (item.txt) {
	      showDivTxt(item.txt);
	  }
	  else {
	      showDiv(item.text, item.image, item.iW, item.iH);
	  }
      }

