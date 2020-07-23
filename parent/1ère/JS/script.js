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

	pseudo_field.style.marginLeft = "500px";
	num_tel_field.style.marginLeft = "500px";
	adresse_mail_field.style.marginLeft = "500px";
	message_field.style.marginLeft = "500px";
	envoyer_message_btn.style.marginLeft = "500px";
	h2_text.style.marginLeft = "500px";
	
	if (btn_click.value=="Cacher le formulaire") {
		form.style.display = "none";	
		btn_click.value="Accéder au formulaire";
		footer.style.marginTop="-20px";

		pub1.style.paddingTop="200px";
		pub1.style.paddingBottom="200px";

	}else if (btn_click.value=="Accéder au formulaire") {
		form.style.display = "inline";
		btn_click.value="Cacher le formulaire";	
		footer.style.paddingBottom="0px";
		footer.style.marginTop="-10px";
		pub1.style.paddingTop="20px";
		pub1.style.paddingBottom="50px";
	}
	
	
}
