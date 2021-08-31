# Dedcoder Ring

### Description 

A series of JavaScript functions that allow the user to encode or decode a message in a variety of ways.

#### Caesar

Takes in a message, a number of the amount of characters shifted and a boolean. If you are encodeing the message each character will shift through the alphabet
based on the number value entered. For example, if you enter "Encode", 1 and true as the inputs, the output would be "fodpef". The alphabet shifted one letter to the write. Decoding 
would do the opposite of the shift number (i.e. 1 would be -1). 

#### Polybius

The Polybius encoding method takes in a message or a series of numbers and a boolean. If the input is a message, the boolean should be true and the function will return
a series of numberes encoding the message. Changing the boolean to false and entering a series of numbers will decode the numbers back to the message.

#### Substitution

This encoding method takes in a message and a string of 26 unique characters. The function matches the index of each character of the message (i.e a=0) with the index of 
the input string. It then encodes the message based on that string. Decoding will do the opposite.

### Roadmap

The plan is to create a user interface around these three encoding/decoding using React and Bootstrap. I hope to have this up and running sometime in September 2021.
