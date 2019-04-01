const routes = [
  {path: "/",
  component: require("../app.js").default,
  // indexRoute: {
  //   component: require("../app.js").default
  // },
  childRoutes: [
    // { // 对应 /msg/add
    //   path: 'add',
    //   getComponent (nextState, cb) {
    //     require.ensure([], (require) => {
    //       cb(null, connectComponent(require('COMPONENT/Msg/MsgForm').default))
    //     }, 'msgForm')
    //   },
    //   onEnter: userAuth
    // },
    {
      path: "home",
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require("../views/home/home.js").default)
        }, "home")
      },
    },
    {
      path: "module1",
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require("../views/module/moduleFirst.js").default)
        }, "module1")
      },
    },
    {
      path: "module2",
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require("../views/module/moduleSecond.js").default)
        }, "module2")
      },
    },
    {
      path: "module3",
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require("../views/module/moduleThird.js").default)
        }, "module3")
      },
    },
  ]}
]
export default routes