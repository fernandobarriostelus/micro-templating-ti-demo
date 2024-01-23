const template = `
<h1> Welcome to the <%= data.pageTitle %> page </h1>
<h3> This is the list of team members in TI: </h3>
<br>
<ul>  
    <% for (var i=0; i < data.teammembers.length; i++) { %>    
    <li><%= data.teammembers[i] %></li>  
    <% } %>  
</ul>
`

// function Templater(templateText) {
//     return new Function(
//         "data",
//         "var output=" +
//         JSON.stringify(templateText)
//             .replace(/<%=(.+?)%>/g, '"+($1)+"')
//             .replace(/<%(.+?)%>/g, '";$1\noutput+="') +
//         ";return output;"
        
//     )
// }






/*

var output ="<h1> Welcome to the " + data.pageTitle + " page </h1>
<h3>This is the list of team members in TI: </h3>
<br>
<ul>"+
for (var i=0; i < data.teammembers.length;i++) {
"<li>" + data.teammembers[i] + "</li>" +
}
"</ul>"
return output;

*/


function Templater(templateText) {
    return new Function(
    "data",
    "var output=" +
    JSON.stringify(templateText)
        .replace(/<%=(.+?)%>/g, '"+($1)+"')
    .replace(/<%(.+?)%>/g, '";$1\noutput+="') +
    ";return output;"
    );
}

const render = Templater(template)

const data = {
    pageTitle: 'Home',
    teammembers: ['John', 'Jane', 'Jack', 'Jill']
}

console.log(`
${render(data)}
`)


// function Templater(templateText) {
//     return new Function(
//     "data",
//     "debugger;var output=" +
//     JSON.stringify(templateText)
//         .replace(/<%=(.+?)%>/g, '"+($1)+"')
//     .replace(/<%(.+?)%>/g, '";$1\noutput+="') +
//     ";debugger;return output;"
//     );
// }