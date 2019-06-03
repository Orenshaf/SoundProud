export const createTrack = trackForm => (
    $.ajax({
        method: "POST",
        url: `/api/users/${trackForm.userId}/tracks`,
        data: {trackForm},
        contentType: false,
        processData: false
    })
)