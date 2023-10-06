/*
<div id="parent">
<div id="child1">
<h1 id="heading">hello world from react</h1>
<h2></h2>
</div>
<div id="child2">
<h1></h1>
<h2></h2>
</div>
</div>nknbfuog5rxnj

*/
// const heading = React.createElement(
//     "h1",
//     {id: "heading", abc: "vijay"},
//     "hello world from react."
//     );

const heading = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"heading"},"hello world from react"),
React.createElement("h2",{},"hello world from react")]
),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"hello world from react"),
React.createElement("h2",{},"hello world from react")]
)]
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render(heading);
