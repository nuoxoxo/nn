![](https://i.imgur.com/gUHZxzD.gif)

### *Moving items between stages*

Once added, items can be pressed by the user to be moved to the next stage. If an item is in the last stage and is pressed, it is deleted entirely. Conceptually, you could think of an item which progresses beyond the last stage as a task having been finished or a product which was deployed.

Items can also be long-pressed, moving them backwards to the previous stage, and are deleted if they are moved backwards past the first stage. Conceptually, moving an item backwards to the point of deletion could represent an idea that was rejected or a product that was defective and never made it through the assembly process.

Items cannot skip stages or be deleted midway through the line--they have to be moved all the way beyond one edge or another in order to be removed from the assembly line.

Furthermore, when an item is moved backwards to the previous stage, it should be appended to the list of items currently at that stage. When an item is moved forward to the next stage, it should be prepended to the list for its new stage.
