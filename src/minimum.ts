import {WebSocket} from "ws";
import {createInterface} from "node:readline";
import * as fs from "node:fs";

function minimum_interface() {

    var socket = new WebSocket("wss://secure-ws-chat-server.slvr.dev:8443");

    socket.on("open", () => {
        console.log("connected")
    })

    socket.on("message", (data: Buffer) => {
        let msg = data.toString()
        console.log(msg)
    })

    socket.on(("close"),()=>{
        console.log("lost connection")
        process.exit(1)
    })

    const rl = createInterface({
        input: process.stdin, output: process.stdout,
    });

    rl.addListener("line", (text) => {
        socket.send(text)
    })

}

minimum_interface()
