export default [
  {
    text: 'id',
    align: 'start',
    sortable: true,
    value: 'id',
    edit: false,
    create: false,
    show: true,
    filterable: true,
    type: 'text',
    searchable: true,
  },

  {
    text: 'title',
    lg:6,
    value: 'title',
    type: 'text', // textarea bool img rich price date
    header: true,
    table: true,
    show: true,
    pop: true,
    edit: true,
    align: 'start', // end
    sortable: true,
    searchable: true,
    filterable: true,
    colFilter: true, // true,
    role: '', // null
    permission: '', // null
  },
  {
    text: 'name',
    lg:6,
    value: 'name',
    type: 'text', // textarea bool img rich price date
    header: true,
    show: true,
    pop: true,
    edit: true,
    align: 'start', // end
    sortable: true,
    searchable: true,
    filterable: true,
    colFilter: true, // true,
    role: '', // null
    permission: '', // null
  },

  {
    text: 'field type',
    md:6,
    value: 'type',
    type: 'enum', // textarea bool img rich price date
    meta: [
      {value: "text", text: "text"},
      {value: "media", text: "media"},
      {value: "rich", text: "rich text"},
      {value: "bool", text: "boolean"},
    ],
    header: true,
    table: true,
    show: true,
    pop: true,
    edit: true,
    align: 'start', // end
    sortable: true,
    searchable: true,
    filterable: true,
    colFilter: true, // true,
    role: '', // null
    permission: '', // null
  },
  {
    text: 'groups',
    md:6,
    value: 'groups',
    type: 'select', // textarea bool img rich price date
    multiple: true,
    server: 'groups',
    meta: {
      text: 'title',
      value: 'id',
    },
    header: true,
    show: true,
    pop: true,
    edit: true,
    align: 'start', // end
    sortable: true,
    searchable: true,
    filterable: true,
    colFilter: true, // true,
    role: '', // null
    permission: '', // null
  },

  {
    text: 'shows in',
    lg:12,
    value: '',
    show: true,
    header: false,
    expand: false,
    pop: true,
    filterable: false,
    type: 'label',
    align: 'center'
  },
  {
    text: 'table',
    md:3,
    value: 'table',
    type: 'bool', // textarea bool img rich price date
    header: true,
    show: true,
    pop: true,
    edit: true,
    align: 'center', // end
    sortable: true,
    searchable: false,
    filterable: true,
    colFilter: true, // true,
  },
  {
    text: 'modal',
    md:3,
    value: 'pop',
    type: 'bool', // textarea bool img rich price date
    header: true,
    show: true,
    pop: true,
    edit: true,
    align: 'center', // end
    sortable: true,
    searchable: false,
    filterable: true,
    colFilter: true, // true,
  },
  {
    text: 'expand',
    md:3,
    value: 'expand',
    type: 'bool', // textarea bool img rich price date
    header: true,
    show: true,
    pop: true,
    edit: true,
    align: 'center', // end
    sortable: true,
    searchable: false,
    filterable: true,
    colFilter: true, // true,
  },
  {
    text: 'create',
    md:3,
    value: 'create',
    type: 'bool', // textarea bool img rich price date
    header: true,
    show: true,
    pop: true,
    edit: true,
    align: 'center', // end
    sortable: true,
    searchable: false,
    filterable: true,
    colFilter: true, // true,
  },
  {
    text: 'editable',
    md:3,
    value: 'edit',
    type: 'bool', // textarea bool img rich price date
    header: true,
    show: true,
    pop: true,
    edit: true,
    align: 'center', // end
    sortable: true,
    searchable: false,
    filterable: true,
    colFilter: true, // true,
  },
  {
    text: 'features',
    lg:12,
    value: '',
    show: true,
    header: false,
    expand: false,
    pop: true,
    filterable: false,
    type: 'label',
    align: 'center'
  },
  {
    text: 'active',
    md:3,
    value: 'active',
    type: 'bool', // textarea bool img rich price date
    header: true,
    show: true,
    pop: true,
    edit: true,
    align: 'center', // end
    sortable: true,
    searchable: false,
    filterable: true,
    colFilter: true, // true,
  },
  {
    text: 'required',
    md:3,
    value: 'required',
    type: 'bool', // textarea bool img rich price date
    header: true,
    show: true,
    pop: true,
    edit: true,
    align: 'center', // end
    sortable: true,
    searchable: false,
    filterable: true,
    colFilter: true, // true,
  },
  {
    text: 'hidden',
    md:3,
    value: 'hide',
    type: 'bool', // textarea bool img rich price date
    header: true,
    show: true,
    pop: true,
    edit: true,
    align: 'center', // end
    sortable: true,
    searchable: false,
    filterable: true,
    colFilter: true, // true,
  },
  {
    text: 'readonly',
    md:3,
    value: 'readonly',
    type: 'bool', // textarea bool img rich price date
    header: true,
    show: true,
    pop: true,
    edit: true,
    align: 'center', // end
    sortable: true,
    searchable: false,
    filterable: true,
    colFilter: true, // true,
  },
  {
    text: '',
    lg:12,
    value: '',
    show: true,
    header: false,
    expand: false,
    pop: true,
    filterable: false,
    type: 'label',
    align: 'center'
  },
  {
    text: 'placeholder',
    lg:6,
    value: 'placeholder',
    show: true,
    header: false,
    expand: false,
    pop: true,
    filterable: false,
    type: 'text',
    align: 'center'
  },
  {
    text: 'help',
    lg:12,
    value: 'help',
    show: true,
    header: false,
    expand: false,
    pop: true,
    filterable: false,
    type: 'rich',
    align: 'text'
  },
  {
    text: 'rules',
    value: 'rules',
    show: true,
    header: false,
    expand: false,
    pop: true,
    filterable: false,
    type: 'textarea',
    align: 'center'
  },
  {
    text: 'responsive size (0-12)',
    lg:12,
    value: '',
    show: true,
    header: false,
    expand: false,
    pop: true,
    filterable: false,
    type: 'label',
    align: 'center'
  },
  {
    text: 'cols',
    md:3,
    value: 'cols',
    default:12,
    show: true,
    header: false,
    expand: false,
    pop: true,
    filterable: false,
    type: 'number',
    align: 'center'
  },
  {
    text: 'sm',
    md:3,
    value: 'sm',
    default:12,
    numeric:true,
    show: true,
    header: false,
    expand: false,
    pop: true,
    filterable: false,
    type: 'number',
    align: 'center'
  },
  {
    text: 'md',
    md:3,
    value: 'md',
    default:12,
    numeric:true,
    show: true,
    header: false,
    expand: false,
    pop: true,
    filterable: false,
    type: 'number',
    align: 'center'
  },
  {
    text: 'lg',
    md:3,
    value: 'lg',
    default:12,
    numeric:true,
    show: true,
    header: false,
    expand: false,
    pop: true,
    filterable: false,
    type: 'number',
    align: 'center'
  },
  {
    text: 'action',
    filterable: false,
    value: 'actions',
    show: false,
    edit: false,
    create: false,
    sortable: false,
    searchable: false,
    align: 'left'
  },
]

