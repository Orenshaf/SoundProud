export const createComment = comment => (
    $.ajax({
        method: "POST",
        url: "/api/comments",
        data: {comment}
    })
)