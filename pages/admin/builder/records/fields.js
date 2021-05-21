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
    text: 'form',
    value: 'form',
    type: 'select', // textarea bool img rich price date
    multiple: false,
    server: 'forms',
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
    text: 'status',
    value: 'status', // textarea bool img rich price date
    type: 'enum', // textarea bool img rich price date
    meta: [
      {text: 'unknown', value: 'unknown'},
      {text: 'approved', value: 'approved'},
      {text: 'rejected', value: 'rejected'},
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
    text: 'code',
    value: 'code',
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
    text: 'description',
    value: 'note',
    type: 'textarea', // textarea bool img rich price date
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

