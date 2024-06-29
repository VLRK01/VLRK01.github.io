$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

// Getting passwordbemyndigede from JSON
function PasswordBemyndigede(arr) {
    var Output = "";
    var i;
    // Table header
    Output += '<thead class="thead-cbs"><tr><th scope="col">Afdeling</th><th class="d-none d-md-table-cell" scope="col">Navn</th><th scope="col">Titel</th><th class="d-none d-md-table-cell" scope="col">Email</th></tr></thead>'
    for (i = 0; i < arr.length; i++) {
        Output += '<tr><td>' + arr[i].AFDELING + '<td class="d-none d-md-table-cell">' + arr[i].NAVN + '</td><td>' + arr[i].TITEL + '</td><td class="d-none d-md-table-cell">' + arr[i].EMAIL + '</td></tr>';
    }
    document.getElementById("PasswordBemyndigede").innerHTML = Output;
}

// Getting printerlist from JSON
function PrinterList(arr) {
    var Output = "";
    var i;
    // Table header
    Output += '<thead class="thead-cbs"><tr><th scope="col">Printernavn</th><th scope="col">Serienummer</th><th class="d-none d-md-table-cell" scope="col">Modelnavn</th><th scope="col">Placering</th></tr></thead>'
    for (i = 0; i < arr.length; i++) {
        Output += '<tr><td><a href="https://' + arr[i].IP + '" target="_blank">' + arr[i].Name + '</a><td class="d-none d-md-table-cell">' + arr[i].Serial + '</td><td class="d-none d-md-table-cell">' + arr[i].Model + '</td><td class="d-none d-md-table-cell">' + arr[i].Location + '</td></tr>';
    }
    document.getElementById("PrinterList").innerHTML = Output;
}

// Getting contacts from JSON
function ContactList(arr) {
    var Output = "";
    var i;
    // Table header
    Output += '<thead class="thead-cbs"><tr><th scope="col">Navn</th><th scope="col">E-Mail</th><th scope="col">Lokalnr.</th></tr></thead>'
    for (i = 0; i < arr.length; i++) {
        Output += '<tr><td>' + arr[i].Name + '</td><td>' + arr[i].Email + '</td><td><a href="tel:+453815' + arr[i].Number + '">' + arr[i].Number + '</a></td></tr>';
    }
    document.getElementById("ContactList").innerHTML = Output;
}

// Getting Useful Phone Numbers from JSON
function UsefulPhoneNumbers(arr) {
    var Output = "";
    var i;
    // Table header
    Output += '<thead class="thead-cbs"><tr><th scope="col">Navn</th><th scope="col">Telefonnr.</th></tr></thead>'
    for (i = 0; i < arr.length; i++) {
        if (arr[i].Number.length == 4) {
            Output += '<tr><td>' + arr[i].Name + '</td><td><a href="tel:+453815' + arr[i].Number + '">' + arr[i].Number + '</a></td></tr>';
        } else if (arr[i].Number.length == 8) {
            Output += '<tr><td>' + arr[i].Name + '</td><td><a href="tel:+45' + arr[i].Number + '">' + arr[i].Number + '</a></td></tr>';
        } else {
            Output += '<tr><td>' + arr[i].Name + '</td><td>' + arr[i].Number + '</td></tr>';
        }
    }
    document.getElementById("UsefulPhoneNumbers").innerHTML = Output;
}

//Filter on department in PasswordBemyndigede modal
$(document).ready(function () {
    $("#PasswordBemyndigedeInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#PasswordBemyndigede tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

//Filter on names in Contact list modal
$(document).ready(function () {
    $("#ContactListInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#ContactList tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

//Filter on names in Useful Phone Number modal
$(document).ready(function () {
    $("#UsefulPhoneNumbersInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#UsefulPhoneNumbers tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

//Filter on names in SHARP IP list modal
$(document).ready(function () {
    $("#PrinterListInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#PrinterList tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

// Every time a modal is shown, if it has an autofocus element, focus on it.
$(document).on('shown.bs.modal', '.modal', function () {
    $(this).find('[autofocus]').focus();
});

// Function to copy string to clipboard.
function updateClipboard(newClip) {
    navigator.clipboard.writeText(newClip).then(function () {
        // Activate success alert when content are copied.
        $('#alert-success').show()

        // Remove alert after 3 seconds.
        $("#alert-success").fadeTo(3000, 500).slideUp(500, function () {
            $("#alert-success").slideUp(500);
        });

    }, function () {
        // Display error in console if something weird happens.
        console.log('Jeezes christ.')
    });
}