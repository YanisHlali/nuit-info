//menu
jQuery(function ($) {
  $(".sidebar-dropdown > a").click(function () {
    $(".sidebar-submenu").slideUp(200);
    if ($(this).parent().hasClass("active")) {
      $(".sidebar-dropdown").removeClass("active");
      $(this).parent().removeClass("active");
    } else {
      $(".sidebar-dropdown").removeClass("active");
      $(this).next(".sidebar-submenu").slideDown(200);
      $(this).parent().addClass("active");
    }
  });

  $("#close-sidebar").click(function () {
    $(".page-wrapper").removeClass("toggled");
  });
  $("#show-sidebar").click(function () {
    $(".page-wrapper").addClass("toggled");
  });
});

// validation formulaire bootstrap
(function () {
    'use strict';
    window.addEventListener('load', function () {
        var form = document.getElementById('needs-validation');
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    }, false);
})();


// formulaires dynamiques
var j = 1;
$(function () {
    $(document).on('click', '.btn-add', function (e) {
        e.preventDefault();
        j += 1

        var dynaForm = $('.formDynamique'),
            currentEntry = $(this).parents('.entry');
        newEntry = (currentEntry.clone()).appendTo(dynaForm);

        $("#compteur").attr("id", "compteur" + j);
        $("#compteur" + j).html(j - 1);
        $("#compteur").attr("id", "compteur").html(j);

        newEntry.find('input').val('');
        dynaForm.find('.entry:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span>Supprimer</span>');
    })

        .on('click', '.btn-remove', function (e) {
            /*             i = i - 1
                        $("#compteur").attr("id", "compteur").html(i); */
            $(this).parents('.entry:first').remove();

            e.preventDefault();
            return false;
        });
});

// formulaires dynamiques
var i = 1;
$(function () {
    $(document).on('click', '.btn-add2', function (e) {
        e.preventDefault();
        i += 1

        var dynaForm = $('.formDynamique2'),
            currentEntry = $(this).parents('.entry2');
        newEntry = (currentEntry.clone()).appendTo(dynaForm);

        $("#compteur2").attr("id", "compteur2" + i);
        $("#compteur2" + i).html(i - 1);
        $("#compteur2").attr("id", "compteur2").html(i);

        newEntry.find('input').val('');
        dynaForm.find('.entry2:not(:last) .btn-add2')
            .removeClass('btn-add2').addClass('btn-remove2')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span>Supprimer</span>');
    })

        .on('click', '.btn-remove2', function (e) {
            /*             i = i - 1
                        $("#compteur").attr("id", "compteur").html(i); */
            $(this).parents('.entry2:first').remove();

            e.preventDefault();
            return false;
        });
});


// datable en francais
$(document).ready(function () {
    $('.table-striped').DataTable({
        "language": {
            "sProcessing": "Traitement en cours...",
            "sSearch": "Rechercher&nbsp;:",
            "sLengthMenu": "Afficher _MENU_ &eacute;l&eacute;ments",
            "sInfo": "Affichage de l'&eacute;l&eacute;ment _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
            "sInfoEmpty": "Affichage de l'&eacute;l&eacute;ment 0 &agrave; 0 sur 0 &eacute;l&eacute;ment",
            "sInfoFiltered": "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
            "sInfoPostFix": "",
            "sLoadingRecords": "Chargement en cours...",
            "sZeroRecords": "Aucun &eacute;l&eacute;ment &agrave; afficher",
            "sEmptyTable": "Aucune donn&eacute;e disponible dans le tableau",
            "oPaginate": {
                "sFirst": "Premier",
                "sPrevious": "Pr&eacute;c&eacute;dent",
                "sNext": "Suivant",
                "sLast": "Dernier"
            },
            "oAria": {
                "sSortAscending": ": activer pour trier la colonne par ordre croissant",
                "sSortDescending": ": activer pour trier la colonne par ordre d&eacute;croissant"
            },
            "select": {
                "rows": {
                    "_": "%d lignes sélectionnées",
                    "0": "Aucune ligne sélectionnée",
                    "1": "1 ligne sélectionnée"
                }
            }
        }, 
        responsive: true,
        "pageLength": 10,
        columnDefs: [
            { bSortable:false ,orderable: false, targets: 0 }
          ]
    });
});