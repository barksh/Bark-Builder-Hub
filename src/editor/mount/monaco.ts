/**
 * @author WMXPY
 * @namespace Editor_Mount
 * @description Monaco
 */

import { Monaco } from "@monaco-editor/react";
import { markedDateMonacoMixinFactory } from "@sudoo/marked-mixin-date-monaco";
import { markedJsonMonacoMixinFactory } from "@sudoo/marked-mixin-json-monaco";
import { markedMathMonacoMixinFactory } from "@sudoo/marked-mixin-math-monaco";
import { markedObjectMonacoMixinFactory } from "@sudoo/marked-mixin-object-monaco";
import { markedParseMonacoMixinFactory } from "@sudoo/marked-mixin-parse-monaco";
import { MarkedMonacoManager } from "@sudoo/marked-monaco";

export const mountMonacoEditor = (monaco: Monaco): void => {

    const markedMonacoManager: MarkedMonacoManager =
        MarkedMonacoManager.createAndMountBase(monaco, 'javascript');

    markedMonacoManager.use(markedDateMonacoMixinFactory.createInjectMixin("Date"));
    markedMonacoManager.use(markedJsonMonacoMixinFactory.createInjectMixin("Json"));
    markedMonacoManager.use(markedMathMonacoMixinFactory.createInjectMixin("Math"));
    markedMonacoManager.use(markedObjectMonacoMixinFactory.createInjectMixin("Object"));
    markedMonacoManager.use(markedParseMonacoMixinFactory.createInjectMixin("Parse"));

    return;
};
