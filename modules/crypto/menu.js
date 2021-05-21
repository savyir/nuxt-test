export default {
  ADMIN_DRAWER: [
    {
      title: 'example', icon: 'add', items: [
        {title: 'all', permission: "example.find", icon: 'link', link: '/admin/example'},
        {title: 'new', permission: "example.create", icon: 'link', link: '/admin/example/create'}
      ]
    },
    {
      title: 'builder', icon: 'add', items: [
        {title: 'forms', permission: "form.find", icon: 'link', link: '/admin/builder/forms'},
        {title: 'groups', permission: "group.find", icon: 'link', link: '/admin/builder/groups'},
        {title: 'elements', permission: "element.find", icon: 'link', link: '/admin/builder/elements'},
        {title: 'records', permission: "record.find", icon: 'link', link: '/admin/builder/records'}
      ]
    },
    {
      title: 'process', icon: 'add', items: [
        {title: 'register user', permission: "record.create", icon: 'link', link: '/admin/process/register-user'},

      ]
    },
    {title: 'customers', permission: "customer.find", icon: 'add', link: '/admin/customers'},
  ]
}
