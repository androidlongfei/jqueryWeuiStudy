// var HOST = "http://10.4.52.32:8000";
var HOST = "http://192.168.0.107:8000";
var COUNT = 10; // 默认每次加载10条

/**
 * [解决ios点击事件延迟300ms]
 * @return {[type]} [description]
 */
$(function() {
    FastClick.attach(document.body);
});

$(document.body).pullToRefresh().on("pull-to-refresh", function() {
    setTimeout(function() {
        refresh();
    }, 1000);
});

/**
 * [refresh 下拉刷新]
 * @return {[type]} [description]
 */
function refresh() {
    var start = $("#list > a").size();
    var url = HOST + '/paging';
    console.log('start', start);
    pagingQueryData(url, start, COUNT, refreshSuccess, refreshFailed);
}

function refreshSuccess(data) {
    console.log('获取数据成功', data);
    var elments = assemblyElement(data.testData);
    var total = data.total;
    $("#list").empty();
    $("#list").append(elments);
    $("#time").text(moment().format('YYYY-MM-DD HH:mm:ss'));
    $(document.body).pullToRefreshDone();
}

function refreshFailed(error) {
    console.log('获取数据失败', error);
    $(document.body).pullToRefreshDone();
}

function assemblyElement(data) {
    var elements = _.map(data, function(value, key) {
        return getItem(value);
    });
    return elements;
}

function getItem(itemData) {
    var content = '<a class="weui-cell weui-cell_access" href="javascript:;">' +
        '<div class="weui-cell__bd">' +
        '<p>' + itemData.title + '</p>' +
        '</div>' +
        '<div class="weui-cell__ft">' + itemData.number +
        '</div>' +
        '</a>';
    return content;
}
