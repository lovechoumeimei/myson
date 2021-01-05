// @ts-nocheck
$(function() {
    // 注册点击事件
    $('#link_reg').on('click', function() {
        // console.log(1123);
        $('.login_box').hide()
        $('.reg_box').show()
    })
    $('#link_login').on('click', function() {
        // console.log(1123);
        $('.login_box').show()
        $('.reg_box').hide()
    })


    // 注册账户
    // 1校验
    var form = layui.form
    var layer = layui.layer
        // console.log(form);
    form.verify({
            pwd: [
                /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
            ],
            // 校验两次密码是否一致的规则
            repwd: function(value) {
                var pwd = $('.reg_box [name=password]').val()
                if (pwd !== value) {
                    return '两次密码输入不一致'
                }

            }

        })
        // 调用ajax发送注册请求
        //   监控表单的提交事件
    $('#form_reg').on('submit', function(e) {
        e.preventDefault()
        $.ajax({
            type: "POST",
            url: "/api/reguser",
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('注册失败')
                }
                layer.msg('注册成功')
                $('#link_login').click()
            }
        });
    })

    // 调用ajax登录
    // 监控表单提交事件
    $('#form_login').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "/api/login",
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('登录失败')
                }
                layer.msg('登录成功')
                localStorage.setItem('token', res.token)
                location.href = '/index.html'
            }
        });
    })
})