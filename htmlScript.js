var  ajaxRequest;
var displayHtml = document.getElementById('displayHotel');

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

 		    var url = thefeeds[i].contentSnippet;
 			var  title = thefeeds[i].title;
 			displayGoogleFeed(title, url);
			i++;
 		}
 	}else if(selectedIndex==2)
 	{
 		var  length = jsonobjList.categories.length-1;

 		while(i <= length ){

 			var  catagories = jsonobjList.categories[i];
 			var  referenceid = jsonobjList.status.referenceId;
			displayCar(catagories, referenceid);
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

function getGoogleFeed(title, imageUrl)
{
    
    var new_div = document.createElement("div");
    new_div.className = 'google-feed';

    var sub_childone = document.createElement("h4");
    sub_childone.className = 'googlefeed-title';
    var new_content = document.createTextNode(title);
    sub_childone.appendChild(new_content);
    new_div.appendChild(sub_childone);

    var sub_childtwo = document.createElement("h5");
    sub_childtwo.className = 'googlefeed-url';
    var new_content_url = document.createTextNode(imageUrl);
    sub_childtwo.appendChild(new_content_url);

    new_div.appendChild(sub_childtwo);

    

    return new_div;

}

function getCar(catagoriesValue ,referenceidValue)
{
    var new_div = document.createElement("div");
    new_div.className = 'car';

    var sub_childone = document.createElement("h4");
    sub_childone.className = 'car-catagories';
    var new_content = document.createTextNode(catagoriesValue);
    sub_childone.appendChild(new_content);
    new_div.appendChild(sub_childone);

    var sub_childtwo = document.createElement("h5");
    sub_childtwo.className = 'car-Referecne';
    var new_content_url = document.createTextNode(referenceidValue);
    sub_childtwo.appendChild(new_content_url);

    new_div.appendChild(sub_childtwo);
    return new_div;
}



function displayGoogleFeed(imgTitle, imgURL)
{
    
        
		var title = imgTitle;
		var Url = imgURL;
        
		displayHtml.appendChild( getGoogleFeed(title, Url));
		
}
function displayCar(catagories,referenceid)
{
	//var displayHtml = document.getElementById('displayHotel');
	var carCatagories = catagories;
	var carReferenceId = referenceid;
	displayHtml.appendChild(getCar(carCatagories, carReferenceId));
	
}

function refreshPage()
{
	window.location.reload();

}
