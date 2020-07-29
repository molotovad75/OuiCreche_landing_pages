function afficher_cacher_formulaire(formulaire,btn_formulaire) {
	var form=document.getElementById(formulaire);
	var btn_click=document.getElementById(btn_formulaire);

	var pseudo_field=document.getElementById("pseudo");
	var num_tel_field=document.getElementById("num_tel");
	var adresse_mail_field=document.getElementById("adresse_mail");
	var message_field=document.getElementById("message");
	var envoyer_message_btn=document.getElementById("envoyer_message");
	var h2_text=document.getElementById("h2");

	var footer=document.getElementById("footer");
	var pub1=document.getElementById("pub1");
	var description_OuiCrèches=document.getElementById("description_OuiCrèches");

	description_OuiCrèches.style.marginTop="-20px";

	if (btn_click.value=="Cacher le formulaire") {
		form.style.display = "none";	
		btn_click.value="Accéder au formulaire";
		footer.style.marginTop="-20px";
		description_OuiCrèches.style.marginTop="-20px";
		pub1.style.paddingTop="200px";
		pub1.style.paddingBottom="150px";

	}else if (btn_click.value=="Accéder au formulaire") {
		form.style.display = "inline";
		form.style.marginBottom="50px";
		btn_click.value="Cacher le formulaire";	
		footer.style.paddingBottom="0px";
		footer.style.marginTop="-10px";
		pub1.style.paddingTop="20px";
		pub1.style.paddingBottom="250px";
		description_OuiCrèches.marginTop="-20px";
		
	}
	
	
}
