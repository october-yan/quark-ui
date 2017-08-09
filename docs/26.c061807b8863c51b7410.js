webpackJsonp([26],{"8fnD":function(n,e){n.exports="---\nauthor:\n  name: ryan.bian\n  homepage: https://github.com/macisi/\n  email: macisi528@gmail.com\n---\n\n## Pagination\n\n采用分页的形式分隔长列表，每次只加载一个页面。\n\n### 何时使用\n\n- 当加载/渲染所有数据将花费很多时间时；\n- 可切换页码浏览数据。\n\n### Props\n|name|type|default|description|\n|---|---|---|---|\n| current | number | - | 当前页数 |\n| current | number | 1 | 默认当前页数 |\n| total | number | 0 | 总数 |\n| pageSize | number | - | 每页条数 |\n| defaultPageSize | number | 10 | 默认每页条数 |\n| onChange | function(page, pageSize) | noop | 页码改变回调，参数 |\n| showSizeChanger | boolean | false | 显示分页条数选择 |\n| onSizeChange | function(size, current) | noop | pageSize 变化回调 |\n| pageSizeOptions| number[] | [10, 20, 30, 40] | 指定每页可以显示多少条 |\n| showQuickJumper| boolean | false | 是否展示跳转输入框 |\n| size| string | '' | `small` 指定小尺寸分页  |\n| showTotal | boolean | false | 展示总数 |\n\n### Api"}});
//# sourceMappingURL=26.c061807b8863c51b7410.js.map