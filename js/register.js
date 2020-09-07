function validateForm() {

    var username = document.myForm.username.value;
    var email = document.myForm.email.value;
    var password = document.myForm.password.value;
    var repassword = document.myForm.repassword.value;
    if (username.length < 3 || username.length > 30) {
        alert("Độ dài username từ 3 - 30 ký tự.");
        document.myForm.username.focus();
        return false;
    } else if (email.length < 5) {
        alert("Độ dài email từ 5 ký tự.");
        document.myForm.email.focus();
        return false;
    } else if (password.length < 8 || password.length > 30) {
        alert("Độ dài password từ 8 - 30 ký tự.");
        document.myForm.password.focus();
        return false;
    } else if (repassword.length < 8 || repassword.length > 30) {
        alert("Độ dài re-password từ 8 - 30 ký tự.");
        document.myForm.repassword.focus();
        return false;
    } else if (password != repassword) {
        alert("Mật khẩu phải giống nhau!");
        document.myForm.repassword.focus();
        return false;
    }

    alert("Đăng ký thành công!");
    return true;
}