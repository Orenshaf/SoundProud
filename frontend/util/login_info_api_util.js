export const checkLoginInfo = loginInfo => (
    $.ajax({
        method: 'GET',
        url: '/api/users/check_email',
        data: { loginInfo }
    })
)