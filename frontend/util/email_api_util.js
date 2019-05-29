export const checkEmail = email => (
    $.ajax({
        method: 'GET',
        url: '/api/users/check_email',
        data: { email }
    })
)