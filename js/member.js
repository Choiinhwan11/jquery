$(function(){
    $('#join').submit(function(){
        var user_id = $('input[name="user_id"]').val();
        if (!user_id) {
            alert("아이디를 입력하세요.");
            $('input[name="user_id"]').focus();
            return false;
        }

        var user_pw = $('input[name="user_pw"]').val();
        if (!user_pw) {
            alert("비밀번호를 입력하세요.");
            $('input[name="user_pw"]').focus();
            return false;
        }

        if (!$('input[name="gender"]').is(':checked')) {
            alert("성별을 입력하세요.");
            $('input[name="gender"]:eq(1)').prop('checked', true); // 기본값으로 설정합니다.
        }

        var email = $('input[name="email"]').val();
        if (!email) {
            alert("이메일을 입력하세요.");
            $('input[name="email"]').focus();
            return false;
        }

        var url = $('input[name="url"]').val();
        if (!url) {
            alert("URL을 입력하세요.");
            $('input[name="url"]').focus();
            return false;
        }

        var phone = $('input[name="phone"]').val();
        if (!phone) {
            alert("전화번호를 입력하세요.");
            $('input[name="phone"]').focus();
            return false;
        }
        if (!$('input[name="hobby"]:checked').length > 0) {
            alert("취미를 선택하세요.");
            $('input[name="hobby"]:eq(1)').prop('checked', true);
        }
        if($('select[name="job"]>option:selected').index()==0){
            alert("직업을 선택하세요.");
            $('select[name="job"]>option:eq(1)').prop('selected',true);
            return false;
        }

        var gender = $('input[name="gender"]:checked').val();
        var hobby = $('input[name="hobby"]:checked');
        var hobby_val = "";
        hobby.each(function(){
            hobby_val += $(this).val();
        });

        var job = $('select[name="job"] > option:selected').val();
        var result = '<ul>'
        +'<li> 아이디:' + user_id + '</li>'
        +'<li> 비밀번호:' + user_pw + '</li>'
        +'<li> 성별:' + gender + '</li>'
        +'<li> 이메일:' + email + '</li>'
        +'<li> 홈페이지:' + url + '</li>'
        +'<li> 핸드폰:' + phone + '</li>'
        +'<li> 취미:' + hobby_val + '</li>'
        +'<li> 직업:' + job+ '</li>'
        +'</ul>';
        
        //빽틱사용 ~
        var result2= '<ul>'
        +'<li> 아이디:' + user_id + '</li>'
        +'<li> 비밀번호:' + user_pw + '</li>'
        +'<li> 성별:' + gender + '</li>'
        +'<li> 이메일:' + email + '</li>'
        +'<li> 홈페이지:' + url + '</li>'
        +'<li> 핸드폰:' + phone + '</li>'
        +'<li> 취미:' + hobby_val + '</li>'
        +'<li> 직업:' + job+ '</li>'
        +'</ul>';

        $('body').html(result);
        return false;        
    });
});
