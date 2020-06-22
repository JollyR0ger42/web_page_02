const checkbox = document.getElementById('nav-checkbox');
const navBar = document.querySelector('header nav');

function navCheckbox(){
	if(!checkbox.checked){
		navBar.style.marginBottom = '120px'
	} else {
		navBar.style.removeProperty('margin-bottom')
	}
}


const collapsibles = document.getElementsByClassName('collapsible');

for(const collapsible of collapsibles){
	const button = collapsible.children[0];
	button.addEventListener('click', (ev) => {
		const content = collapsible.children[1];
		if(content.style.maxHeight){
			content.style.maxHeight = null
		} else {
			content.style.maxHeight = content.scrollHeight + 200 + 'px'
		}
	})
}