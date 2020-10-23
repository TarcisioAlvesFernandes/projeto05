
function menu(){
	var button = document.getElementById("menu-mobile");
	var menuUl = document.getElementById("menu-ul");	

	if(menuUl.style.display == "block"){
		button.style.backgroundImage = "url('imagens/icon_menu.png')";	
		menuUl.style.display = "none";			
	}else {		
		button.style.backgroundImage = "url('imagens/icon_x.png')";
		menuUl.style.display = "block";			
	}
	

}