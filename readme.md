#Brave UX Code Test

This site was built using the Yeoman Gulp-Webapp generator as a starting point. To view the final version first run:

``npm install`` then `gulp brave-ux`.

## Notes
- Styles are using display-table for fine-grain control over elements due to the requirement to support IE9. If that requirement didn't exist we could use flexbox to simplify the layout.
- Sass files are grouped in a config folder for variables, modules folder for the individual modules.
- There's defintiely some room to re-factor the helper functions in the main.js file. Would recommend taking another pass over it as time allows. It works ATM, so this is not critical.
