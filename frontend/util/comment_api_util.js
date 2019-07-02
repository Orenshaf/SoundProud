export const fetchComments = (trackId) => (
    $.ajax({
        method: "GET",
        url: "/api/comments",
        data: trackId
    })
)