function validateSession() {
    if (getQueryVariable("s") == false) {
        return;
    }
    var sessionData = atob(getQueryVariable("s")).split(":");

    if (document.URL.contains("https")) {
        document.getElementById("huebutton").style.display = "none";
    }


    // noinspection JSAnnotator
    name = sessionData[0];
    server = sessionData[1];
    token = sessionData[2];
    oa_socket_startup(name, server,token);
    oa_ui_setskull("Loading...", "606e2ff0-ed77-4842-9d6c-e1d3321c7838");

    if (localStorage.volume == null) {
        __volume = 20;
    } else {
        oa_audio_setvolume(localStorage.volume);
        __volume = localStorage.volume;
    }
}

onload = validateSession;

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}

String.prototype.contains = function(it) { return this.indexOf(it) != -1; };
hue = new HueModule();
