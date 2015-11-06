var div = [];

var buffer;

for(var i = 1 ; i < 7 ; i++){
	div[i] = $("#" + i);
	div[i].click(function(){
		buffer = $(this);
	})
}

$("#red").click(function(){
	buffer.addClass("red");
})

$("#green").click(function(){
	buffer.addClass("green");
})


