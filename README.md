# SoundProud 
## SoundProud is a [SoundCloud](http://www.soundcloud.com/ "SoundCloud") clone. ##
Click here to visit [SoundProud](https://soundproud.herokuapp.com/#/ "SoundProud"). SoundCloud is an application for artists to upload and share thei music for the masses to listen to. The official site does not utilize React, so I sought out to create a clone which does.

## Technologies ##
+ React, Redux, Ruby, Rails, jQuery, PostgreSQL, and AWS S3
  
 ![Imgur](https://i.imgur.com/Vfpoby9.png)
 
## Overview ##
### On SoundProud users can: ###
  + Sign up with a personalized username. The modals were made by dispatching actions which both open and closed the modal and allowed for users to sign in/out without refreshing the page.
![Imgur](https://i.imgur.com/1kGhV9r.png)
  - - - -
  + Upload their own music with photos. To store the audio and image files I used AWS S3 and a rails backend. 
![Imgur](https://i.imgur.com/NLpASDc.png)
![Imgur](https://i.imgur.com/ILQaEDi.png)
  - - - -
  + Listen to music on SoundProud. The waveform and the trackplayer at the bottom are synchronized. This was done by creating a UI slice of state to dispatch the necessary information (current track's duration, current time and whether or not it was playing) both in the track player and on the track's show page.
![Imgur](https://i.imgur.com/wcA2OyB.png)
  - - - -
## Future Directions ##
 + Users will be able to comment on tracks, but more specifically on a particular timestamp of a track.
 + Users will be able to like music.
 + Users will be able to create playlists.
 + Users will have personal pages with their music and music they liked.


 
