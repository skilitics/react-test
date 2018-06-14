# React Test

To start:

```
yarn && yarn start
```

* Use React components
* Feel free to add any additional libraries.
* Icons have been provided as React components.
* You don't have to be exact on sizes, but some dimensions have been provided as a guide.
* Use any form of CSS you prefer. CSS Modules are already set up, but you can add Styled components, SASS etc if you like.
* You can use Flexbox/Grid Layout if you wish.
* Feel free to address anything you think might be missing. E.g.: Add additional props if you think they would be useful.

Your `MediaControl` component should accept the following:

``` typescript
// If the video is playing, or not.
playing: boolean; 

// 0-1, current amount of video that has buffered, as a percentage. 0 is nothing, 1 is fully buffered.
buffered: number;

// Full duration of the video, in milliseconds. E.g.: 120000 = 2min.
duration: number;

// How much of the video has elapsed, in milliseconds. E.g.: 97000 = 1min 37sec.
elapsed: number

// Callback for when the Play button is pressed.
onPlay: () => {}

// Callback for when the Pause button is pressed.
onPause: () => {}

// Callback for when the toggle closed captions button is pressed.
onToggleClosedCaptions: () => {}

// Callback for when the play full-screen button is pressed.
onToggleFullScreen: () => {}
```

You do not need to implement the callbacks, i.e.: You do _not_ need to implement full-screen mode.
