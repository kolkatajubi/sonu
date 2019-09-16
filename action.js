$(document).ready(()=> {
    var user={}
    $(".submitbutton").click(async()=>{
        let username=$("#username").val()
        let email=$("#emailadd").val()
        let mobile=$("#number").val()
        let signupStatus = await testapi.signup(username,email,mobile);
        if (signupStatus.status=="success"){
            $("#register-success").show()
            $(".FormContainer").hide()
        }
        $("#signup-error").val(signupStatus.data)
    })

    $(".SearchSubmit").click(async()=>{
        user = testapi.search(text);
        if (user.status == "success"){
            
            $(".TableContainer").append(
                '<li>' + user.data.username + "</li>"+
                '<li>' + user.data.email + "</li>"+
                '<li>' + user.data.mobile + "</li>"
              );
        }
    })
})