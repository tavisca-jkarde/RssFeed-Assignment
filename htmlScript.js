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
 		while(jsonobjList != undefined){

 			var  title = jsonobjList.deals[i].title;
 			var  url = jsonobjList.deals[i].imageUrl;
			displayHotel(title, url);
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

function getHotel(title, imageUrl)
{
	var template = "<div class='hotels' ><h3 class='hotel-title'>" + title + "</h3><img class = 'images-Url' src=" + imageUrl +" alt=\"couldn't load the image\"></div>";
	return template;
}

function getCar(catagoriesValue ,referenceidValue)
{
	var template = "<div class='car'><h4 class='car-catagories'>" + catagoriesValue + " </h4><h5 class='car-Referecne'>" + referenceidValue + "</h5></div>";
	return template;
}



function displayHotel(imgTitle, imgURL)
{
	
		var displayHtml = document.getElementById('displayHotel');
		var imageTitle = imgTitle;
		var imageUrl = imgURL;
		displayHtml.innerHTML += getHotel(imageTitle, imageUrl);

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
