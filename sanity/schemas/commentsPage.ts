export default {
  name: 'commentsPage',
  title: 'Comments Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Page Description',
      type: 'text',
    },
    {
      name: 'formSubtitle',
      title: 'Form Subtitle',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Describe the image for accessibility.',
      validation: (Rule: any) => Rule.required().error('Alt text is required'),
    },
    {
      name: 'formFields',
      title: 'Form Fields',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name Field Label',
          type: 'string',
        },
        {
          name: 'email',
          title: 'Email Field Label',
          type: 'string',
        },
        {
          name: 'subject',
          title: 'Subject Field Label',
          type: 'string',
        },
        {
          name: 'message',
          title: 'Message Field Label',
          type: 'string',
        },
        {
          name: 'subscriber',
          title: 'Subscriber Checkbox Label',
          type: 'string',
        },
      ],
    },
  ],
};
