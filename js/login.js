function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email.length < 5 || email.length > 50) {
        alert("Email có độ dài từ 5 - 50.");
        document.myForm.email.focus();
        return false;
    } else if (password.length < 8 || password.length > 30) {
        alert("Password có độ dài từ 8 - 30");
        document.myForm.password.focus();
        return false
    }

    alert("Đăng nhập thành công");
    return true;

}