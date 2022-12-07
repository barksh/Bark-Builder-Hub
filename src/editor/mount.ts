/**
 * @author WMXPY
 * @namespace Editor
 * @description Mount
 */

import { Monaco, OnMount } from "@monaco-editor/react";
import { MonacoEditor } from "./declare";
import { mountMonacoEditor } from "./mount/monaco";

export const onMonacoEditorMount: OnMount = (_editor: MonacoEditor, monaco: Monaco): void => {

    mountMonacoEditor(monaco);
};
