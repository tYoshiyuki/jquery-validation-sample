jQuery.validator.addMethod("isZip", function(value, element) {
    return this.optional( element ) || /^\d{3}-?\d{4}$/.test( value );
}, '郵便番号の入力内容が不正です。');

$("#UserForm").validate({
    errorElement: "span",
    errorClass: "text-danger",
    rules: {
        name: {
            required: true,
            maxlength: 20
        },
        zip: {
            isZip: true,
        },
    },
    messages: {
        name: {
            required: "名前を入力してください。",
            maxlength: "名前は20文字以内で入力してください。"
        },
    },
});