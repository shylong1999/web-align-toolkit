function chonDLgoc (){
    document.getElementById("dlcs1").checked = false;
    document.getElementById("data-exsit").disabled = false;
    document.getElementById("urlnn1").disabled = true;
    document.getElementById("urlnn2").disabled = true;
}
function chonDLkhac (){
    document.getElementById("dlcs").checked = false;
    document.getElementById("data-exsit").disabled = true;
    document.getElementById("urlnn1").disabled = false;
    document.getElementById("urlnn2").disabled = false;
}
document.getElementById("extract-vb").onclick = function(){
    document.getElementById("modal_ghvb").style.display = "block";
    document.getElementById("modal_cau").style.display = "none";
}
document.getElementById("extract-cau").onclick = function(e){
    $('#tbody').append('');
    document.getElementById("modal_cau").style.display = "block";
    e.preventDefault();
    $.ajax({
        url: '/h/readFile',
        type: "GET",
        success: function(response) {
            console.log(response);
            var i = 1;
            if (response){
                response.forEach(function (item) {

                    var html = ` <tr>
                <td><input id="check_all" type="checkbox" name="name[]"></td>
                <td>${item.lang1}</td>
                <td>${item.lang2}</td>
                <td>${item.score}</td>
                <td>
                    <button style="width: 40%;height: 30px;" id="detele" class="btncon">Xoá</button>
                    <button style="width: 40%;height: 30px;margin-left:10px;" id="edit" onclick="popupOpen()"
                            class="btncon">Edit
                    </button>
                </td>
            </tr>`;
                    i++;
                    $('#modal_cau tbody').append(html);
                    if (i > 50) return;
                })
            }
        },
        error: function (err) {
            console.log(err)
        }
    });
    document.getElementById("modal_ghvb").style.display = "none";

}
document.getElementById("btncheck").onclick = function(){

    var checkboxes = document.getElementsByName('name[]');
    if (document.getElementById("btncheck").checked == false)
    {
        for (var i = 0; i < checkboxes.length; i++){
            checkboxes[i].checked = false;
        }
    }
    else if(document.getElementById("btncheck").checked == true)
    {
        for (var i = 0; i < checkboxes.length; i++){
            checkboxes[i].checked = true;
        }
    }
}
document.getElementById("btncheck_vb").onclick = function(){

    var checkboxes = document.getElementsByName('name2');
    if (document.getElementById("btncheck_vb").checked == false)
    {
        for (var i = 0; i < checkboxes.length; i++){
            checkboxes[i].checked = false;
        }
    }
    else if(document.getElementById("btncheck_vb").checked == true)
    {
        for (var i = 0; i < checkboxes.length; i++){
            checkboxes[i].checked = true;
        }
    }
}
function popupOpen() {

    document.getElementById("popup").style.display = "block";

    document.getElementById("overlay").style.display = "block";

}

// Popup Close

function popupClose() {

    document.getElementById("popup").style.display = "none";

    document.getElementById("overlay").style.display = "none";

}
