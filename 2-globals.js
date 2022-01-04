// Globals -  no window

//__dirname - path current directory
//__filename - file name
// exports - function to use modules (commonjs)
// module - info about current module (file)
// require - function about env where the program is being executed

console.log(__dirname);
console.log(__filename);
console.log(module);

setInterval(()=>{
  console.log("hello world")
}, 1000) //  1 second