var s1_reactions=['React negatively and yell, “What do you mean I’m not ready? I could do this tomorrow!”','I know that you don’t support me on this but it’s what I want so I’m going to begin working on it, on my own','My friend Robert moved out and lives on his own and he used Agency Acme, so I want us to meet with them and see what my options are.']
var s1_bubble=['Recognize that you are yelling because you are upset and frustrated. Your parents feel hurt and it takes them three weeks to come around and talk about it again. Instead of yelling, you could say, ““I wish you would respect and support my decision since I am adult.  Will you please hear me about because I have spent a lot of time thinking through this.” ','You could start this process on your own. Know that this process can be overwhelming, lonely, and frustrating at times. Think about who else is in your life who might have experience with moving who might be able to help you.','Agencies can provide many great resources and supports. Agency Acme might be a great fit for you, but there could be other agencies in your area. Keeping your parents involved is a great way to build in support!']
var count_right=0;
var count_left=0;
var counter=1;
var sen_counter=1;
var key=0;

function myFunction(event) {
    key = event.which;
    if(key==37)
        {
            slide_left();
        }
    if(key==39)
        {
            slide_right();
        }
}

$( document ).ready(function() {	
	$('#scenario-'+sen_counter).attr("hidden",false);
	$('#r-'+counter+'-'+sen_counter).attr("hidden",false);
});

function next_senario(){
	$('#scenario-'+sen_counter).attr("hidden",true);
	sen_counter+=1
	$('#scenario-'+sen_counter).attr("hidden",false);
	counter=1;
	$('#r-'+counter+'-'+sen_counter).attr("hidden",false);
}

function get_bubble(n){
	$('#sen_resp'+sen_counter).attr("hidden",true);
	$('#bubble-'+sen_counter).attr("hidden",false);
	$('#b-'+n+'-'+sen_counter).attr("hidden",false);
}

function slide_left(){
	for(i=counter;i>=1;i--)
		$('#r-'+i+'-'+sen_counter).attr("hidden",true);
	counter-=1;
	if(counter<1)
		counter=3;
	$('#r-'+counter+'-'+sen_counter).attr("hidden",false);

		
}

function slide_right(){
	for(i=1;i<=counter;i++)
		$('#r-'+i+'-'+sen_counter).attr("hidden",true);
	counter+=1;
	if(counter>3)
		counter=1;
	$('#r-'+counter+'-'+sen_counter).attr("hidden",false);

		
}



