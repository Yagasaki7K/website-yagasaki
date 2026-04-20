import { useCallback, useEffect, useRef } from "react";
import { Terminal as WTerm, useTerminal } from "@wterm/react";
import styled from "styled-components";
import "@wterm/react/css";

type FileNode = {
    type: "file";
    content: string;
};

type DirectoryNode = {
    type: "dir";
    children: Record<string, VfsNode>;
};

type VfsNode = FileNode | DirectoryNode;

type EditSession = {
    path: string[];
    buffer: string[];
};

const TerminalDetails = styled.main`
    min-height: 100vh;
    background: radial-gradient(circle at center, #111 0%, #050505 55%, #000 100%);
    color: #f7f7f7;
    display: grid;
    place-items: center;
    padding: 2rem;
    font-family: "Courier New", "Lucida Console", monospace;

    .crt-shell {
        position: relative;
        width: min(1000px, 100%);
        height: min(76vh, 680px);
        border: 2px solid #d9d9d9;
        border-radius: 14px;
        box-shadow: 0 0 18px rgba(255, 255, 255, 0.35), inset 0 0 25px rgba(255, 255, 255, 0.12);
        overflow: hidden;
        background: #000;
    }

    .crt-shell::before {
        content: "";
        position: absolute;
        inset: 0;
        background: repeating-linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.07) 0,
            rgba(255, 255, 255, 0.07) 1px,
            rgba(0, 0, 0, 0.35) 2px,
            rgba(0, 0, 0, 0.35) 4px
        );
        opacity: 0.18;
        pointer-events: none;
        z-index: 2;
    }

    .crt-shell::after {
        content: "";
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at center, transparent 58%, rgba(255, 255, 255, 0.09) 100%);
        pointer-events: none;
        z-index: 2;
    }

    [data-wterm-root] {
        position: relative;
        z-index: 1;
        height: 100%;
    }
`;

const createInitialFs = (): DirectoryNode => ({
    type: "dir",
    children: {
        home: {
            type: "dir",
            children: {
                guest: {
                    type: "dir",
                    children: {
                        "readme.txt": {
                            type: "file",
                            content:
                                "Welcome to RETRO-OS.\\nEverything here is virtual and exists only in memory.\\nType 'help' to see available commands.",
                        },
                    },
                },
            },
        },
        etc: {
            type: "dir",
            children: {
                motd: {
                    type: "file",
                    content: "A monochrome world, a blinking cursor, and your imagination.",
                },
            },
        },
    },
});

const parseArgs = (raw: string): string[] => {
    const matches = raw.match(/(?:"([^"]*)")|([^\s]+)/g) ?? [];
    return matches.map((item) => item.replace(/^"|"$/g, ""));
};

const normalizePath = (rawPath: string, cwd: string[]): string[] => {
    const start = rawPath.startsWith("/") ? [] : [...cwd];
    const chunks = rawPath.split("/").filter(Boolean);

    for (const chunk of chunks) {
        if (chunk === ".") {
            continue;
        }
        if (chunk === "..") {
            start.pop();
            continue;
        }
        start.push(chunk);
    }

    return start;
};

const getNode = (root: DirectoryNode, path: string[]): VfsNode | null => {
    let current: VfsNode = root;

    for (const segment of path) {
        if (current.type !== "dir") {
            return null;
        }

        current = current.children[segment];
        if (!current) {
            return null;
        }
    }

    return current;
};

const getParentAndName = (root: DirectoryNode, path: string[]) => {
    if (path.length === 0) {
        return null;
    }

    const parentPath = path.slice(0, -1);
    const name = path[path.length - 1];
    const parent = getNode(root, parentPath);

    if (!parent || parent.type !== "dir") {
        return null;
    }

    return { parent, name };
};

const pathToString = (segments: string[]) => (segments.length === 0 ? "/" : `/${segments.join("/")}`);

const TerminalPage = () => {
    const { ref, write, focus } = useTerminal();
    const fsRef = useRef<DirectoryNode>(createInitialFs());
    const cwdRef = useRef<string[]>(["home", "guest"]);
    const inputRef = useRef("");
    const editRef = useRef<EditSession | null>(null);
    const bootedRef = useRef(false);

    const currentPrompt = useCallback(() => {
        if (editRef.current) {
            return "edit>";
        }
        return `guest@retro:${pathToString(cwdRef.current)}$`;
    }, []);

    const printPrompt = useCallback(() => {
        write(`${currentPrompt()} `);
    }, [currentPrompt, write]);

    const sanitizeInput = useCallback((raw: string) => raw.replace(/\s+/g, " ").trim(), []);

    const renderCommandResult = useCallback(
        (lines: string[]) => {
            write("\r\n");
            write("\r\n");

            if (lines.length > 0) {
                for (const line of lines) {
                    write(`${line}\r\n`);
                }
                write("\r\n");
            }

            printPrompt();
        },
        [printPrompt, write],
    );

    const printBanner = useCallback(() => {
        write("\\x1bc");
        write("RETRO-OS TERMINAL v1986\\r\\n");
        write("========================================\\r\\n");
        write("Monochrome recreational shell loaded.\\r\\n");
        write("Filesystem root: / (in-memory only).\\r\\n");
        write("Type 'help' to begin.\\r\\n");
    }, [write]);

    const handleCommand = useCallback(
        (rawInput: string) => {
            const output: string[] = [];
            const writeLine = (line = "") => {
                output.push(line);
            };

            const sanitizedInput = sanitizeInput(rawInput);
            const args = parseArgs(sanitizedInput);
            if (args.length === 0) {
                return output;
            }

            const [command, ...rest] = args;
            const fs = fsRef.current;
            const cwd = cwdRef.current;

            switch (command.toLowerCase()) {
                case "help": {
                    writeLine("Commands:");
                    writeLine("  help                         show this help");
                    writeLine("  clear                        clear terminal");
                    writeLine("  pwd                          print current directory");
                    writeLine("  ls [path]                    list files and folders");
                    writeLine("  cd <path>                    change directory");
                    writeLine("  cat <file>                   show file content");
                    writeLine("  touch <file>                 create empty file");
                    writeLine("  mkdir <dir>                  create directory");
                    writeLine("  write <file> <content>       overwrite file content");
                    writeLine("  edit <file>                  interactive editor (.save/.cancel)");
                    writeLine("  rm <file>                    delete file");
                    writeLine("  rmdir <dir>                  delete empty directory");
                    writeLine("  tree [path]                  print folder tree");
                    writeLine("  echo <text>                  print text");
                    break;
                }
                case "clear": {
                    printBanner();
                    return output;
                }
                case "pwd": {
                    writeLine(pathToString(cwd));
                    break;
                }
                case "echo": {
                    writeLine(rest.join(" "));
                    break;
                }
                case "ls": {
                    const target = rest[0] ? normalizePath(rest[0], cwd) : cwd;
                    const node = getNode(fs, target);

                    if (!node) {
                        writeLine(`ls: path not found: ${rest[0]}`);
                        break;
                    }

                    if (node.type === "file") {
                        writeLine(target[target.length - 1] ?? "/");
                        break;
                    }

                    const items = Object.entries(node.children)
                        .sort(([a], [b]) => a.localeCompare(b))
                        .map(([name, child]) => `${child.type === "dir" ? "[D]" : "[F]"} ${name}`);

                    writeLine(items.join("    ") || "(empty)");
                    break;
                }
                case "cd": {
                    if (!rest[0]) {
                        cwdRef.current = [];
                        break;
                    }

                    const target = normalizePath(rest[0], cwd);
                    const node = getNode(fs, target);
                    if (!node || node.type !== "dir") {
                        writeLine(`cd: not a directory: ${rest[0]}`);
                        break;
                    }

                    cwdRef.current = target;
                    break;
                }
                case "cat": {
                    if (!rest[0]) {
                        writeLine("cat: missing file operand");
                        break;
                    }

                    const target = normalizePath(rest[0], cwd);
                    const node = getNode(fs, target);
                    if (!node || node.type !== "file") {
                        writeLine(`cat: file not found: ${rest[0]}`);
                        break;
                    }

                    writeLine(node.content || "");
                    break;
                }
                case "touch": {
                    if (!rest[0]) {
                        writeLine("touch: missing file operand");
                        break;
                    }

                    const target = normalizePath(rest[0], cwd);
                    const parentData = getParentAndName(fs, target);
                    if (!parentData) {
                        writeLine(`touch: invalid path: ${rest[0]}`);
                        break;
                    }

                    const { parent, name } = parentData;
                    const existing = parent.children[name];
                    if (existing?.type === "dir") {
                        writeLine(`touch: cannot overwrite directory: ${rest[0]}`);
                        break;
                    }

                    parent.children[name] = existing ?? { type: "file", content: "" };
                    break;
                }
                case "mkdir": {
                    if (!rest[0]) {
                        writeLine("mkdir: missing directory operand");
                        break;
                    }

                    const target = normalizePath(rest[0], cwd);
                    const parentData = getParentAndName(fs, target);
                    if (!parentData) {
                        writeLine(`mkdir: invalid path: ${rest[0]}`);
                        break;
                    }

                    const { parent, name } = parentData;
                    if (parent.children[name]) {
                        writeLine(`mkdir: already exists: ${rest[0]}`);
                        break;
                    }

                    parent.children[name] = { type: "dir", children: {} };
                    break;
                }
                case "write": {
                    if (!rest[0]) {
                        writeLine("write: missing file operand");
                        break;
                    }

                    const target = normalizePath(rest[0], cwd);
                    const parentData = getParentAndName(fs, target);
                    if (!parentData) {
                        writeLine(`write: invalid path: ${rest[0]}`);
                        break;
                    }

                    const { parent, name } = parentData;
                    const existing = parent.children[name];
                    if (existing && existing.type === "dir") {
                        writeLine("write: target is a directory");
                        break;
                    }

                    parent.children[name] = { type: "file", content: rest.slice(1).join(" ") };
                    writeLine(`write: saved ${pathToString(target)}`);
                    break;
                }
                case "edit": {
                    if (!rest[0]) {
                        writeLine("edit: missing file operand");
                        break;
                    }

                    const target = normalizePath(rest[0], cwd);
                    const parentData = getParentAndName(fs, target);
                    if (!parentData) {
                        writeLine(`edit: invalid path: ${rest[0]}`);
                        break;
                    }

                    const existing = getNode(fs, target);
                    if (existing && existing.type === "dir") {
                        writeLine("edit: target is a directory");
                        break;
                    }

                    editRef.current = {
                        path: target,
                        buffer: existing?.type === "file" && existing.content ? existing.content.split("\n") : [],
                    };

                    writeLine(`-- EDIT MODE: ${pathToString(target)} --`);
                    writeLine("Type content line by line. Use .save to persist, .cancel to discard.");
                    break;
                }
                case "rm": {
                    if (!rest[0]) {
                        writeLine("rm: missing file operand");
                        break;
                    }

                    const target = normalizePath(rest[0], cwd);
                    const parentData = getParentAndName(fs, target);
                    if (!parentData) {
                        writeLine(`rm: invalid path: ${rest[0]}`);
                        break;
                    }

                    const { parent, name } = parentData;
                    const existing = parent.children[name];
                    if (!existing || existing.type !== "file") {
                        writeLine(`rm: file not found: ${rest[0]}`);
                        break;
                    }

                    delete parent.children[name];
                    break;
                }
                case "rmdir": {
                    if (!rest[0]) {
                        writeLine("rmdir: missing directory operand");
                        break;
                    }

                    const target = normalizePath(rest[0], cwd);
                    const parentData = getParentAndName(fs, target);
                    if (!parentData) {
                        writeLine(`rmdir: invalid path: ${rest[0]}`);
                        break;
                    }

                    const { parent, name } = parentData;
                    const existing = parent.children[name];
                    if (!existing || existing.type !== "dir") {
                        writeLine(`rmdir: directory not found: ${rest[0]}`);
                        break;
                    }

                    if (Object.keys(existing.children).length > 0) {
                        writeLine("rmdir: directory not empty");
                        break;
                    }

                    delete parent.children[name];
                    break;
                }
                case "tree": {
                    const target = rest[0] ? normalizePath(rest[0], cwd) : cwd;
                    const node = getNode(fs, target);
                    if (!node) {
                        writeLine(`tree: path not found: ${rest[0]}`);
                        break;
                    }

                    const renderTree = (entry: VfsNode, depth: number, name: string) => {
                        const prefix = `${"  ".repeat(depth)}${depth > 0 ? "|- " : ""}`;
                        writeLine(`${prefix}${name}${entry.type === "dir" ? "/" : ""}`);
                        if (entry.type === "dir") {
                            Object.entries(entry.children)
                                .sort(([a], [b]) => a.localeCompare(b))
                                .forEach(([childName, child]) => renderTree(child, depth + 1, childName));
                        }
                    };

                    renderTree(node, 0, target.length === 0 ? "/" : target[target.length - 1]);
                    break;
                }
                default:
                    writeLine(`Unknown command: ${command}. Type 'help'.`);
            }

            return output;
        },
        [printBanner, sanitizeInput],
    );

    const handleInput = useCallback(
        (inputChunk: string) => {
            for (const char of inputChunk) {
                if (char === "\u0003") {
                    inputRef.current = "";
                    editRef.current = null;
                    write("^C\r\n");
                    printPrompt();
                    continue;
                }

                if (char === "\r") {
                    const line = inputRef.current;
                    inputRef.current = "";

                    if (editRef.current) {
                        const output: string[] = [];
                        const writeLine = (text = "") => {
                            output.push(text);
                        };
                        const editSession = editRef.current;
                        const sanitizedLine = sanitizeInput(line);
                        if (sanitizedLine === ".save") {
                            const parentData = getParentAndName(fsRef.current, editSession.path);
                            if (!parentData) {
                                writeLine("edit: failed to save (invalid path)");
                            } else {
                                const { parent, name } = parentData;
                                parent.children[name] = {
                                    type: "file",
                                    content: editSession.buffer.join("\n"),
                                };
                                writeLine(`edit: saved ${pathToString(editSession.path)}`);
                            }
                            editRef.current = null;
                        } else if (sanitizedLine === ".cancel") {
                            editRef.current = null;
                            writeLine("edit: canceled");
                        } else {
                            editSession.buffer.push(line);
                        }
                        renderCommandResult(output);
                    } else {
                        const output = handleCommand(line);
                        renderCommandResult(output);
                    }
                    continue;
                }

                if (char === "\u007f") {
                    if (inputRef.current.length > 0) {
                        inputRef.current = inputRef.current.slice(0, -1);
                        write("\b \b");
                    }
                    continue;
                }

                if (char >= " " && char !== "\u007f") {
                    inputRef.current += char;
                    write(char);
                }
            }
        },
        [handleCommand, printPrompt, renderCommandResult, sanitizeInput, write],
    );

    useEffect(() => {
        if (bootedRef.current) {
            return;
        }

        bootedRef.current = true;
        printBanner();
        printPrompt();
        focus();
    }, [focus, printBanner, printPrompt]);

    return (
        <TerminalDetails>
            <div className="crt-shell">
                <WTerm
                    ref={ref}
                    cols={96}
                    rows={28}
                    autoResize
                    cursorBlink
                    onData={handleInput}
                    onReady={focus}
                    onError={(error) => {
                        console.error("wterm error", error);
                    }}
                />
            </div>
        </TerminalDetails>
    );
};

export default TerminalPage;
