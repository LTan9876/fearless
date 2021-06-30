## How To Build

This project was built with [Create React App](https://github.com/facebook/create-react-app) and [countapi](https://countapi.xyz/).

To initialize a project with create react app, you can find the official documentation [here](https://reactjs.org/docs/create-a-new-react-app.html).

There are many ways to integrate countapi, for this project it was done with npm install, the command and countapi set up can be found [here](https://www.npmjs.com/package/countapi-js).

Countapi was integrated with the key 1ccb732e-b55a-4404-ad3f-0f99c02fe44e.

## How To Run 

In your console, run "npm start", it should open the project on http://localhost:3000.

The port can be modified on package.json, in the scripts section, with the start command.  For example, instead of "start: PORT=3000 react-scripts start", it can be specified to another port - swithcing it to "start: PORT=3006 react-scripts start" will lead to the application being open on port 3006.

## Future Updates To Add

There could be more counters/buttons added in the future, to show the hits of other sites.  

In addition to the button that increases the hits, there could be a button that decreases the number of hits.  There could also be a text area for the user to specify how much more/less hitting the button will add/decrease the hit value.

## Future Changes/Assumptions that Could Impact Future Features

If there are any future changes in how countapi works (formatting, key changes, removal/additional of methods), that would have an impact on how information on the number of hits is gathered and displayed.  

For example, if countapi got rid of their method to subtract hits, then there would be no use for the decrease button.
