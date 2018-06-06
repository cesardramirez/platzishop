const $form = $('#suscribeForm')
const $formGroup = $form.find('.form-group')
const $formControl = $formGroup.find('.form-control')

$form.submit(function (ev) {
	ev.preventDefault();
	const error = Math.random() > 0.5;

	$formControl.removeClass().addClass('form-control');
	$formGroup.find('.invalid-feedback, .valid-feedback').remove();
	$formControl.addClass(error ? 'is-invalid' : 'is-valid');

	var el;
	if (error) {
		el = $('<div>', {html: 'Ha ocurrido un error'});
		el.addClass('invalid-feedback');
	} else {
		el = $('<div>', {html: 'Te enviaremos todas las novedades'});
		el.addClass('valid-feedback');
	}
	$formGroup.append(el);
});

function mostrarModal() {
	var v_modal = localStorage.noMostrarModal;
	const noMostrarModal = (v_modal == null) ? false : JSON.parse(v_modal);

	if (!noMostrarModal) {
		//$('#modalOferta').modal();
		$('#modalOferta').modal({backdrop: 'static', keyboard: false});
	}
	
	$('#btnNoRegistrar').click(function onclick(ev) {
		localStorage.noMostrarModal = true;
	});
}

const $filtrosToggle = $('#filtrosToggle');
$filtrosToggle.click(function (ev) {
	ev.preventDefault();
	const $i = $filtrosToggle.find('i.fa');
	var isDown = $i.hasClass('fa-chevron-down');
	
	if (isDown) {
		$i.removeClass('fa-chevron-down').addClass('fa-chevron-up')
	} else {
		$i.removeClass('fa-chevron-up').addClass('fa-chevron-down')
	}
});