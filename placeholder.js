$(document).ready(function(){
		var isInputSupported = 'placeholder' in document.createElement('input');
		if(!isInputSupported){
			$("input[placeholder]").each(function(){
			   var real=$(this);
			   var duplicate=$(this).clone();
			   if(duplicate.attr("type")=="password")
					duplicate.attr("type","text");
			   duplicate.removeAttr("name");
			   duplicate.removeAttr("id");
			   duplicate.attr("customname",$(real).attr("name"));
			   duplicate.attr("customid",$(real).attr("id"));
			   duplicate.attr("value",$(real).attr("placeholder"));
			   duplicate.attr("style","color:#aaaaaa");
			   real.attr("customplaceholder",real.attr("placeholder"));
			   real.removeAttr("placeholder");
			   duplicate.removeAttr("placeholder");
			   
			   if($(real).val()==""){
					$(real).hide();
					$(duplicate).show();
				}
				else{
					$(real).show();
					$(duplicate).hide();
				}
			    $(real).before(duplicate);

				$(duplicate).focus(function(){
				   $(real).show();
				   $(real).focus();
				   $(duplicate).hide();
				});
			    $(real).blur(function(){
			        if($(real).val()==""){
						$(real).hide();
						$(duplicate).show();
					}
					else{
						$(real).show();
						$(duplicate).hide();
					}
			    });
			    $(real).change(function(){
			        if($(real).val()==""){
						$(real).hide();
						$(duplicate).show();
					}
				    else{
						$(real).show();
						$(duplicate).hide();
					}
			    });
			 
				$(real).change(function(){
					$("input[customplaceholder]").each(function(){
						var genuine=$(this);
						$("input[customid]").each(function(){
							var pirate=$(this);
							if(pirate.attr("customid")!=$(real).attr("id")){
								if(genuine.attr("id")==pirate.attr("customid")){
									if(genuine.val()==""){
										$(genuine).hide();
										$(pirate).show();
									}
									else{
										$(pirate).hide();
										$(genuine).show();
									}
								}
							}
						});
					});		
				});
			
			    $(real).keyup(function(){
					$("input[customplaceholder]").each(function(){
						var genuine=$(this);
						$("input[customid]").each(function(){
						    var pirate=$(this);
							if(pirate.attr("customid")!=$(real).attr("id")){
								if(genuine.attr("id")==pirate.attr("customid")){
									if(genuine.val()==""){
										$(genuine).hide();
										$(pirate).show();
									}
									else{
										$(pirate).hide();
										$(genuine).show();
									}
								}
							}
						});
					});		
				});	
			});
		}
	});
