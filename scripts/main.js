isDefColour = true;
var lastGridNo;
var drawColour = '#E040FB'; // default colour

$(document).ready(function() 
{
	drawGrid(36);

	$('button').on('mouseenter',$('button') ,function()
	{
		toggleHighlight($(this));
	});

	$('button').on('mouseleave',$('button') ,function()
	{
		toggleHighlight($(this));
	});
});

function toggleHighlight(obj)
{
	obj.toggleClass('button-highlight');
}

function drawGrid(gridNo)
{
	lastGridNo = gridNo;

	var i;
	var num = gridNo * gridNo;
	var j = 640 / gridNo;

	console.log(j);
	console.log(num);
	console.log(gridNo);

	for (i = 0; i < num; i++) 
	{
		$("<div class='unit'></div>").appendTo('.container');
		//console.log("loop no. " + i);
	}

	$(".unit").width(j);
	$(".unit").height(j);

	if (isDefColour)
	{
		draw();
	} else {
		randomColour();
	}
}

function resetDisplay()
{
	$('.container').empty();
	var granularity = 
		prompt("Specify granularity(1-100): ");

	while(granularity < 1 || granularity > 100)
	{
		granularity = prompt("Enter a number between 1-100");
	}
	drawGrid(granularity);
}

function clearGrid()
{
	//$('.container').empty();
	//drawGrid(lastGridNo);
	$('.unit').css('background', '#FFFFFF');
	draw();
}

function randomColour()
{ 
  	isDefColour = false;
  	drawColour = '#'+Math.floor(Math.random()*16777215).toString(16);

 	$(".unit").hover(function()
 	{ 
 		$(this).css("background", colour); 
 	});
} 

function setBlack() 
{ 
  	isDefColour = false;
  	drawColour = '#212121'

 	$(".unit").hover(function()
 	{ 
 		$(this).css("background", drawColour); 
 	});
} 

function draw()
{
	isDefColour = true;
	$('.unit').hover(function()
	{
		$(this).css('background', drawColour);
		//console.log('drawing...');
	});
}
