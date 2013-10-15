$(document).ready(function(){
	$('form').on('submit',function(){
		var item = $('#add_item').val();
		$(".product").append("<label><input type=checkbox id=shop_item>"+item+"</label>")
		return false;
	});
	
	$('#shop_item').click(function(){
		$("label").style.textDecoration = 'line-through';
	});
	 
});
