/*
PlaceholderInput v0.2 (14-11-2012)
Lucas Cavalcanti (http://lucascavalcanti.com.br)
License: http://creativecommons.org/licenses/by/2.5/
================================================================
How to use: Add attribute placeholder in input and textarea
Example:
<input type="text" placeholder="Enter your name">
<input type="text" placeholder="Enter your email">
<textarea name="" id="" placeholder="Type your message"></textarea>
*/
;(function hasPlaceholderSupport(){
  input = document.createElement('input');
  verify = 'placeholder' in input;
  if (verify==false){
  	placeholderInput();
  };
})();
function placeholderInput(){
	var input = document.getElementsByTagName("input"),
		pass = [],
		textarea = document.getElementsByTagName("textarea"),
		maxInputs = input.length + textarea.length;

	for (var i = 0; i < maxInputs; i++) {
		if (input[i]!=undefined) {
			inputVal = input[i].getAttribute('placeholder');
			input[i].value = inputVal;
			if (input[i].type=='password'){
				input[i].setAttribute('type','text');
				input[i].setAttribute('data-type','pass');
			};

			input[i].onfocus = function(){
				if (this.getAttribute('data-type')=='pass'){
					this.setAttribute('type','password');
				};

				if (this.value=="" || this.value == this.getAttribute("placeholder")){
					this.value='';
				};
			};

			input[i].onblur = function(){
				if (this.value == "" || this.value == this.getAttribute('placeholder') ) {
					this.value = this.getAttribute('placeholder');
					this.setAttribute('type','text');
				};

			};
		};
		if(textarea[i]!=undefined){
			textareaVal = textarea[i].getAttribute('placeholder');
			textarea[i].value = textareaVal;

			textarea[i].onfocus = function(){
				this.value='';
			};

			textarea[i].onblur = function(){
				if (this.value=="" || this.value== this.getAttribute('placeholder') ) {
					this.value = this.getAttribute('placeholder');
				};
			};
		};
	};
};