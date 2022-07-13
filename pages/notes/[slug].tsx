import type {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPaths,
  InferGetStaticPropsType,
} from "next";
import { getNote, getNoteSlugs } from "lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { TypeNote } from "types";
import { Document } from "@contentful/rich-text-types";
import { NotFoundError } from "components";
import { ParsedUrlQuery } from "querystring";

type StaticPaths = {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<StaticPaths> = async () => {
  const notes = await getNoteSlugs({ limit: 10 });

  return {
    paths: notes.map((note) => ({
      params: { slug: note.fields.slug! },
    })),
    fallback: true,
  };
};

type StaticProps = {
  data: TypeNote | null;
};

interface StaticPropsParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<
  StaticProps,
  StaticPropsParams
> = async (context) => {
  const slug = context.params!.slug;

  const data = await getNote(slug);

  return {
    props: {
      data,
    },
  };
};

function Note({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!data) {
    return <NotFoundError />;
  }

  const {
    fields: { title, body },
  } = data;

  return (
    <div className="max-w-screen-lg flex justify-center align-center m-auto">
      <main>
        <div className="grow">
          <div className="py-10">
            <h1 className="text-3xl font-bold font-sans">{title}</h1>
          </div>
          <div className="text-lg font-serif">
            {documentToReactComponents(body as Document)}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Note;
