import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

const Step = defineNestedType(() => ({
  name: "Step",
  fields: {
    description: { type: "string", required: true },
    duration: { type: "number", required: true },
    target: { type: "string", required: false },
  },
}));

const Recipe = defineDocumentType(() => ({
  name: "Recipe",
  filePathPattern: "recipies/**/*.json",
  contentType: "data",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    tagline: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
    minOutput: {
      type: "number",
      required: true,
    },
    maxOutput: {
      type: "number",
      required: true,
    },
    defaultRatio: {
      type: "number",
      required: true,
    },
    steps: {
      type: "list",
      of: Step,
    },
    tips: {
      type: "list",
      of: {
        type: "string",
      },
      required: false,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Recipe],
});
