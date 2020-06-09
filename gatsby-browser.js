/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it


const $ = require("jquery")

export const onInitialClientRender = () => {
  $.getJSON('https://api.ipify.org?format=json', function(data){
    console.log(data.ip);
});
}
