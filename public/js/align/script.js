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
    if (isDeFault){
        // callTool('h/callTool');

        // loadData()
        loadDataTextAlign();
        // readFile('/h/readFile');
    }else {
        var obj = {
            "viText": $('#viInput').val().trim(),
            "kmText": $('#kmInput').val().trim()
        }
        writeToFile('h/writeToFile',obj);
    }
};

document.getElementById("extract-cau").onclick = function (e) {
//     $('#tbody').append('');

//     e.preventDefault();
//     callTool('/h/callFile');
//     readFile('/h/readFile');
// // PostToServer('/align/add', o, function (data) {
// //     console.log(data);
// // }, null, '');

    document.getElementById("modal_cau").style.display = "block";
    document.getElementById("modal_ghvb").style.display = "none";
    console.log($('#dlcs').is(':checked'));
    var isDeFault = $('#dlcs').is(':checked');
    if (isDeFault){
        // callTool('h/callTool');

        // loadData()

        readFile('/h/readFile');
    }else {
        var obj = {
            "viText": $('#viInput').val().trim(),
            "kmText": $('#kmInput').val().trim()
        }
        writeToFile('h/writeToFile',obj);
    }
    // console.log($('#dlcs1').is(':checked'));
    // loadData();

}

function writeToFile(URL, data) {
    $.ajax({
        url: URL,
        type: "POST",
        data: data,
        success: function (response) {
            if (response.code === 200) {
                console.log(response.message)
                // callTool('h/callTool');

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

function onClickPopUp(id) {
    $('#popup').modal('show');
    $.ajax({
        url: 'align/getAlign?id=' + id,
        type: "GET",
        success: function (response) {
            if (response.code === 200) {
                var obj = response.data[0];
                console.log(obj);
                $('#viText').val(obj.lang1);
                $('#idAlign').val(obj.id);
                $('#scoreAlign').val(obj.scope);
                $('#kmText').val(obj.lang2);
            }
        },
        error: function (err) {
            console.log(err)
        }
    });

}

$('#').on('click', function () {
    $('table tr').each(function (a, b) {
        console.log(a, b);


    });
})


function deleteRow(id, table) {
    $.ajax({
        // url: 'align/deleteRow?id=' + id,
        url: 'align/sortDelete?id=' + id,
        type: "PUT",
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

// function deleteRow(id, table) {
//     $.ajax({
//         url: 'align/deleteRow?id=' + id,
//         type: "DELETE",
//         success: function (response) {
//             if (response.code === 200) {
//                 // loadTable('/align/all-data', 1, 10);
//                 console.log("Xóa thành công");
//                 table.ajax.reload(null, false);
//             }
//
//         },
//         error: function (err) {
//             console.log(err)
//         }
//     });
// }

function updateAlign(URL, obj, table) {
    console.log("obj--->", obj);
    $.ajax({
        url: URL,
        type: "PUT",
        data: obj,
        success: function (response) {
            if (response.code === 200) {
                console.log(response.message)
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

function loadData() {
    var table = $('#senAlignTable').DataTable({
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
        "ajax": "align/all-data",
        'columnDefs': [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, full, meta) {
                    return '<input type="checkbox" name="id[]" value="' + $('<div/>').text(data).html() + '">';
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
            {"data": "scope"},
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
        onClickPopUp(data.id);
        $('#saveEditing').on('click', function () {
            var obj = {
                id: parseInt($('#idAlign').val()),
                viText: $('#viText').val().trim(),
                kmText: $('#kmText').val().trim(),
                scope: $('#scoreAlign').val()
            }
            updateAlign('align/updateRow', obj, table);

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
            ids.push(rows[i].id);
        }
        // if (rows){
        //     rows.forEach(function (row) {
        //         ids.push(row.id);
        //     })
        // }
        console.log(ids);
    })

}
function loadDataTextAlign() {
    var table = $('#textAlignTable').DataTable({
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
        "ajax": "align/senAlign/getAllSenAlign",
        'columnDefs': [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, full, meta) {
                    return '<input type="checkbox" name="id[]" value="' + $('<div/>').text(data).html() + '">';
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
            {"data": "scope"},
            {
                'orderable': false,
                'searchable': false,
                'className': 'center', //class của từng ô trong cột, tính cả ô trong thead và tfoot
                'defaultContent': '<button type="button" class="btn btn-danger">Bỏ</button>'
            }
        ],
    });


}

