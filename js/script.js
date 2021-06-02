
        var input = document.querySelector("#phone");
        window.intlTelInput(input, {
            nationalMode: false,
            placeholderNumberType: "MOBILE",
            preferredCountries: ['br', 'us', 'spn'],
            separateDialCode: true,
            utilsScript: "js/telefone/utils.js",
        });
