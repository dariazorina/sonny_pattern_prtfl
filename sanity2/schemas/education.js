import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "institution",
      title: "Institution",
      type: "string",
    },
    {
      name: "dateStarted",
      title: "DateStarted",
      type: "date",
    },
    {
      name: "dateEnded",
      title: "DateEnded",
      type: "date",
    },
    {
      name: "diploma",
      title: "Diploma",
      type: "file",
    },    
    {
      name: "urlDiploma",
      title: "Diploma URL",
      type: "string",
    },
    {
      name: "imageDiploma",
      title: "Diploma Image",
      type: "image",
    }
  ],
}) 