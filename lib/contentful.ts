import { createClient } from "contentful";
import { TypeNote, TypeNoteFields } from "types";

const client = createClient({
  environment: process.env.NEXT_PUBLIC_CF_ENVIRONMENT,
  space: process.env.NEXT_PUBLIC_CF_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CF_DELIVERY_ACCESS_TOKEN,
});

type GetNoteParams = {
  slug: string;
};

export async function getNote(params: GetNoteParams): TypeNote | null {
  const { items } = await client.getEntries<TypeNoteFields>({
    limit: 1,
    include: 10,
    "fields.slug": params.slug,
  });
  const note = items[0];

  return note || null;
}

type GetNotesParams = {
  skip: number;
  limit: number;
};

export async function getNotes(params: GetNotesParams): TypeNote[] {
  const { items: notes } = await client.getEntries<TypeNoteFields>({
    order: "sys.createdAt",
    content_type: "note",
    ...params,
  });

  return notes || [];
}

type GetNoteSlugsParams = {
  limit: number;
};

export async function getNoteSlugs(params: GetNoteSlugsParams): TypeNote[] {
  const { items: notes } = await client.getEntries<TypeNoteFields>({
    order: "sys.createdAt",
    content_type: "note",
    skip: 0,
    select: "fields.slug",
    ...params,
  });

  return notes;
}
