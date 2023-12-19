function formCheck(){
    var join = document.join;
    var reg_email = /([0-9a-zA-Z_]+)@([0-9a-zA-Z_-]+)\.([0-9a-zA-Z_]+)/;
    var reg_num = /(?=.*[a-z])(?=.*[0-9])(?=.*[?~!@#$%^&*_-])/;
    
    //아이디검사
    if(!join.id.value){
        alert("아이디를 입력해주세요.");
        join.id.focus();
        return false;
    }
    
    //비밀번호 검사
    if(!join.pw.value){
        alert("비밀번호를 입력해주세요.");
        join.pw.focus();
        return false;
    }
    if(join.pw.value.length<8){
        alert("비밀번호를 8자 이상 입력해주세요.");
        join.pw.focus();
        return false;
    }
    if(!reg_num.test(join.pw.value)){
        alert("비밀번호는 영문, 숫자, 특수문자를 포함하는 형식이어야 합니다");
        join.pw.focus();
        return false;
    }
    
    //회원명 검사
    if(!join.memberName.value){
        alert("회원명을 입력해주세요.");
        join.memberName.focus();
        return false;
    }
    
    //이메일 검사
    if(!join.mail.value){
        alert("이메일을 입력해주세요.");
        join.mail.focus();
        return false;
    }
    if(!reg_email.test(join.mail.value)){
        alert("이메일형식에 맞게 입력해주세요.");
        join.mail.focus();
        return false;
    }

    if(!join.hp.value){
        alert("휴대전화번호를 입력해주세요.");
        join.hp.focus();
        return false;
    }
    if(isNaN(join.hp.value)){
        alert("숫자만 입력해주세요.");
        join.hp.focus();
        return false;
    }
}      
