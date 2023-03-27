# aya-traversal 
## Implements an algorithm that traverses a bitmap, finds red squares, and calculates the coordinates of the center of the red square found.
### C#, .NET, System.Drawing, JavaScript

# How it works
### Currently the js version is what works. It will serve as an outline for the C# algorithm.
### The function ,centerFinder, takes a 2d matrix and returns a list of coordinates that are at the center of 3x3 squares of pixels with the value 1 (red in c#). 
### centerFinder will use a helper function called allNeighbors to figure out whether a pixels neighbors are all 1's (which will be red pixels in the c# version)
### allNeighbors takes a matrix, column number, row number, and a value, and runs a series or truth checks to determine whether the provided column and row's neighbors
### all point to whatever value we want, in this case a 1. 
