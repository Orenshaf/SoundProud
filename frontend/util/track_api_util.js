export const fetchTracks = () => (
    $.ajax({
        method: "GET",
        url: "/api/tracks",
    })
)

export const fetchTrack = (id) => (
    $.ajax({
        method: "GET",
        url: `api/tracks/${id}`
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
