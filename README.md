# occurrence-frontend-react

This is the frontend app written in ReactJS for the occurence app. The occurrence app takes a value N as input and returns N most frequently occuring words from a text file.
The React app contains a homepage which has an input field, a button and a table. 
The view is formed by 4 components:
* *Input.js*: Contains the input field and the button. Responsible for the AJAX calls to the backend server. It returns the response       received from the AJAX call to its parent; App.js via a callback.
* *Table.js*: Contains structure of the table which will display data. Encloses Row.js as its child.
* *Row.js*: Re-iterable view for a single row of the table. Contails two columns: word and occurrence.
* *Footer.js*: Static footer component.
  
### Validations perfomed:
The input field performs checks on the data entered in it. It disables the 'Submit' button untill the right entry is made. It checks whether the input is only a whole number and not any other character or spaces or decimals or negative number. The check for upper limit of the number is done on the server side. It follows the rule that if the number exceeds the number of words in the test data then it assumes the number to be equal to the maximum number of words.

### Modules used:
* react [https://reactjs.org/]
* axios [https://github.com/axios/axios]

### This is how the page looks:

  
