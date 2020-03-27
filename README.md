# Documentation

<img src="https://github.com/DeniseBischof/CC_VBS/blob/master/pictures/Example.png?raw=true" width="350" height="400" />

## Virtual Pet Bird

### Features
- randomized bird behaviour
- interaction with bird through user input
- music player
- fog animation in background
- custom made pixel art and animations

### Bird Behaviour
The behaviour of the bird is determined by a finite state machine. The bird either reacts to the users input or changes behaviour randomly, according to its current mood. After a certain amount of time, the code checks if the state of the bird can change, then a random function determines if it will change. The probability of the bird staying in the same mood is 75%, except if they are hungry, then it is 100% and can only be changed by the users input.

## What I learned
I learned, that p5 is great, but not for everything. P5 can be amazing for creating visual experiences, but for simple basic functions it can be quite the challenge. I had to drop p5 because it caused a lot of bugs. Gifs are not played natively by p5 and it would mess up my css layers. The audioplayer I added via html also kept breaking down, but since I have disabled p5 there were no issues.

A lot of the animations and visuals were created via CSS which was quite helpful. I tried to create the fog animation via p5 and then with javascript, which were both choppy and very performance heavy. Making the animation with CSS was surprisingly simple and runs very smooth.

A thing I also learned was to keep an eye on responsive design. Since I mainly tested the application on my high resolution gaming pc, I was surprised to find out, that the resolution wouldn't adapt for my lower resolution macbook, even though I added what I supposed were the necessary adjustements.

## What is missing?
There are a lot of enhancements that could be made. For one I wanted to make the environment of the bird also affect its moods (for example rain) and random events to occure. The birds behaviour could also be adapted and its relationship to the user. The user could for example give the bird a name, which would be stored in a database with variables correlating to the users behaviour towards the bird, which would in turn change the birds behaviour.

