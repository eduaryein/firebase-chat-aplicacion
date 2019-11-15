let nombre = document.getElementById('nombre');
let email = document.getElementById('email');
let avatar = document.getElementById('avatar');

let btnSub = document.querySelector("#btnSub");

if (btnSub) {

	eventListenet();

	function eventListenet() {

		btnSub.addEventListener("click", loginApp);

		document.addEventListener('DOMContentLoaded', load);
	}

	function load() {
		var elems = document.querySelectorAll('select');
		var instances = M.FormSelect.init(elems);
	}

	//Validar campos del dormulario
	function loginApp(e) {

		e.preventDefault();

		//Validar nombre
		if (nombre.value != '') {

			var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;

			if (!expresion.test(nombre.value)) {

				M.toast({
					html: 'No se permiten caráteres especiales!'
				})

				return false;
			}
		} else {
			M.toast({
				html: 'Ingrese un nombre!'
			})
			return false;
		}

		//Validar email
		if (email.value != '') {

			var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

			if (!expresion.test(email.value)) {

				M.toast({
					html: 'Por favor ingrese un email válido!'
				})

				return false;
			}
		} else {
			M.toast({
				html: 'Ingrese un email!'
			})
			return false;
		}

		//Generamos ajax para ingresar 
		var ajax = new XMLHttpRequest();
		var method = "POST";
		var URL = "ajax/users.php";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 4 && ajax.status == 200) {
				var response = ajax.responseText;

				if (response == 'ok') {

					window.location.reload();
				} else if (response == 'error') {

					M.toast({
						html: 'Error no se puedo ingresar al chat!'
					})
				}
			}
		};
		ajax.open(method, URL, true);
		ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		ajax.send("nombre=" + nombre.value + "& email=" + email.value + "& avatar=" + avatar.value);


	}
}

/*=================================================
=            ENVIAR MENSAJE A FIREBASE            =
=================================================*/

//Delcarar db firebase
var db = firebase.database();

var sendMenssa = document.getElementById("sendMenssa");

if (sendMenssa) {
var userid = document.getElementById('userid');
var nombre_user = document.getElementById('nombre_user');
var avatar_user = document.getElementById('avatar_user');
var fecha = document.getElementById('fecha');

	eventoClick();

	function eventoClick() {

		sendMenssa.addEventListener("click", menssageSend);


	}

	function menssageSend(e)
	{
		e.preventDefault();
		var mensaje = document.querySelector("#mensaje");


		//Validar nombre
		if (mensaje.value != '') {

			var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;

			if (!expresion.test(mensaje.value)) {

				M.toast({
					html: 'No se permiten caráteres especiales!'
				})

				return false;
			}
		} else {
			M.toast({
				html: 'Ingrese un mensaje!'
			})
			return false;
		}

		$(document).ready(function(){
		db.ref('users').on('child_added', function(data){

			$(".mensagge-user").append(
				`<div>
					<ul>
                <li>
                  <img src="../images/avatar/${data.val().avatar}" width="50">
                  <span class="title-user">${data.val().name} <time>${data.val().date}</time></span>
                </li>
                <li id="mensagge">
                    <p>${data.val().mensagge}</p>
                </li>
              </ul> 
				</div>`
				);
		})
	})

		var messageListRef = firebase.database().ref('users');
		var newMessageRef = messageListRef.push();


		 newMessageRef.set({
	       avatar: avatar_user.value,
	       date: fecha.value,
	       mensagge: mensaje.value,
	       name: nombre_user.value,
	       userid: userid.value
	    });

	 $("#mensaje").val('');
	}


}


/*=====  End of ENVIAR MENSAJE A FIREBASE  ======*/
