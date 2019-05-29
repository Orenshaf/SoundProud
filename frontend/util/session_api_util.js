export const signupCheckEmail = email => (
    $.ajax({
        method: 'GET',
        url: '/api/users/check_email',
        data: {email}
    })
)

export const signup = user => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: {user}
    })
);

export const loginCheckEmail = email => (
    $.ajax({
        method: 'GET',
        url: '/api/session/check_email',
        data: { email }
    })
)

export const login = user => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: {user}
    })
)

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: 'api/session'
    })
)
