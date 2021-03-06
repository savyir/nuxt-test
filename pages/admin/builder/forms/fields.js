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
    text: 'active',
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
    text: 'pre text',
    value: 'pre_text',
    show: true,
    header: false,
    expand: false,
    pop: true,
    filterable: false,
    type: 'rich',
    align: 'center'
  },
  {
    text: 'after text',
    value: 'after_text',
    show: true,
    header: false,
    expand: false,
    pop: true,
    filterable: false,
    type: 'rich',
    align: 'center'
  },
  {
    text: 'action',
    filterable: false,
    value: 'actions',
    show: false,
    create: false,
    edit: false,
    sortable: false,
    searchable: false,
    align: 'left'
  },
]

