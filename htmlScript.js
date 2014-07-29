var  ajaxRequest;

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

 		var thefeeds=jsonobjList.responseData.feed.entries
 		while(i<thefeeds.length){

 			var  url = thefeeds[i].link;
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

function getGoogleFeed(title, imageUrl)
{
	var template = "<div class='Google-Feed' ><h4 class='GoogleFeed-title'>" + title + "</h4><h5 class='GoogleFeed-Url'>" + imageUrl + "</h5></div>";
	return template;
}

function getCar(catagoriesValue ,referenceidValue)
{
	var template = "<div class='car'><h4 class='car-catagories'>" + catagoriesValue + " </h4><h5 class='car-Referecne'>" + referenceidValue + "</h5></div>";
	return template;
}



function displayGoogleFeed(imgTitle, imgURL)
{
	
		var displayHtml = document.getElementById('displayHotel');
		var title = imgTitle;
		var Url = imgURL;
		displayHtml.innerHTML += getGoogleFeed(title, Url);

}
function displayCar(catagories,referenceid)
{
	var displayHtml = document.getElementById('displayHotel');
	var carCatagories = catagories;
	var carReferenceId = referenceid;
	displayHtml.innerHTML += getCar(carCatagories, carReferenceId);
	
}

function refreshPage()
{
	window.location.reload();

}
