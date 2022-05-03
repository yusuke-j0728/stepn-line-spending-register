var params = (new URL(document.location)).searchParams;
// var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var transaction = $('input[name="transaction"] option:selectred').val();
        var currency = $('input[name="currency"] option:selectred').val();
        var amount = $('input[name="amount"]').val();
        var msg = `トランザクション：${transaction} \n通貨：${currency}\n数量：${amount}`;
        sendText(msg);

        return false;
    });
});
