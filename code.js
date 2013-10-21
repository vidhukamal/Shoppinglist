$(document).ready(function(){
	var imgTag = "<img src=\"remove.png\" class=\"remove\"/>";
	$('form').on('submit',function(){
		var item = $('#add_item').val();
		//alert(item);
		$('ul').append("<li id="+ item +" class='shop_item'><input type='checkbox' class='check_cls' />" + item + imgTag+"</li>");
		
		$("li.shop_item").on("click",function(){
			//alert($(this).html());
			var myval = $(this).attr('id');
    		if ($('.check_cls').is(":checked")) {
        		$(this).html("<input type='checkbox' class='check_cls' checked/><strike>" + myval + "</strike>"+imgTag);
	    	} 
    		else 
    		{
    			$(this).html("<input type='checkbox' class='check_cls'/>" + myval + imgTag);
	    	}
    		return false;
		});
		
		
		$('.remove').on("click", function(){
			$(this).parent().remove();			
		});	
	
		return false;
		
	});
});
