var  ajaxRequest;
var displayHtml = document.getElementById('displayHotel');
var colorVAlue = 0;
		function loadXMLDoc(url,functionCall)
		{
			var xmlhttp;
			if (window.XMLHttpRequest)
  					{// code for IE7+, Firefox, Chrome, Opera, Safari
  					 xmlhttp=new XMLHttpRequest();
  					}
					else
  						{// code for IE6, IE5
 							 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  						}
							xmlhttp.onreadystatechange=function()
  									{
  										if (xmlhttp.readyState==4 && xmlhttp.status==200)
    										{
    											functionCall(xmlhttp.responseText);
    										}
  									}
  										
  										xmlhttp.open("GET",url,true);	
  										xmlhttp.send();
		};

	function selectedValue(){
					
			var e = document.getElementById("url");
			var url = e.options[e.selectedIndex].value;
			selectedIndex= document.getElementById("url").selectedIndex;
			loadXMLDoc(url,responseFunction);

		}	

function responseFunction(response)
{
	
 	var jsonobjList = JSON.parse(response);
 	console.log(jsonobjList);
 	var i = 0;

 	if(selectedIndex==1){

 	    var thefeeds = jsonobjList.responseData.feed.entries
 	    var feedTitle = jsonobjList.responseData.feed.title;
 	    var description = jsonobjList.responseData.feed.description;

 	    displayHtml.appendChild( getTitle(feedTitle, description));

 		while(i<thefeeds.length){

 		    var content = thefeeds[i].contentSnippet;
 		    var title = thefeeds[i].title;
 		    var date = thefeeds[i].publishedDate;
 		    displayGoogleFeed(title, content, date);
			i++;
 		}
 	}
 	
}

function getTitle(feedTitle, description)
{
    var new_div = document.createElement("div");
    new_div.className = 'feed-title';

    var sub_childone = document.createElement("h3");
    sub_childone.className = 'news-title';
    var news_feed = document.createTextNode(feedTitle);
    sub_childone.appendChild(news_feed);
    new_div.appendChild(sub_childone);

    var sub_childtwo = document.createElement("h6");
    sub_childtwo.className = 'news-description';
    var news_description = document.createTextNode(description);
    sub_childtwo.appendChild(news_description);
    new_div.appendChild(sub_childtwo);


    

    return new_div;

}

function getGoogleFeed(title, content,date)
{
    
    var new_div = document.createElement("div");
    new_div.className = 'google-feed';

    var sub_childone = document.createElement("a");
    sub_childone.className = 'googlefeed-title';
    sub_childone.href='#'
    var new_content = document.createTextNode(title);
    sub_childone.appendChild(new_content);
    new_div.appendChild(sub_childone);

    var sub_childthree = document.createElement("div");
    sub_childthree.className = 'googlefeed-date';
    var new_date = document.createTextNode(date);
    sub_childthree.appendChild(new_date);
    new_div.appendChild(sub_childthree);

    var sub_childtwo = document.createElement("div");
    sub_childtwo.className = 'googlefeed-url';
    var new_content = document.createTextNode(content);
    sub_childtwo.appendChild(new_content);
    new_div.appendChild(sub_childtwo);
    
    if (colorVAlue == 0) {
        new_div.style.backgroundColor = '#E1E0D4';
        colorVAlue = 1;
    } else {
        new_div.style.backgroundColor = '#D1D0D4';
        colorVAlue = 0;
    }

    
    return new_div;

}

function displayGoogleFeed(imgTitle, content ,date)
{
    
        
		var title = imgTitle;
		var contentValue = content;
		var dateValue = date;

        
		displayHtml.appendChild(getGoogleFeed(title, contentValue, dateValue));
		
}

function refreshPage()
{
	window.location.reload();

}
