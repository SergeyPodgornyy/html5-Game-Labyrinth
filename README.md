# Game "Labyrinth" built on HTML5 Canvas. 

Come on, **start playing** and help Mike to collect all badges!

How to find game page?
----------------------

Your game located in folder *labyrinth*. For starting the game, type on your address bar the following path:
```
http://localhost/labyrinth/labyrinth.html
```

###Note!
You need installed Python on your computer

###For Developers
Once you have Limejs installed you only need to run the following command to create a new game:
```
bin/lime.py create labyrinth
```
Just tell it to create the game and give it a name. It will create an HTML file and a JavaScript file in the folders where you need it to run.


When Frog object was created I run the following script of Lime to get Google Closure to update all of dependencies:
```
bin/lime.py update
```

Another nice thing about using Lime built on Google Closure is thst you can call minify script:
```
bin/lime.py build labyrinth -o labyrinth/labyrinth-min.js
```
This will take out all the spaces and all comments. It will combine all of our JavaScript files into one JavaScript file, which I call here "labyrinth minified". This will give you the JavaScript version of your game in a very small single JavaScript file. (But I didn't run this script on my project. If you want to minify, then try).