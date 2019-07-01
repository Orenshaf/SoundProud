# SoundProud 
## SoundProud is a [SoundCloud](http://www.soundcloud.com/ "SoundCloud") clone. ##
Click here to visit [SoundProud](https://soundproud.herokuapp.com/#/ "SoundProud"). SoundCloud is an application for artists to upload and share thei music for the masses to listen to. The official site does not utilize React, so I sought out to create a clone which does.

## Technologies ##
+ React, Redux, Ruby, Rails, jQuery, PostgreSQL, and AWS S3
  
 ![Imgur](https://i.imgur.com/Vfpoby9.png)
 
## Features ##
### On SoundProud users are able to: ###
Sign up with a personalized username. The modals were made by dispatching actions which both open and closed the modal and allowed for users to sign in/out without refreshing the page.

<center>![Imgur](https://media.giphy.com/media/iJmtWYxfqgU0qMgujr/giphy.gif)</center>

SoundCloud is unique in that it's user authentication actually takes 5 steps to sign a user up. As shown in the gif above the steps are as follows:

 + First a user is prompted for an email. If the email exists, then the sign in form is rendered, otherwise the sign up form is rendered.
 + After the user gives an email and a password, they are prompted for their age and gender.
 + Finally they are signed in (in the background) and asked for a username.

The user authentication proved to be more complicated than I anticipated because most sites just ask for a username and password on one form, but SoundCloud first checks to see if the user already exists and then prompts the user for their password. 
  - - - -
  + Listen to music on SoundProud. The waveform and the trackplayer at the bottom are synchronized. This was done by creating a UI slice of state to dispatch the necessary information (current track's duration, current time and whether or not it was playing) both in the track player and on the track's show page.
![Imgur](https://i.imgur.com/wcA2OyB.png)
  - - - -
## Future Directions ##
 + Users will be able to comment on tracks, but more specifically on a particular timestamp of a track.
 + Users will be able to like music.
 + Users will be able to create playlists.
 + Users will have personal pages with their music and music they liked.


 
