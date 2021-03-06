// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// cxostories : Parth Patel
// import location from "../documents/location";
// import sponsor from "../cxostories/documents/sponsor";
// import moderator from "../cxostories/documents/moderator";
// import keynote from "../cxostories/documents/keynote";
// import panelist from "../cxostories/documents/panalist";
// import testimonial from "../cxostories/documents/testimonial";
// import speaker from "../cxostories/documents/speaker";
// import webinar from "../cxostories/documents/webinar";
import  {location,sponsor,moderator,keynote,panelist,testimonial,speaker,webinar} from '../documents'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "cxostories-schema",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    location,
    sponsor,
    moderator,
    keynote,
    panelist,
    testimonial,
    speaker,
    webinar,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
