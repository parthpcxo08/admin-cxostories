// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
// document schemas
import author from "./documents/author";
import category from "./documents/category";
import post from "./documents/post";
import siteSettings from "./documents/siteSettings";

// Object types
import bodyPortableText from "./objects/bodyPortableText";
import bioPortableText from "./objects/bioPortableText";
import excerptPortableText from "./objects/excerptPortableText";
import mainImage from "./objects/mainImage";
import authorReference from "./objects/authorReference";

// cxostories : Parth Patel
import location from "../cxostories/documents/location";
import sponsor from "../cxostories/documents/sponsor"
import moderator from "../cxostories/documents/moderator"
import keynote from '../cxostories/documents/keynote'
import panelist from '../cxostories/documents/panalist'
import testimonial from '../cxostories/documents/testimonial'
import speaker from '../cxostories/documents/speaker'
import webinar from '../cxostories/documents/webinar'
// import tags from 'part:tags/schemas/tags-default'
// import tag from 'sanity-plugin-tags'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "cxostories-schema",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    // tag,tags,
    // tags,
    siteSettings,
    post,
    category,
    author,
    mainImage,
    authorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    location,
    sponsor,
    moderator,
    keynote,
    panelist,
    testimonial,
    speaker,
    webinar
   
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
