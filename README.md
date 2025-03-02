# DGMD E-28 - Assignment 2c: Tic Tac Toe Part 3

## Summary
Your assignment is to complete the Tic Tac Toe game started in the last two assignments.

## Ground Rules
- You may use **HTML, CSS, and JavaScript**.
- **DO NOT** look up how to do this online.
- You must follow each part as specified.
- Use the techniques reviewed in class and in the notes.
- You may host anywhere you want, but it must be online.
- After meeting the requirements, you may add enhancements or variations.

## Tasks
1. **Copy `ttt4.html` to `ttt5.html`**
    - Remove the popup that occurs when a user clicks on a square.

2. **Add a "Start Game" button**
    - Clicking the button should clear the board.

3. **Handle Player Moves**
    - When a user clicks a square, place `X` or `O` in the square.
    - Use `map()` to create an array `moves` that holds the current state of the board:
        - Example board:
          ```
          X | O | O
          X | X |   
          O |   |   
          ```
        - Corresponding array:
          ```
          ["X", "O", "O", "X", "X", "-", "O", "-", "-"]
          ```

4. **Check for a Winner or Stalemate**
    - Create an array `winConditions` of 8 strings representing possible wins.
    - Example:
      ```
      ["XOO", "XX-", "O--", "XXO", ...]
      ```
    - Identify if any condition is `XXX` or `OOO`.
    - If no winner and no empty squares (`-`), declare a **stalemate**.
    - If a win/stalemate is detected:
        - Display the game status.
        - **Prevent further moves** until the "Start Game" button is clicked.

## Deliverables
- Submit `ttt5.html` **hosted online**.
- Answer the following question:
    - **Identify an area of JavaScript code in your final solution (ttt5) that you feel really good about and explain why.**

## Rubric
- **20 points**: Creativity & Effort
- **50 points**: Meets requirements
- **30 points**: Overall quality/technical proficiency

**Note:** The assignment must be running online for credit.

