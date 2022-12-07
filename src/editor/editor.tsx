/**
 * @author WMXPY
 * @namespace Editor
 * @description Editor
 */

import Editor from "@monaco-editor/react";
import * as React from "react";
import { onMonacoEditorMount } from "./mount";

export const EditorView: React.FC = () => {

    return (<Editor
        defaultLanguage="javascript"
        options={{
            wordWrap: "on",
            minimap: {
                renderCharacters: false,
            },
        }}
        onMount={onMonacoEditorMount}
    />);
};
