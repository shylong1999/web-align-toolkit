var tbl;
var table;
function chonDLgoc() {
    document.getElementById("dlcs1").checked = false;
    document.getElementById("data-exsit").disabled = false;
    document.getElementById("urlnn1").disabled = true;
    document.getElementById("urlnn2").disabled = true;
    // document.getElementById("btnModalTxt").hidden = true;
    $('#btnModalTxt').addClass('hidden');
}

function chonDLkhac() {
    document.getElementById("dlcs").checked = false;
    document.getElementById("data-exsit").disabled = true;
    document.getElementById("urlnn1").disabled = false;
    document.getElementById("urlnn2").disabled = false;
    // document.getElementById("btnModalTxt").hidden = false;
    $('#btnModalTxt').removeClass('hidden');
}

$('#saveInput').on('click', function () {
    $('#grpInput').removeClass('hidden');
    var viText = $('#viTextTxt').val().trim();
    var kmText = $('#kmTextTxt').val().trim();
    $('#viInput').val(viText);
    $('#kmInput').val(kmText);

});


document.getElementById("extract-vb").onclick = function () {
    document.getElementById("modal_ghvb").style.display = "block";
    document.getElementById("modal_cau").style.display = "none";
    var isDeFault = $('#dlcs').is(':checked');
    $('#saveData').addClass('hidden');
    if (isDeFault){
        // callTool('h/callTool');

        // loadData()
        if (tbl) {
            tbl.destroy();
        }
        loadDataTextAlign();
        // readFile('/h/readFile');
    }else {
        var obj = {
            "viText": $('#viInput').val().trim(),
            "kmText": $('#kmInput').val().trim()
        }
        if (tbl) {
            tbl.destroy();
        }
        writeToFileTextAlign('align/textAlign/writeToFile',obj);
    }
};

document.getElementById("extract-cau").onclick = function (e) {
    $('#saveData').removeClass('hidden');
    document.getElementById("modal_cau").style.display = "block";
    document.getElementById("modal_ghvb").style.display = "none";
    console.log($('#dlcs').is(':checked'));
    var isDeFault = $('#dlcs').is(':checked');
    if (isDeFault){
        // callTool('h/callTool');

        // loadData()
        if (table) {
            table.destroy();
        }
        loadData();
        // readFile('/h/readFile');
    }else {
        var obj = {
            "viText": $('#viInput').val().trim(),
            "kmText": $('#kmInput').val().trim()
        };
        if (obj.viText!=='' && obj.kmText!==''){
            if (tbl) {
                tbl.destroy();
            }
            writeToFile('h/writeToFile',obj);
        }else alert("Nhập văn bản");

    }
    $('#extract-cau').prop('disable', true);
    // console.log($('#dlcs1').is(':checked'));
    // loadData();

}

function writeToFile(URL, data) {
    $.ajax({
        url: URL,
        type: "POST",
        data: data,
        success: function (response) {
            console.log(response);
            if (response.code === 200) {
                console.log(response.message)
                // callTool('h/callTool');
                // readFile('/h/readFile');

            }
        },
        error: function (err) {
            console.log(err)
        }
    });
}


function writeToFileTextAlign(URL, data) {
    $.ajax({
        url: URL,
        type: "POST",
        data: data,
        success: function (response) {
            if (response.code === 200) {
                // console.log(response.message)
                loadDataTextAlign();
                // callTool('h/callTool');
                // readFile('/h/readFile');

            }
        },
        error: function (err) {
            console.log(err)
        }
    });
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

function callTool(URL) {
    $.ajax({
        url: URL,
        type: "GET",
        success: function (response) {
            if (response.code === 200) {
                readFile('/h/readFile');
            } else alert(response.message);
        },
        error: function (err) {
            console.log(err)
        }
    });
}

function readFile(URL) {
    console.log(URL);
    $.ajax({
        url: URL,
        type: "GET",
        success: function (response) {
            if (response.code === 200) {
                // loadTable('/align/all-data', 1, 10);
                loadData();
            }
        },
        error: function (err) {
            console.log(err)
        }
    });
}

function loadTable(URL, p, c) {
    URL = URL + '?p=' + p + '&c=' + c;
    console.log(URL);
    $('#modal_cau tbody').html('');
    $.ajax({
        url: URL,
        type: "GET",
        success: function (data) {
            var listData = data.data;
            if (listData) {
                console.log(listData);
                listData.forEach(function (item) {
                    var html = ` <tr>
                        <td><input id="${item.id}" type="checkbox" name="name[]"></td>
                        <td>${item.lang1}</td>
                        <td>${item.lang2}</td>
                        <td>${item.scope}</td>
                        <td>
                            <button style="width: 40%;height: 30px;" id="detele" type="button" onclick="deleteRow(${item.id})" class="btncon">Xoá</button>
                            <button style="width: 40%;height: 30px;margin-left:10px;" id="edit" data-toggle="modal" data-target="#popup"
                                    class="btncon" onclick="onClickPopUp(${item.id})">Edit
                            </button>
                        </td>
                    </tr>`;
                    $('#modal_cau tbody').append(html);
                });
            }
        },
        error: function (err) {
            console.log(err)
        }
    });
}

function onClickPopUp(URL,id) {
    $('#popup').modal('show');
    URL= URL+ '?id=' +id;
    console.log(URL);
    $.ajax({
        url: URL,
        type: "GET",
        success: function (response) {
            console.log(response);

            if (response.code === 200) {
                var obj = response.data[0];
                console.log(obj);
                $('#viText').val(obj.text1);
                $('#idAlign').val(obj.id);
                $('#scoreAlign').val(obj.score);
                $('#kmText').val(obj.text2);
            }
        },
        error: function (err) {
            console.log(err)
        }
    });

}


function deleteRow(id, table) {
    var obj = {
        id: id,
        status: 3
    }
    $.ajax({
        // url: 'align/deleteRow?id=' + id,
        url: 'align/sortDelete',
        type: "PUT",
        data: obj,
        success: function (response) {
            if (response.code === 200) {
                // loadTable('/align/all-data', 1, 10);
                console.log("Xóa thành công");
                console.log(response.message);
                table.ajax.reload(null,false);
            }

        },
        error: function (err) {
            console.log(err)
        }
    });
}

function deleteRowText(id, table) {
    $.ajax({
        url: 'align/textAlign/deleteText?id=' + id,
        type: "DELETE",
        success: function (response) {
            if (response.code === 200) {
                // loadTable('/align/all-data', 1, 10);
                console.log("Xóa thành công");
                table.ajax.reload(null, false);
            }

        },
        error: function (err) {
            console.log(err)
        }
    });
}

function updateAlign(URL, obj, table) {
    console.log("obj--->", obj);
    var o = {
        id: obj.id,
        status: 2
    }
    $.ajax({
        url: URL,
        type: "PUT",
        data: obj,
        success: function (response) {
            if (response.code === 200) {
                console.log(response.message)
                copyRow('align/addRow',obj);
            }
        },
        error: function (err) {
            console.log(err)
        }
    });
}
function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}
function loadAndFile(URL){
    $.ajax({
        type: "GET",

        url: URL,

        success: function (data,xhr,result) {
            console.log(data)
            download('text.txt',data)

        },
        error: function (e) {

            // $("#result").text(e.responseText);
            // console.log("ERROR : ", e);
            // $("#btnSubmit").prop("disabled", false);

        }
    });
}
$('#exportFile').click(function(e) {
    // e.preventDefault();  //stop the browser from following
    // window.location.href = 'public/txt/out_km1.txt';
    $.ajax({
        type: "GET",

        url: "/align/allBest",

        success: function (data,xhr,result) {
            console.log(data)
            if (data.code === 200){
                loadAndFile('/h/dow');
            }
            // download('text.txt',data)

        },
        error: function (e) {

            // $("#result").text(e.responseText);
            // console.log("ERROR : ", e);
            // $("#btnSubmit").prop("disabled", false);

        }
    });
});

$('#submitFile').on('click',function () {
    var form = $('#fileUploadForm')[0];
    console.log("form",form);

    var data = new FormData(form);
    console.log("data",data);
    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "/h/importFile",
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data,file,result) {
            console.log(data);
            console.log(file);
            console.log(result);
            if (result.status === 200){
                $("#example-input-file").val(null);
                readFile('/h/readFile?fileName='+file)
            }else alert("chonj lai file");


        },
        error: function (e) {
            console.log("e",e);
            alert("chonj lai file");
            // $("#result").text(e.responseText);
            // console.log("ERROR : ", e);
            // $("#btnSubmit").prop("disabled", false);

        }
    });
});

function copyRow(URL,obj) {
    console.log(URL)
    console.log(obj)
    $.ajax({
        url: URL,
        type: "POST",
        data: obj,
        success: function (response) {
            console.log(response)
            if (response.code === 200) {
                console.log(response.message)
                console.log("copy oke");
                table.ajax.reload(null, false);
                // loadTable('/align/all-data', 1, 10);
            }
        },
        error: function (err) {
            console.log(err)
        }
    });
}
function PostToServer(url, dataJson, callbackSuc, callbackError, buttonLoading) {
    $('div.pace').removeClass().addClass('pace  pace-active');
    var o = {};
    if (!dataJson || dataJson == null) {
        dataJson = {};
    } else {
        for (var idx in dataJson) {
            var val = dataJson[idx];
            if ((typeof val) == 'string') {
                o[idx] = htmlEntities(val);
            } else {
                o[idx] = val;
            }
        }
    }
    $('#' + buttonLoading).button('loading');
    $.ajax({
        type: "POST",
        url: htmlEntities(url),
        data: JSON.stringify(o),
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (val) {
            callbackSuc(val);
            $('#' + buttonLoading).button('reset');
            $('div.pace').removeClass().addClass('pace  pace-inactive');
        },
        error: function (val) {
            if (callbackError != null)
                callbackError(val);
            $('#' + buttonLoading).button('reset');
            $('div.pace').removeClass().addClass('pace  pace-inactive');
        }
    });
};
var ids = [];

function exportTo(type) {

    $('#modal_cau').tableExport({
        filename: 'table_%DD%-%MM%-%YY%',
        format: type,
        cols: '4,2,3',
        head_delimiter:'\t',
        column_delimiter:'\t',
    });

}

function loadData() {
     table = $('#senAlignTable').DataTable({
        "processing": true,
        // "dom": 'lrtip',
        "language": {
            "lengthMenu": "Hiển thị _MENU_ dòng trên trang",
            "zeroRecords": "Nothing found - sorry",
            "info": "Hiển thị trang _PAGE_ trên _PAGES_",
            "infoEmpty": "Không tìm thấy dòng",
            "infoFiltered": "(filtered from _MAX_ total records)"
        },
        // "scrollY": '50vh',
        // "scrollCollapse": true,
        "ajax": "align/allDraft",
        'columnDefs': [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, full, meta) {
                    return '<input type="checkbox" name="id[]" value="' + $('<div/>').text(data).html() + '">';
                }

            },
            {
                'targets': 6,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, full, meta) {
                    // return '<input type="checkbox" name="id[]" value="' + $('<div/>').text(data).html() + '">';
                    return `<select><option value="">zz</option><option value="">vv</option></select> `;
                }

            }],
        "select": {
            "style": 'os',
            "selector": 'td:first-child'
        },
        "columns": [
            {
                data: null,
                defaultContent: '',
                className: 'select-checkbox',
                orderable: false
            },
            {"data": "text1"},
            {"data": "text2"},
            {"data": "score"},
            {"data": "status_name"},
            {
                'orderable': false,
                'searchable': false,
                'className': 'center', //class của từng ô trong cột, tính cả ô trong thead và tfoot
                'defaultContent': '<button type="button" class="btn btn-danger">Bỏ</button>'
            }
        ],
    });
    $('#example-select-all').on('click', function () {
        var rows = table.rows({'search': 'applied'}).nodes();
        $('input[type="checkbox"]', rows).prop('checked', this.checked);
    });
    $('#senAlignTable tbody').on('change', 'input[type="checkbox"]', function () {
        if (!this.checked) {
            var el = $('#example-select-all').get(0);
            if (el && el.checked && ('indeterminate' in el)) {
                el.indeterminate = true;
            }
        }
    });
    $('#senAlignTable tbody').on('click', 'tr button', function () {
        var data = table.row($(this).parents('tr')).data();
        console.log(data);
        deleteRow(data.id, table);
    });
    // $('#senAlignTable tbody').on('click', 'tr td:first-child', function () {
    //     // console.log("oke")
    //     // console.log($(this).find('td').val());
    //     // // var data = table.row(this).data();
    //     // ids.push();
    //
    //     $(this).toggleClass('selected');
    // });
    $('#senAlignTable tbody').on('click', 'tr td:not(:last-child):not(:first-child)', function () {
        // var id = $(this).attr('class');

        var data = table.row(this).data();
        onClickPopUp('align/getAlign',data.id);

        $('#saveEditing').on('click', function () {
            var obj = {
                id: parseInt($('#idAlign').val()),
                viText: $('#viText').val().trim(),
                kmText: $('#kmText').val().trim(),
                scope: $('#scoreAlign').val()
            }
            updateAlign('align/updateStatus', obj, table);

        });
    });
    $('#saveData').on('click', function () {
        // var rows = table.rows('.selected').data();
        var rows = $( table.$('input[type="checkbox"]').map(function () {
            return $(this).prop("checked") ?  table.row($(this).parents('tr')).data() : null;
        } ) );
        // var data = table.rows('.selected').data().data();
        console.log(rows.length);
        for (let i = 0; i < rows.length; i++) {
            console.log(rows[i])
            // checkRow('align/checkRow',rows[i].id);
            ids.push({id:rows[i].id});
        }
        var obj ={
            data : ids
        }
        console.log(obj);

        saveManyRow('align/saveManySentences',obj,table);


    })

}

function saveManyRow(URL,ids,table) {
    $.ajax({
        url: URL,
        type: "POST",
        data: ids,
        success: function (response) {
            if (response.code === 200) {
                console.log(response.message);
                table.ajax.reload(null, false);
            }
        },
        error: function (err) {
            console.log(err)
        }
    });
}

function checkRow(URL,id) {
    $.ajax({
        url: URL+'?id='+id,
        type: "PUT",
        data: id,
        success: function (response) {
            if (response.code === 200) {
                console.log(response.message);
            }
        },
        error: function (err) {
            console.log(err)
        }
    });
}
function loadDataTextAlign() {
    tbl = $('#textAlignTable').DataTable({
        "processing": true,
        // "dom": 'lrtip',
        "language": {
            "lengthMenu": "Hiển thị _MENU_ dòng trên trang",
            "zeroRecords": "Nothing found - sorry",
            "info": "Hiển thị trang _PAGE_ trên _PAGES_",
            "infoEmpty": "Không tìm thấy dòng",
            "infoFiltered": "(filtered from _MAX_ total records)"
        },
        // "scrollY": '50vh',
        // "scrollCollapse": true,
        "ajax": "align/textAlign/getAllTextAlign",
        'columnDefs': [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, full, meta) {
                    // return '<input type="checkbox" name="id[]" value="' + $('<div/>').text(data).html() + '">';
                    return `<select><option value="">zz</option><option value="">vv</option></select> `;
                }
            }],
        "select": {
            "style": 'os',
            "selector": 'td:first-child'
        },
        "columns": [
            {
                data: null,
                defaultContent: '',
                className: 'select-checkbox',
                orderable: false
            },
            {"data": "lang1"},
            {"data": "lang2"},
            {"data": "score"},
            {
                'orderable': false,
                'searchable': false,
                'className': 'center', //class của từng ô trong cột, tính cả ô trong thead và tfoot
                'defaultContent': '<button type="button" class="btn btn-danger"><span class="glyphicon glyphicon-trash"></span> Bỏ</button>'
            }
        ],
    });
    $('#textAlignTable tbody').on('click', 'tr button', function () {
        var data = tbl.row($(this).parents('tr')).data();
        deleteRowText(data.id, tbl);
    });

    $('#textAlignTable tbody').on('click', 'tr td:not(:last-child):not(:first-child)', function () {
        // var id = $(this).attr('class');

        var data = tbl.row(this).data();
        onClickPopUp('align/textAlign/getTextAlign',data.id);
        $('#saveEditing').on('click', function () {
            var obj = {
                id: parseInt($('#idAlign').val()),
                viText: $('#viText').val().trim(),
                kmText: $('#kmText').val().trim(),
                scope: $('#scoreAlign').val()
            }
            updateAlign('align/textAlign/updateText', obj, tbl);

        });
    });

}

