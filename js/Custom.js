$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
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

    }
