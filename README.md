INSERT MANDATORY GIF

# Project Title

Text about the project. This would also be a great place to link the game on Netlify.

# Installation

Add the installation instructions.

# Code Review

Code review written by [Tommi Uusitalo](https://github.com/tpku).

Probably the best useless page out there!

1. `main.css:16-97` - Should probably isolate the font-family property to the body selector. No use for repetition with only 1 font in use.
2. `main.css:138-155` - 2 media queries seem unnecessary with only 1 min-width in use?
3. `script.js:42 & 55` - The content of these listeners could've been executed with a function which accepts variables for each listener.
4. `script.js:3` - "Const heading" is never called? Could've been removed.
5. `fonts` - Files that never is used should be removed.

# Testers

Tested by the following people:

1. Ruben Olander
2. Gustav Enoksson
