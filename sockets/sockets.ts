import { Socket } from "socket.io";
import socketIO from "socket.io";

export const desconectar = (cliente: Socket) => {
  cliente.on("disconnect", () => {
    console.log("cliente desconectado");
  });
};

export const mensaje = (cliente: Socket, io: socketIO.Server) => {
  cliente.on("mensaje", (payload: { de: string; para: string }) => {
    console.log("mensaje recibido", payload);
    io.emit("mensaje-nuevo", payload);
  });
};
