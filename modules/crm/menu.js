export default {
  FOOTER_LINKS: [],
  PANEL_DRAWER: [
    {
      title: 'داشبورد', icon: 'fa-dashboard', link: '/crm/?sd'
    },
    {
      title: 'سفارش', icon: 'fa-shopping-cart', link: '/crm/forms'
    },
    {
      title: 'لیست قیمت ها', icon: 'fa-pie-chart', link: '/crm/?df'
    },
    {
      title: 'تاریخچه سفارشات', icon: 'fa-ship', link: '/crm'
    },
    {
      title: 'مالی', icon: 'fa-money', link: '/crm/factor'
    },
    {
      title: 'دعوت از دوستان', icon: 'fa-handshake-o', link: '/crm'
    }
  ],
  PANEL_DASHBOARD: [
    {
      title: 'داشبورد', icon: 'fa-dashboard', link: '/crm/?sd'
    },
    {
      title: 'سفارش', icon: 'fa-shopping-cart', link: '/crm/forms'
    },
    {
      title: 'لیست قیمت ها', icon: 'fa-pie-chart', link: '/crm/?df'
    },
    {
      title: 'تاریخچه سفارشات', icon: 'fa-ship', link: '/crm'
    },
    {
      title: 'مالی', icon: 'fa-money', link: '/crm/factor'
    },
    {
      title: 'دعوت از دوستان', icon: 'fa-handshake-o', link: '/crm'
    }
  ],
  PANEL_TOP_MENU: [
    {
      title: 'لیست', icon: 'list', link: '/admin/list'
    }, {
      title: 'لیست ssr‌ ساده', icon: 'list', link: '/admin/ssr-list'
    }, {
      title: 'لیست ssr‌ با کوئری', icon: 'list', link: '/admin/ssr-list-query'
    },
    {
      title: 'کاربران', icon: 'people', link: '/admin/user', items: [
        {title: 'مدیریت کاربران', icon: 'add', link: '/admin/users'},
        {title: 'لیست مدیران', icon: 'add', link: '/admin/admins'},
        {title: 'نقش ها', icon: 'add', link: '/admin/roles'},
        {title: 'دسترسی ها', icon: 'add', link: '/admin/permissions'},
      ]
    }
  ],
}
