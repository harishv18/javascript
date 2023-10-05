var a = 12;
const b = 33;
let c = 44;
var d = 50;

document.write(`<p>a = ${a}</p>`);
document.write(`<p>b = ${b}</p>`);
document.write(`<p>c = ${c}</p>`);
document.write(`<p>d = ${d}</p><hr>`);

if (d > 20) {
  document.write(`<p>a = ${a}</p>`);
  document.write(`<p>b = ${b}</p>`);
  document.write(`<p>c = ${c}</p>`);
  document.write(`<p>d = ${d}</p><hr>`);

  var x = 100;
  let y = 200;
  const z = 300;

  document.write(`<p>a = ${x}</p>`);
  document.write(`<p>b = ${y}</p>`);
  document.write(`<p>c = ${z}</p><hr>`);
}
document.write(`<p>a = ${x}</p>`);
// document.write(`<p>b = ${y}</p>`);
// document.write(`<p>c = ${z}</p>`);

var isAdmin = false;
document.write(`<p>isAdmin = ${typeof isAdmin}</p>`)
document.write(`<p>isAdmin = ${isAdmin}</p><hr>`)

var title = "Welcome to JS";
document.write(`<p>title = ${typeof title}</p>`)
document.write(`<p>title = ${title}</p><hr>`)

var xx = 12345;
document.write(`<p>xx = ${typeof xx}</p>`)
document.write(`<p>xx = ${xx}</p><hr>`)

var yy = 123.45;
document.write(`<p>xx = ${typeof yy}</p>`)
document.write(`<p>xx = ${yy}</p><hr>`)

var arr = ["apple", "cherry", true, false, 10, 30];
document.write(`<p>arr = ${typeof arr}</p>`)
document.write(`<p>arr = ${arr}</p><hr>`)

var user = {
  name: "harish",
  email: "harish00411@gmail.com"
};
document.write(`<p>user = ${typeof user}</p>`)
document.write(`<p>user = ${user}</p>`)
document.write(`<p>user = ${user.name}</p>`)
document.write(`<p>user = ${user.email}</p><hr>`)

function defaultFun() {
  document.write(`<p>this is default function.</p>`);
}
defaultFun();

function parameterFun(name, email) {
  document.write(`<p>this is parameter function.</p>`);
  document.write(`<p>name = ${name}</p>`)
  document.write(`<p>email = ${email}</p><hr>`)
}
parameterFun("Harish", "harish00411@gmail.com")