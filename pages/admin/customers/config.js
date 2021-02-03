export default {
  data() {
    return {
      title: 'Customers',
      api: 'customers', // api end-point
      resource: 'customers', // path on nuxt project
      icon: "fa-shield",
      name: 'customers', // custom name
      popTitle: 'Customer Details',
      popWidth: '1120',
      color: 'success darken-4',
      sortable: false,
      filterable: false,
      reportable: true,
      searchable: true,
      searchQuery: true,
      deleteAll: false,
      newItem: false,
      editItem: false,
    }
  }
}
