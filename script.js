const checkbox = document.getElementById('nav-checkbox');
const navBar = document.querySelector('header nav');

function navCheckbox(){
	if(!checkbox.checked){
		navBar.style.marginBottom = '120px'
	} else {
		navBar.style.removeProperty('margin-bottom')
	}
}