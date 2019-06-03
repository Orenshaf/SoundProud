export const fetchTracks = () => (
    $.ajax({
        method: "GET",
        url: "/api/tracks",
    })
)

export const uploadTrack = (formTrack) => (
    $.ajax({
        method: 'POST',
        url: "/api/tracks",
        data: formTrack,
        contentType: false,
        processData: false
    })
)
