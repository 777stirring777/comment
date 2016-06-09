$(function(){
	$('form input[type=button]').on('click', function(){
		var gaga = true;
		
	    var nameElm = $('.name'); // кусок html - div
	    var name = nameElm.find('input').val(); // строка
	    nameElm.removeClass('error-required');
	    nameElm.removeClass('error-min');
	    if(!name){
	      nameElm.addClass('error-required');
	      gaga = false;
	    }else if(name.length < 2){ // значение инпута name не менее 2 символов
	      nameElm.addClass('error-min');
	      gaga = false;
	    }

	    var emailElm = $('.email');
	    var email = emailElm.find('input').val();
	    emailElm.removeClass('error-required');
	    emailElm.removeClass('error-invalid');
	    if(!email){
	      emailElm.addClass('error-required');
	      gaga = false;
	    }else if(!validateEmail(email)){
	      emailElm.addClass('error-invalid');
	      gaga = false;
	    }

	    var messageElm = $('.message'); // кусок html - div
	    var message = messageElm.find('textarea').val(); // строка
	    messageElm.removeClass('error-required');
	    messageElm.removeClass('error-min');
	    if(!message){
	      messageElm.addClass('error-required');
	      gaga = false;
	    }else if(message.length < 10){ // значение инпута name не менее 10 символов
	      messageElm.addClass('error-min');
	      gaga = false;
	    }

	    var  reactionElm = $('.reaction');
	    var  reaction =  reactionElm.find('input:checked').val();
	     reactionElm.removeClass('error-required');
	    if(!reaction){
	      reactionElm.addClass('error-required');
	      gaga = false;
	    }


        if (gaga){
	    var nazvElm = $('<h5>');
	    var commentElm = $('<p>');
	    var totalElm = $('<div>');

	    console.log(reaction)
	    if (reaction== 'exelent'){
	    	totalElm.addClass('exelent');
	    }
	    nazvElm.text(name);
	    commentElm.text(message);

	    nazvElm.appendTo(totalElm);
	     commentElm.appendTo(totalElm);

	     var list = $('.comments-list');
	     totalElm.appendTo(list);
         
         nameElm.find('input').val('');
	     emailElm.find('input').val('');
	     $('textarea').val('');
	     $('input[type=radio]').attr('checked',false);
	 };
	});
});



function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};


  
    
 
