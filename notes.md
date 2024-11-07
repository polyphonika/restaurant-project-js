### Next actions ###
1. Inside div#content, create a homepage for your restaurant. You might want to include an image, headline, and some text about how wonderful the restaurant is; you do not have to make this look too fancy. It’s okay to hard-code these into the HTML for now just to see how they look on the page.

DONE: Now step 2

2. Now remove everything inside div#content from the HTML (so you still have the <header> and <nav> with an empty <div id="content"> below it) and instead create them by using JavaScript only, e.g. by appending each new element to div#content once the page is first loaded. Since we’re all set up to write our code in multiple files, let’s write this initial page-load function inside of its own module and then import and call it inside of index.js.

So, steps:
[x] Create basic JS file
[x] Add DOM functionality
[x] Move to function
[x] ChatGPT re DOM ready, DOM load, different advice
[x] Ask re factory functions
[x] Done

All done, now moving to:

[] Next, set up your restaurant site to use tabbed browsing to access the Menu and Contact pages. Look at the behavior of this student’s live preview site for visual inspiration.

[] Put the contents of each “tab” inside of its own module. Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.

[] Write the tab-switching logic inside of index.js. You should have event listeners for each button in the header navbar that wipes out the current contents of div#content and then runs the correct ‘tab module’ to populate it with the new contents again.