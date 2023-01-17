# Rock, Paper, Scissors

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)

I built a website that allows for a user to play a Harry Potter version of Rock, Paper, Scissors. When the website loads, the user will be able to choose between "Classic" and "Difficult" type of the game. Once the user has made a selection, they will then be able to choose a "spell" from a set that corresponds to that specific game type. The computer will then select a random spell from the same set, at which time, both selections will be evaluated and a winner declared while adding to their score. A new button will appear allowing the user to select a different game type and continue gameplay.

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)

1. A user can fork and clone the following repository: https://github.com/jsahim/rock-paper-scissors
2. Type `rock-paper-scissors` to move into the root directory
3. Open the repository in your preferred text editor

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)

![Screenshot 2023-01-17 at 12 58 38 PM (2)](https://user-images.githubusercontent.com/107663888/212979209-b1b85ed2-e5a6-401c-9065-82f656dd5a69.png)


### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)

We were assigned this project on Tueday January 10th and had until Tueday January 17th to complete the project. I spent 3-4 hours a day, and had the majority of the project completed by Sunday. We are in our 6th week of Mod 1 at Turing. 


### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)

- Jeff Sahim: https://github.com/jsahim

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)

1. Solidify and demonstrate your understanding of: DRY JavaScript and event delegation to handle similar event listeners
- I wrote my JS code with the intent of having functions that adhere to the SRP and cut down on repetition. I have also structured my event listeners to launch at appropriate times without conflicting with other events on the website. 
2. Understand the difference between the data model and how the data is displayed on the DOM
- I created two seperate classes to be utilized as the data model, while allowing our main Javascript file to build out the functionality of the website. I made sure to update the data model and have it be the driving force behind any DOM updates. 
3. Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge
- I went into this project using the Required Features and Architecture sections of the spec as my driving forces. Ultimately I allowed myself to build out my app by moving in a linear direction and once a problem arose, I sought guidance from online materials or refactored my HTML, CSS and JS code to accommodate this obstacle.


### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)

Wins: 
 1. I was able to create a style and UI that matched my vision and did not have to compromise much.
 2. I experimented with new JS code that I was not familiar with and successfully implement it.
 3. This was my first project that I really felt that I was creating something and not just acting in response to an assignment. I'm truly proud of what I have created for the first time.

Challenges:
 1. I ran into an issue passing arguments from a function that was contained within the setTimeout function, but after some research I found the proper syntax to make that work.
 2. I got held up trying to determine how to write functionality that would adhere to the DOM v Data Model requirement, but I decided to move forward and “just make the app work”. Then I refactored the code to align with the appropriate model later on.