# SoundProud 
## SoundProud is a [SoundCloud](http://www.soundcloud.com/ "SoundCloud") clone. ##
Click here to visit [SoundProud](https://soundproud.herokuapp.com/#/ "SoundProud"). SoundCloud is an application for artists to upload and share thei music for the masses to listen to. The official site does not utilize React, so I sought out to create a clone which does.

## Technologies ##
+ React, Redux, Ruby, Rails, jQuery, PostgreSQL, and AWS S3
  
 ![Imgur](https://i.imgur.com/Vfpoby9.png)
 
## Features ##
### On SoundProud users are able to: ###
Sign up with a personalized username. The modals were made by dispatching actions which both open and closed the modal and allowed for users to sign in/out without refreshing the page.

![Imgur](https://i.imgur.com/1kGhV9r.png)

SoundCloud is unique in that it's user authentication actually takes 2 steps to sign in and 5 to sign up, whereas most sites render one form to sign you in/up. On SoundCloud the "Create account" and "Sign up" button have the exact same functionality - they only ask for an email or profile-url. Once the email or profile-url are received, if that information exists in the database, then either a sign up form or sign in form are rendered. This made the user authentication process a little more complicated. So in order to create this effect on SoundProud, I first receive an email address and send out an ajax request to see if the user is already signed up, if they are, I render the sign in form, which asks for the password associated with the account, otherwise I render a sign up form, which asks to create a password for the new account.

![Imgur](https://i.imgur.com/38li43p.png)

In the case of a sign up, after the password is received, then a user must give their age and gender. 

![Imgur](https://i.imgur.com/czdTjQF.png)

Once all this information is received the user is signed in, but the modal does not close, instead the user is prompted for a username. 

![Imgur](https://i.imgur.com/4NogR5E.png)

The user authentication proved to be more complicated than I anticipated.
  - - - -
  + Listen to music on SoundProud. The waveform and the trackplayer at the bottom are synchronized. This was done by creating a UI slice of state to dispatch the necessary information (current track's duration, current time and whether or not it was playing) both in the track player and on the track's show page.
![Imgur](https://i.imgur.com/wcA2OyB.png)
  - - - -
## Future Directions ##
 + Users will be able to comment on tracks, but more specifically on a particular timestamp of a track.
 + Users will be able to like music.
 + Users will be able to create playlists.
 + Users will have personal pages with their music and music they liked.


 
