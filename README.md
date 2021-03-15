# Password Generator

For this home assignment, I was tasked with creating a password generator.

<h2>The following is the list of criteria for the password generator:</h2>

    * GIVEN I need a new, secure password
    * WHEN I click the button to generate a password
    * THEN I am presented with a series of prompts for password criteria
    * WHEN prompted for password criteria
    * THEN I select which criteria to include in the password
    * WHEN prompted for the length of the password
    * THEN I choose a length of at least 8 characters and no more than 128 characters
    * WHEN prompted for character types to include in the password
    * THEN I choose lowercase, uppercase, numeric, and/or special characters
    * WHEN I answer each prompt
    * THEN my input should be validated and at least one character type should be selected
    * WHEN all prompts are answered
    * THEN a password is generated that matches the selected criteria
    * WHEN the password is generated
    * THEN the password is either displayed in an alert or written to the page

<h2>What I Did</h2>

<p>With this homework assignment, I was already given the html file and CSS file. I mainly had to focus on
the javascript. However, in the html and CSS files, I made a few minor changes. For the html file, I added comments. For the CSS file, I added comments as well but I did also change the border radius of the 
"Generate Password" button to give it a square shape instead of a round shape to have it match with the 
rest of the generator layout. Then, in javascript, I wrote code to match all of the criteria that was asked.</p>

<p>First, when you go to the password generator, you will see the password generator</p>

<img src="https://github.com/vickphat/password-generator/blob/master/Assets/images/password-gen1.JPG">

<br>

<p>When the "Generate Password" button is clicked, a prompt will appear at the top to ask the user how many characters they would like in their password.</p>

<img src="https://github.com/vickphat/password-generator/blob/master/Assets/images/password-gen2.JPG">

<br>

<p>If the number of characters that is entered is less than 8 or
greater than 128, a window alert will pop up and state that it must be equal to or greater than 8 and equal to or less than 128.</p>

<img src="https://github.com/vickphat/password-generator/blob/master/Assets/images/password-gen3.JPG">

<br>

<p>If that happens, te user will have to hit the "Generate Password" button again to enter an amount for the number of characters.</p>

<p>After the user has entered an amount that abides by the parameters that are set. An pop up will confirm the amount that the user has entered.</p>

<img src="https://github.com/vickphat/password-generator/blob/master/Assets/images/password-gen4.JPG">

<img src="https://github.com/vickphat/password-generator/blob/master/Assets/images/password-gen5.JPG">
<br>

<p>After that, they will be presented with a series of prompts to ask if they would like certain characters to be included in their password. The first prompt will be if they would like to include special characters. If the "ok" button is clicked, then it will notify the user that their password will include special characters. If "cancel" is click, it will notify the user that it will not include special characters.</p>

<img src="https://github.com/vickphat/password-generator/blob/master/Assets/images/password-gen6.JPG">

<img src="https://github.com/vickphat/password-generator/blob/master/Assets/images/password-gen7.JPG">

<img src="https://github.com/vickphat/password-generator/blob/master/Assets/images/password-gen8.JPG">

<br>

<p>After the first prompt, the user will be asked the same questions but instead of special characters, it will be for lowercase characters, uppercased characters and numeric characters. All will have the same layout where clicking "ok" or "cancel" will notify the user of their selection and if the characters will be included or not.</p>

<img src="https://github.com/vickphat/password-generator/blob/master/Assets/images/password-gen10.JPG">

<img src="https://github.com/vickphat/password-generator/blob/master/Assets/images/pasword-gen11.JPG">

<img src="https://github.com/vickphat/password-generator/blob/master/Assets/images/password-gen12.JPG">



