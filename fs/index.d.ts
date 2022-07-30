import fs from 'fs'
export function removeDetect(path: fs.PathLike): void;
export function removeDir(path: fs.PathLike): void;
export function remove(path: fs.PathLike): void;
export function isDirectory(path: fs.PathLike): Boolean;
export function isFile(path: fs.PathLike): Boolean;
export function directory(path: fs.PathLike): String;
export function file(path: fs.PathLike, data: String | Buffer): String;