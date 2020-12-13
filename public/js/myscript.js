var languages = [];
var numLanguages = 2;
var optionList;

$('#outputTab').on("click", function () {
    $('#filetree').fileTree({
        script: 'jqueryFileTree.php',
        expandSpeed: 700,
        collapseSpeed: 700,
        multiFolder: false,
        expandEasing: 'easeOutBounce',
        collapseEasing: 'easeOutBounce',
        loadMessage: 'Un momento...'
    }, function (file) {
    });
});

$(document).ready(function () {

    // restore values of advanced parameters if recorded in cookies
    $('#advanced input,#advanced select').each(function () {
        var val = Cookies.getJSON($(this).attr('id'));
        if (val) {
            $(this).val(val);
            console.log("Restored value from cookie ", $(this).attr('id'), "=>", val);
        }
    });

    $("#action").on("change", function () {
        if ($("#action").val() == "Align") {
            $("#selectAligner").fadeIn();
            $("#formatIn").html('<option>txt</option><option>ces</option><option>ttg</option><option>xml</option>');
        } else {
            $("#selectAligner").fadeOut();
            $("#formatIn").html('<option>ces</option><option>tmx</option><option>txt</option>');
        }
    });

    $("#fileupload").on("submit", function () {

        action = $("#action").val();
        aligner = $("#aligner").val();
        languages = $("#languages").val();
        if (languages == "") {
            calcLanguages();
            languages = $("#languages").val();
        }
        langs = languages.split(/ +/);
        if ($('#splitSent').is(':checked')) {
            $('#splitSent').val(1);
        } else {
            $('#splitSent').val(0);
        }

        if ((aligner == "YASA" || aligner == "Alinea Lite") && (!langs || langs.length < 2)) {
            alert("When using YASA or Alinea Lite, you have to set the 'languages' parameter (e.g.: en fr).");
            return false;
        }
        if (action == "Convert" && $("#formatIn").val() != "tmx" && $("#formatIn").val() != "ces" && !langs) {
            alert("When converting alignment files, you have to set the 'languages' parameter (e.g.: en fr it) for the output file.");
            return false;

        }
        if (action == "Align") {
            action += " with " + $("#aligner").val();
        }
        sessionId = getSessionId();
        var data = {
            'action': $("#action").val(),
            'aligner': $("#aligner").val(),
            'inputFormat': $("#formatIn").val(),
            'outputFormat': $("#formatOut").val(),
            'languages': languages,
            'sessionId': sessionId
        };
        $("#modalTitle").html(data['action']);
        $("#inputFormat").html(data['inputFormat']);
        $("#outputFormat").html(data['outputFormat']);
        $("#running").modal({
            keyboard: false,
            focus: true,
            show: true,
            backdrop: 'static'
        });
        $('#advanced input,#advanced select').each(function () {
            data[$(this).attr('id')] = $(this).val();
            // record parameter in cookie
            Cookies.set($(this).attr('id'), $(this).val(), {expires: 30});
        });

        $('#log').html("<img src='/img/wait.gif'/>");


        $.post("runPipeline.php", data, function (data) {
            $('#log').html(data);
            $('#outputTab').trigger("click");
        });
        return false;
    });

    $("#go_direct").on("click", function () {

        var data = {};
        data['aligner_direct'] = $("#aligner_direct").val();
        sessionId = getSessionId();
        data['sessionId'] = getSessionId();

        langs = "";
        for (i = 1; i <= numLanguages; i++) {
            data['l' + i] = $("#l" + i).val();
            data['l' + i + 'Language'] = $("#l" + i + "Language").val();
            langs += "-" + data['l' + i + 'Language'];
        }
        langs = langs.substr(1);


        $("#modalTitle").html("Aligning " + langs + " with " + $("#aligner_direct").val());
        $("#inputFormat").html(" txt");
        $("#outputFormat").html(" txt");
        $("#running").modal({
            keyboard: false,
            focus: true,
            show: true,
        });
        $('#log').html("Please wait a few moments... <img src='/img/wait.gif'/>");
        $.post("alignText.php", data, function (data) {
            $('#outputTab').trigger("click");
            $('#log').html(data);
            window.open(data);
        });

        return false;
    });

    $("#clear_output").on("click", function () {
        if (confirm("Are you sure you want to delete all the previous output directories ?")) {
            $("#clear").modal({
                keyboard: false,
                focus: true,
                show: true,
            });

            $.post("clearOutputDir.php", function (data) {
                $('#clearLog').html(data);
            });
            $('#filetree').fileTree();
        }
        return false;
    });

    // the execution is delayed because we have to wait the update of file list
    setTimeout(calcLanguages, 2000);

    // automatic language identification (in combobox)

    runGuessLanguage = function () {
        text = $(this).val();
        id = $(this).attr('id') + "Language";
        $("#" + id + "Guessed").fadeIn();
        guessLanguage.detect(text, function (language) {
            console.log('Detected language code of provided text is [' + language + ']');
            $("#" + id).val(languageList[language] + " (" + language + ")");
        });
    };


    $('#l1,#l2').on("change", runGuessLanguage);

    // Data for automatic language identification (for guessLanguage.js)
    languageList = {
        "ab": "Abkhazian",
        "af": "Afrikaans",
        "ar": "Arabic",
        "az": "Azerbaijani",
        "be": "Belarusian",
        "bg": "Bulgarian",
        "bn": "Bengali",
        "bo": "Tibetan",
        "br": "Breton",
        "ca": "Catalan, Valencian",
        "ceb": "Cebuano",
        "cs": "Czech",
        "cy": "Welsh",
        "da": "Danish",
        "de": "German",
        "el": "Modern Greek",
        "en": "English",
        "eo": "Esperanto",
        "es": "Spanish, Castilian",
        "et": "Estonian",
        "eu": "Basque",
        "fa": "Persian",
        "fi": "Finnish",
        "fo": "Faroese",
        "fr": "French",
        "fy": "Western Frisian",
        "gd": "Scottish Gaelic, Gaelic",
        "gl": "Galician",
        "gu": "Gujarati",
        "ha": "Hausa",
        "haw": "Hawaiian",
        "he": "Hebrew",
        "hi": "Hindi",
        "hr": "Croatian",
        "hu": "Hungarian",
        "hy": "Armenian",
        "id": "Indonesian",
        "is": "Icelandic",
        "it": "Italian",
        "ja": "Japanese",
        "ka": "Georgian",
        "kk": "Kazakh",
        "km": "Central Khmer",
        "kn": "Kannada",
        "ko": "Korean",
        "ku": "Kurdish",
        "ky": "Kirghiz, Kyrgyz",
        "la": "Latin",
        "lo": "Lao",
        "lt": "Lithuanian",
        "lv": "Latvian",
        "mg": "Malagasy",
        "mk": "Macedonian",
        "ml": "Malayalam",
        "mn": "Mongolian",
        "mr": "Marathi",
        "ms": "Malay (macrolanguage)",
        "nd": "North Ndebele",
        "ne": "Nepali",
        "nl": "Dutch, Flemish",
        "nn": "Norwegian Nynorsk",
        "no": "Norwegian",
        "nso": "Pedi, Northern Sotho, Sepedi",
        "or": "Oriya",
        "pa": "Panjabi, Punjabi",
        "pl": "Polish",
        "ps": "Pushto, Pashto",
        "pt": "Portuguese",
        "pt-BR": "Portuguese (Brazil)",
        "pt-PT": "Portuguese (Portugal)",
        "ro": "Romanian, Moldavian, Moldovan",
        "ru": "Russian",
        "sa": "Sanskrit",
        "sh": "Serbo-Croatian",
        "si": "Sinhala, Sinhalese",
        "sk": "Slovak",
        "sl": "Slovenian, Slovene",
        "so": "Somali",
        "sq": "Albanian",
        "sr": "Serbian",
        "sv": "Swedish",
        "sw": "Swahili (macrolanguage)",
        "ta": "Tamil",
        "te": "Telugu",
        "th": "Thai",
        "tl": "Tagalog",
        "tlh": "Klingon, tlhIngan-Hol",
        "tn": "Tswana, Setswana",
        "tr": "Turkish",
        "ts": "Tsonga",
        "tw": "Twi",
        "uk": "Ukrainian",
        "ur": "Urdu",
        "uz": "Uzbek",
        "ve": "Venda",
        "vi": "Vietnamese",
        "xh": "Xhosa",
        "zh": "Chinese",
        "zh-TW": "Chinese (Taiwan)",
        "zu": "Zulu"
    };
    optionList = "";
    for (lang in languageList) {
        optionList += '<option value="' + lang + '">' + languageList[lang] + ' (' + lang + ')' + '</option>';
    }
    $('.combobox').html(optionList);
    $('.combobox').combobox({appendId: "", bsVersion: '3'});
    $('.combobox').on("change", function () {
        $("#" + $(this).attr('id') + "Guessed").fadeOut();
    });
    $("#l1Language").val("French (fr)");
    $("#l2Language").val("English (en)");
    // defining the name attribute
    //~ $( "#l1Language" ).attr("name","l1Language");
    //~ $( "#l2Language" ).attr("name","l2Language");


    $("#delLanguage").on('click', function () {
        if (numLanguages > 2) {
            $("#divLanguage" + numLanguages).remove();
            numLanguages--;
        }
    });
    $("#addLanguage").on('click', function () {
        numLanguages++;
        $("#languageForms").append("<div class='col-sm-6 languageForm' id='divLanguage" + numLanguages + "'><label for='l" + numLanguages + "'>Language " + numLanguages + " text:</label><textarea class='form-control' rows='10' id='l" + numLanguages + "' name='l" + numLanguages + "'></textarea><div class='form-group'><label for='l" + numLanguages + "Language' id='l" + numLanguages + "LanguageLabel'>Language:</label><span style='color:blue;display:none;' id='l" + numLanguages + "LanguageGuessed'> (Guessed)</span><select class='form-control combobox' id='l" + numLanguages + "Language'></select></div></div>");
        $("#l" + numLanguages + "Language").html(optionList);
        $("#l" + numLanguages + "Language").combobox({appendId: "", bsVersion: '3'});
        $("#l" + numLanguages + "Language").val("French (fr)");
        $("#l" + numLanguages + "Language").on("change", function () {
            $("#" + $(this).attr('id') + "Guessed").fadeOut();
        });
        $("#l" + numLanguages).on("change", runGuessLanguage);

    });

    // END OF READY EVENT
});

function calcLanguages() {
    languages = [];
    $('.name a').each(function () {
        var name = $(this).html();
        var languagePattern = new RegExp($('#languagePattern').val());
        if (name.match(languagePattern)) {
            lang = RegExp.$1;
            languages[lang] = true;
        }

    });
    langs = Object.keys(languages.sort());
    $('#languages').val(langs.join(" "));
}

// get the name of an old session after timeout, if there are still uploaded files in the current window
function getSessionId() {
    href = $(".files tr td .name a:first").attr('href');
    if (href && href.match(/php\/files\/([^\/]+)/)) {
        return RegExp.$1;
    }
    return "";
}
