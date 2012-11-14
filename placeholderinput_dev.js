/*
PlaceholderInput v0.1 (14-11-2012)
Lucas Cavalcanti (http://lucascavalcanti.com.br)
http://rafael.adm.br/css_browser_selector
License: http://creativecommons.org/licenses/by/2.5/
================================================================
How to use: Add attribute data-placeholder in input and textarea
Example: 
<input type="text" data-placeholder="Enter your name">
<input type="text" data-placeholder="Enter your email">
<textarea name="" id="" data-placeholder="Type your message"></textarea>
*/

;(function placeholderInput(){
	var input = document.getElementsByTagName("input"),
		textarea = document.getElementsByTagName("textarea"),
		maxInputs = input.length + textarea.length;

	for (var i = 0; i < maxInputs; i++) {
		if (input[i]!=undefined) {
			inputVal = input[i].getAttribute('data-placeholder');
			input[i].value = inputVal;			
			input[i].onfocus = function(){
				this.value='';
			}
			
			input[i].onblur = function(){
				if (this.value == "" || this.value == this.getAttribute('data-placeholder') ) {
					this.value = this.getAttribute('data-placeholder');	
				};
				
			};
		}
		if(textarea[i]!=undefined){
			textareaVal = textarea[i].getAttribute('data-placeholder');
			textarea[i].value = textareaVal;

			textarea[i].onfocus = function(){
				this.value='';
			};

			textarea[i].onblur = function(){
				if (this.value=="" || this.value== this.getAttribute('data-placeholder') ) {
					this.value = this.getAttribute('data-placeholder');	
				};
			};
		};
	};
})();