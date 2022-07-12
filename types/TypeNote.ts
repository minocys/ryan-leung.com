import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypeNoteFields {
    title?: Contentful.EntryFields.Symbol;
    body?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    slug?: Contentful.EntryFields.Symbol;
}

export type TypeNote = Contentful.Entry<TypeNoteFields>;
