export default [
  {
    text: 'id',
    value: 'id',
    type: 'text',
    header: true, // show on table
    edit: false, // show on edit
    create: false, // show on create page
    show: true, // show page
    pop: true,  // show on pop
    filterable: true,
    searchable: true
  },
  {
    text: 'text',
    value: 'text',
    type: 'text',
    header: true, // show on table
    edit: true, // show on edit
    create: true, // show on create page
    show: true, // show page
    pop: true,  // show on pop
    filterable: true,
    searchable: true
  },
  {
    text: 'text editor',
    value: 'rich',
    type: 'rich',
    header: true, // show on table
    edit: true, // show on edit
    create: true, // show on create page
    show: true, // show page
    pop: true,  // show on pop
    filterable: true,
    searchable: true
  },
  {
    text: 'dateTime',
    value: 'datetime',
    type: 'dateTime',
    header: true, // show on table
    edit: true, // show on edit
    create: true, // show on create page
    show: true, // show page
    pop: true,  // show on pop
    filterable: true,
    searchable: true
  },
  {
    type: 'counter',
    value: 'counts',
    text: 'counter'
  },
  {
    value: 'image',
    type: 'image',
    text: 'image'
  },
  {
    value: 'audio',
    type: 'audio',
    text: 'audio'
  },
  {
    value: 'images',
    type: 'image',
    multiple: true,
    text: 'images'
  },
  {
    value: 'media',
    type: 'media',
    multiple: true,
    types: ['image', 'audio', 'video', 'files'],
    text: 'media file'
  },
  {
    type: 'bool',
    value: 'bool',
    text: 'boolean'
  },
  {
    text: 'sum',
    type: 'calc',
    value: 'calc',
    calc: "sum",
    input: ['counter'],
  },
  {
    text: 'time',
    value: 'time',
    type: 'time',
    header: true, // show on table
    edit: true, // show on edit
    create: true, // show on create page
    show: true, // show page
    pop: true,  // show on pop
    filterable: true,
    searchable: true
  },
  {
    text: 'date',
    value: 'date',
    type: 'date',
    header: true, // show on table
    edit: true, // show on edit
    create: true, // show on create page
    show: true, // show page
    pop: true,  // show on pop
    filterable: true,
    searchable: true
  }
]
