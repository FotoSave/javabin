import { JavaBinary } from "../class/JavaBinary";

export type Events = ("tick" | "complete"|"start");
export interface EventI {
    eventName: Events;
    cb: (value: EventCallback) => void;

}
export interface StartEvent {
    total: number;
    javaBinary: JavaBinary;
    filename:string;
}
export interface TickEvent {
    total: number;
    percent:number;
    tick: number;
}
export interface DownloadCompleteEvent {

    path: string;
    filename: string;
    javaBinary: JavaBinary;

}
export type EventCallback = (TickEvent|DownloadCompleteEvent);


export type CallbackETICK = (value?:TickEvent) => void;
export type CallbackECOMPLETE = (value?:DownloadCompleteEvent) => void;
export type CallbackESTART = (value?:StartEvent) => void;
export type CallbackEALL = CallbackETICK|CallbackECOMPLETE|CallbackESTART;