//! File System Module

import fs from "node:fs";

//!CREATE -->
fs.writeFile("./Index2.txt","utf-8",(err)=>{
    if(err){
        console.log("Hello World!!");
    }
});

//!Read 
// fs.readFile("./Index2.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("unable to Read file");
//     }
// });

//!Upate the File

//! fs.appendFile("./Index2.txt","\nI am Nishant Tanwar",(err)=>{
//!    console.log("Unable to updtae a file");
//! });

//!Delete a file

// fs.unlink("./Index2.txt",(err)=>{
//     if(err){
//         console.log("Unable to delete a file");
//         return;
//     }
//     console.log("File Deleted");
// });

//!STREAMS AND BUFFER
//BUFFER:A tempory space in a memory.
//STREAMS: continously Reading and writing the Data in Chunks.

//!Default size of buffers:
//NORMAL SIZE:16KB
//LARZE FILES VIDEOS AND AUDIOS-->64KB


//!Types of streams
//1) Writeable Stream--> 
// fs.createWriteStream("index.html");

//2)createReadStream("path","encoding");
//fs.createReadStream("index.html","encoding");
let src=fs.createReadStream("./index.html","utf-8");
let destination=fs.createWriteStream("./index.html");
src.pipe(destination);



