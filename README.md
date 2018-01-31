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
* axios [https://github.com/axios/axios] For fetching remote data.

### This is how the page looks:
Homepage:
![f1](https://user-images.githubusercontent.com/24852829/35640358-f5ae2428-06e2-11e8-820a-3f48ffc7f248.PNG)
Characters not allowed:
![f2](https://user-images.githubusercontent.com/24852829/35640359-f5e58224-06e2-11e8-8422-cb370a32fea8.PNG)
Spaces not allowed:
![f3](https://user-images.githubusercontent.com/24852829/35640360-f61aea90-06e2-11e8-95cc-82ca2b528dab.PNG)
Decimals not allowed:
![f9](https://user-images.githubusercontent.com/24852829/35640755-2829b06a-06e4-11e8-84bb-fc6584af0d7d.PNG)
Negative numbers not allowed:
![f10](https://user-images.githubusercontent.com/24852829/35640756-2863ebae-06e4-11e8-9bb1-a61af3aa425d.PNG)

#### Only a whole number:
![f5](https://user-images.githubusercontent.com/24852829/35640361-f6527294-06e2-11e8-9d44-794b73fd7891.PNG)
Results displayed (include emails/websites as a whole):
![f6](https://user-images.githubusercontent.com/24852829/35640363-f68b4902-06e2-11e8-8efc-f5175dbc22d9.PNG)
![f7](https://user-images.githubusercontent.com/24852829/35640364-f6c3a914-06e2-11e8-9a7e-cdb51b8c284f.PNG)

#### Results include phrases from website names and email (changes made in backend). This is the default setting:
![f8](https://user-images.githubusercontent.com/24852829/35640365-f7043ac4-06e2-11e8-8357-060367842bbf.PNG)

