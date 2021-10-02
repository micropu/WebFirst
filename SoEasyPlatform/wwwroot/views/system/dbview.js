﻿btnEdit2.onclick = function ()
{
    btnEdit.click();
}
btnDel2.onclick = function () {
    btnDel.click();
}
btnAddView.$Open("#divView", {
    title: "创建类",
    w: 600,
    h: 300,
    validate: function () {
        var gridInfo = divGrid.$GridInfo();
        if (txtDbId.value == null || txtDbId.value == "" || txtDbId.value == "0") {
            "请选择数据库".$Alert();
            return false;
        } else {
            return true;
        }
    },
    yes: function () {
        btnProject.$Loading();
        frmView.$Form({
            url: _root + "codetable/CreateTableByView",
            callback: function (msg) {
                btnProject.$CloseLoading();
                if (msg.IsSuccess) {
                    $sugar.$CloseAll(divProject.getAttribute("dataindex"));
                    btnSearch.click();
                }
                msg.Data.$Alert();
            }
        });
    },
    btn: ['创建类', '关闭']
});