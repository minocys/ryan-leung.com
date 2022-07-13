import { createClient } from "contentful";
import { TypeNote, TypeNoteFields } from "types";

const config = {
  environment: process.env.NEXT_PUBLIC_CF_ENVIRONMENT || "",
  space: process.env.NEXT_PUBLIC_CF_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CF_DELIVERY_ACCESS_TOKEN || "",
};

const client = createClient(config);

type Slug = string;

export async function getNote(slug: Slug): Promise<TypeNote | null> {
  const { items } = await client.getEntries<TypeNoteFields>({
    limit: 1,
    include: 10,
    "fields.slug": slug,
  });
  const note = items[0];

  return note || null;
}

type GetNotesParams = {
  skip: number;
  limit: number;
};

export async function getNotes(params: GetNotesParams): Promise<TypeNote[]> {
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

export async function getNoteSlugs(
  params: GetNoteSlugsParams
): Promise<TypeNote[]> {
  const { items: notes } = await client.getEntries<TypeNoteFields>({
    order: "sys.createdAt",
    content_type: "note",
    skip: 0,
    select: "fields.slug",
    ...params,
  });

  return notes;
}
