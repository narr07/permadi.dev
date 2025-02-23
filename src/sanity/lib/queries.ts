// src/sanity/lib/queries.ts

import { defineQuery } from "next-sanity";

// export const POSTS_QUERY =
//   defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
//   _id, title, slug
// }`);
export const POSTS_QUERY = 
defineQuery(`*[_type == "post" && defined(slug.current) && language == $language][0...12]{
  _id, title, slug, language,
  "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
    title, slug, language
  }
}`);

// export const POST_QUERY =
//   defineQuery(`*[_type == "post" && slug.current == $slug][0]{
//   title, body, mainImage
// }`);
export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug && language == $language][0]{
  title, body,  mainImage, language,
  "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
    title, body, language
  }
}`);