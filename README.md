# Kulami
Kulami is an interesting game for two players: one plays with red balls, the other with black balls. 
The game board is created with fields of many positions. Players have to place as many balls as they can on these.
The game ends when no more balls are left, or when nobody can make another step.
At the end, the winner is the player who has more points.

## Restrictions
A user can't place a ball:
* in the field that the other user placed previously a ball in.
* in the row that the other user placed previously a ball in.
* in the column that the other user placed previously a ball in.

## Point calculation
If a user has more balls on a field (more or equal than the number/2 of positions), he will get the number of positions from that field as points.
For example: if on a field of 6 positions the red player has 4 balls, he will get 6 points.
