![](https://juejin.cn/post/6944863057000529933)

-  React 核心追求是什么
  React 追求的是 “快速响应”

  React 和 Vue 有什么区别
  React 是用 JavaScript 构建快速响应的大型 Web 应用程序的首选方式。它在 Facebook 和 Instagram 上表现优秀。React 最棒的部分之一是引导我们思考如何构建一个应用。

- fiber 架构主要就是用来解决 CPU 和网络的问题，这两个问题一直也是最影响前端开发体验的地方，一个会造成卡顿，一个会造成白屏。为此 react 为前端引入了两个新概念：Time Slicing 时间分片和Suspense。
   Fiber 为什么是 React 性能的一个飞跃】
   Fiber 的英文含义是“纤维”，它是比线程（Thread）更细的线，比线程（Thread）控制得更精密的执行模型。在广义计算机科学概念中，Fiber 又是一种协作的（Cooperative）编程模型（协程），帮助开发者用一种【既模块化又协作化】的方式来编排代码。

  在 React 中，Fiber 就是 React 16 实现的一套新的更新机制，让 React 的更新过程变得可控，避免了之前采用递归需要一气呵成影响性能的做法


  把一个耗时长的任务分成很多小片，每一个小片的运行时间很短，虽然总时间依然很长，但是在每个小片执行完之后，都给其他任务一个执行的机会，这样唯一的线程就不会被独占，其他任务依然有运行的机会。
  React Fiber 把更新过程碎片化，每执行完一段更新过程，就把控制权交还给 React 负责任务协调的模块，看看有没有其他紧急任务要做，如果没有就继续去更新，如果有紧急任务，那就去做紧急任务。

作者：獨釣寒江雪
链接：https://juejin.cn/post/6984949525928476703
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

1. react hooks 是？
  - Hook 是 React 16.8 的新增特性。
  - 听起来很cool，实际就是函数组件解决没有state，生命周期，逻辑不能复用的一种技术方案。

2. 怎么介绍有哪些hooks？ 
  - 负责组件更新的useState
  - 负责执行副作用useEffect
  - 负责保存数据的useRef
  - 负责缓存优化的useMemo
  还有  useCallback,useReducer,useLayoutEffect

3. function组件和class组件本质的区别
  ```js
  class Index extends React.Component<any,any>{
    constructor(props){
        super(props)
        this.state={
            number:0
        }
    }
    handerClick=()=>{
       for(let i = 0 ;i<5;i++){
           setTimeout(()=>{
              //setTimeout中执行  批量更新条件被破坏  
              // 要不要异步， 在于要不要批量更新
              // 同步
               this.setState({ number:this.state.number+1 })
               console.log(this.state.number)
           },1000)
       }
    }

    render(){
        return <div>
            <button onClick={ this.handerClick } >num++</button>
        </div>
    }
  }
  ```
  1 2 3 4 5
  ```js
  function Index(){
    const [ num ,setNumber ] = React.useState(0)
    const handerClick=()=>{
        for(let i=0; i<5;i++ ){
           setTimeout(() => {
                setNumber(num+1)
                console.log(num)
           }, 1000)
        }
    }
    return <button onClick={ handerClick } >{ num }</button>
  }
  ```
  0 0 0 0 0
  - 两种执行的区别是什么？
    有没有正常函数执行上下文
  1. 第一个类组件中, 执行上setState没有在react正常的函数执行上下文上执行,
  而是setTimeout中执行的, 批量更新条件被破坏
  2. 在class状态中，通过一个实例化的class，去维护组件中的各种状态；但是在function组件中，没有一个状态去保存这些信息.
    每一次函数上下文执行，所有变量，常量都重新声明，执行完毕，再被垃圾机制回收。
    无论setTimeout执行多少次，都是在当前函数上下文执行,此时num = 0不会变，之后setNumber执行，函数组件重新执行之后，num才变化。
    对于class组件，我们只需要实例化一次，实例中保存了组件的state等状态。对于每一次更新只需要调用render方法就可以。但是在function组件中，每一次更新都是一次新的函数执行,为了保存一些状态,执行一些副作用钩子,react-hooks应运而生，去帮助记录组件的状态，处理一些额外的副作用。

- 当我们引入hooks时候发生了什么？
  useState 源码
  https://github.com/facebook/react/blob/42f15b324f50d0fd98322c21646ac3013e30344a/packages/react/src/ReactHooks.js
  - import { useState } from 'react'
  - react/src/ReactHooks.js
  - ```js
    export function useState(initialState){
      const dispatcher = resolveDispatcher();
      return dispatcher.useState(initialState);
    }
    ```
  - useState() 的执行等于 dispatcher.useState(initialState) 这里面引入了一个dispatcher
  - resolveDispatcher
    ```js
    function resolveDispatcher() {
      const dispatcher = ReactCurrentDispatcher.current
      return dispatcher
    }
    ```
  - ReactCurrentDispatcher
    react/src/ReactCurrentDispatcher.js
    ```js
    const ReactCurrentDispatcher = {
      current: null,
    };
    ```
  线索断了

  - renderWithHooks 执行函数
    对于function组件是什么时候执行的呢？
    react-reconciler/src/ReactFiberBeginWork.new.js
    ReactFiberHooks.new.js
    function组件初始化：
    ```js
    renderWithHooks(
      null,                // current Fiber22
      workInProgress,      // workInProgress Fiber
      Component,           // 函数组件本身
      props,               // props
      context,             // 上下文
      renderExpirationTime,// 渲染 ExpirationTime
    );

    ```
    对于初始化是没有current树的，之后完成一次组件更新后，会把当前workInProgress树赋值给current树
    function组件更新后
    ```js
    renderWithHooks(
      current,
      workInProgress,
      render,
      nextProps,
      context,
      renderExpirationTime,
    );
    ```
    renderWithHooks函数作用是调用function组件函数的主要函数,
  
  renderWithHooks代码
  ```
    export function renderWithHooks(
      current,
      workInProgress,
      Component,
      props,
      secondArg,
      nextRenderExpirationTime,
    ) {
    renderExpirationTime = nextRenderExpirationTime;
    currentlyRenderingFiber = workInProgress;

    workInProgress.memoizedState = null;
    workInProgress.updateQueue = null;
    workInProgress.expirationTime = NoWork;

  ReactCurrentDispatcher.current =
      current === null || current.memoizedState === null
        ? HooksDispatcherOnMount
        : HooksDispatcherOnUpdate;

    let children = Component(props, secondArg);

    if (workInProgress.expirationTime === renderExpirationTime) { 
        // ....这里的逻辑我们先放一放
    }

    ReactCurrentDispatcher.current = ContextOnlyDispatcher;

    renderExpirationTime = NoWork;
    currentlyRenderingFiber = null;

    currentHook = null
    workInProgressHook = null;

    didScheduleRenderPhaseUpdate = false;

    return children;
}
  ```
  所有的函数组件执行，都是在这里方法中
  current fiber树: 当完成一次渲染之后，会产生一个current树
  current会在commit阶段替换成真实的Dom树。

  workInProgress fiber树: 即将调和渲染的 fiber 树。再一次新的组件更新过程中，会从current复制一份作为workInProgress,更新完毕后，将当前的workInProgress树赋值给current树。

  workInProgress.memoizedState: 在class组件中，memoizedState存放state信息，在function组件中，这里可以提前透漏一下，memoizedState在一次调和渲染过程中，以链表的形式存放hooks信息。
  workInProgress.expirationTime: react用不同的expirationTime,来确定更新的优先级。

  currentHook : 可以理解 current树上的指向的当前调度的 hooks节点。
  workInProgressHook : 可以理解 workInProgress树上指向的当前调度的 hooks节点。

  renderWithHooks函数主要作用:

  首先先置空即将调和渲染的workInProgress树的memoizedState和updateQueue，为什么这么做，因为在接下来的函数组件执行过程中，要把新的hooks信息挂载到这两个属性上，然后在组件commit阶段，将workInProgress树替换成current树，替换真实的DOM元素节点。并在current树保存hooks信息。

  然后根据当前函数组件是否是第一次渲染，赋予ReactCurrentDispatcher.current不同的hooks,终于和上面讲到的ReactCurrentDispatcher联系到一起。对于第一次渲染组件，那么用的是HooksDispatcherOnMount hooks对象。
对于渲染后，需要更新的函数组件，则是HooksDispatcherOnUpdate对象，那么两个不同就是通过current树上是否memoizedState（hook信息）来判断的。如果current不存在，证明是第一次渲染函数组件。

  接下来，调用Component(props, secondArg);执行我们的函数组件，我们的函数组件在这里真正的被执行了，然后，我们写的hooks被依次执行，把hooks信息依次保存到workInProgress树上。 至于它是怎么保存的，我们马上会讲到。

  接下来，也很重要，将ContextOnlyDispatcher赋值给 ReactCurrentDispatcher.current，由于js是单线程的，也就是说我们没有在函数组件中，调用的hooks，都是ContextOnlyDispatcher对象上hooks,我们看看ContextOnlyDispatcherhooks，到底是什么。

  原来如此，react-hooks就是通过这种函数组件执行赋值不同的hooks对象方式，判断在hooks执行是否在函数组件内部，捕获并抛出异常的。
最后，重新置空一些变量比如currentHook，currentlyRenderingFiber,workInProgressHook等

```js
  const ContextOnlyDispatcher = {
    useState:throwInvalidHookError
}
function throwInvalidHookError() {
  invariant(
    false,
    'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' +
      ' one of the following reasons:\n' +
      '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' +
      '2. You might be breaking the Rules of Hooks\n' +
      '3. You might have more than one copy of React in the same app\n' +
      'See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.',
  );
}
```

3 不同的hooks对象
  第一次渲染 
  ```
  const HooksDispatcherOnMount = {
    useCallback: mountCallback,
    useEffect: mountEffect,
    useLayoutEffect: mountLayoutEffect,
    useMemo: mountMemo,
    useReducer: mountReducer,
    useRef: mountRef,
    useState: mountState,
  };
  ```
  更新
  ```js
  const HooksDispatcherOnUpdate = {
    useCallback: updateCallback,
    useEffect: updateEffect,
    useLayoutEffect: updateLayoutEffect,
    useMemo: updateMemo,
    useReducer: updateReducer,
    useRef: updateRef,
    useState: updateState
  };
  ```
  ![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/adcbd09984f84d0d97a15df124e83c09~tplv-k3u1fbpfcp-watermark.awebp)

- hook_demo
  1 mountWorkInProgressHook
    在组件初始化的时候,每一次hooks执行，如useState(),useRef(),都会调用mountWorkInProgressHook,mountWorkInProgressHook到底做了写什么，让我们一起来分析一下：
    react-reconciler/src/ReactFiberHooks.js -> mountWorkInProgressHook

  ```js
  function mountWorkInProgressHook() {
    const hook: Hook = {
      memoizedState: null,  // useState中 保存 state信息 ｜ useEffect 中 保存着 effect 对象 ｜ useMemo 中 保存的是缓存的值和deps ｜ useRef中保存的是ref 对象
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    if (workInProgressHook === null) { // 例子中的第一个`hooks`-> useState(0) 走的就是这样。
      currentlyRenderingFiber.memoizedState = workInProgressHook = hook;
    } else {
      workInProgressHook = workInProgressHook.next = hook;
    }
    return workInProgressHook;
  }
  ```

mountWorkInProgressHook这个函数做的事情很简单，首先每次执行一个hooks函数，都产生一个hook对象，里面保存了当前hook信息,然后将每个hooks以链表形式串联起来，并赋值给workInProgress的memoizedState。也就证实了上述所说的，函数组件用memoizedState存放hooks链表。
  memoizedState： useState中 保存 state 信息 ｜ useEffect 中 保存着 effect 对象 ｜ useMemo 中 保存的是缓存的值和 deps ｜ useRef 中保存的是 ref 对象。
  baseQueue : usestate和useReducer中 保存最新的更新队列。
  baseState ： usestate和useReducer中,一次更新中 ，产生的最新state值。
  queue ： 保存待更新队列 pendingQueue ，更新函数 dispatch 等信息。
  next: 指向下一个 hooks对象。

  ![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5660f1be680140239a8cf4e34cfccc90~tplv-k3u1fbpfcp-watermark.awebp)

知道每个hooks关系之后，我们应该理解了，为什么不能条件语句中，声明hooks。
```js
 let curRef  = null
 if(isFisrt){
  curRef = useRef(null)
 }
```

因为一旦在条件语句中声明hooks，在下一次函数组件更新，hooks链表结构，将会被破坏，current树的memoizedState缓存hooks信息，和当前workInProgress不一致，如果涉及到读取state等操作，就会发生异常。

上述介绍了 hooks通过什么来证明唯一性的，答案 ，通过hooks链表顺序。和为什么不能在条件语句中，声明hooks，接下来我们按照四个方向，分别介绍初始化的时候发生了什么？

2 初始化useState -> mountState
  ```js
  function mountState(
  initialState
){
  const hook = mountWorkInProgressHook();
  if (typeof initialState === 'function') {
    // 如果 useState 第一个参数为函数，执行函数得到state
    initialState = initialState();
  }
  hook.memoizedState = hook.baseState = initialState;
  const queue = (hook.queue = {
    pending: null,  // 带更新的
    dispatch: null, // 负责更新函数
    lastRenderedReducer: basicStateReducer, //用于得到最新的 state ,
    lastRenderedState: initialState, // 最后一次得到的 state
  });

  const dispatch = (queue.dispatch = (dispatchAction.bind( // 负责更新的函数
    null,
    currentlyRenderingFiber,
    queue,
  )))
  return [hook.memoizedState, dispatch];
}
  ```
  mountState到底做了些什么，首先会得到初始化的state
  将它赋值给mountWorkInProgressHook产生的hook对象的 memoizedState和baseState属性
  然后创建一个queue对象，里面保存了负责更新的信息。
  这里先说一下，在无状态组件中，useState和useReducer触发函数更新的方法都是dispatchAction,useState，可以看成一个简化版的useReducer,至于dispatchAction怎么更新state，更新组件的，我们接着往下研究dispatchAction。

  ```
  function dispatchAction<S, A>(
    fiber: Fiber,
    queue: UpdateQueue<S, A>,
    action: A,
  )
  ```
  dispatchAction 就是 setNumber
  dispatchAction 第一个参数和第二个参数，已经被bind给改成currentlyRenderingFiber和 queue,我们传入的参数是第三个参数action

  dispatchAction 无状态组件更新机制
  ```
  function dispatchAction(fiber, queue, action) {

  // 计算 expirationTime 过程略过。
  /* 创建一个update */
  const update= {
    expirationTime,
    suspenseConfig,
    action,
    eagerReducer: null,
    eagerState: null,
    next: null,
  }
  /* 把创建的update */
  const pending = queue.pending;
  if (pending === null) {  // 证明第一次更新
    update.next = update;
  } else { // 不是第一次更新
    update.next = pending.next;
    pending.next = update;
  }
  
  queue.pending = update;
  const alternate = fiber.alternate;
  /* 判断当前是否在渲染阶段 */
  if ( fiber === currentlyRenderingFiber || (alternate !== null && alternate === currentlyRenderingFiber)) {
    didScheduleRenderPhaseUpdate = true;
    update.expirationTime = renderExpirationTime;
    currentlyRenderingFiber.expirationTime = renderExpirationTime;
  } else { /* 当前函数组件对应fiber没有处于调和渲染阶段 ，那么获取最新state , 执行更新 */
    if (fiber.expirationTime === NoWork && (alternate === null || alternate.expirationTime === NoWork)) {
      const lastRenderedReducer = queue.lastRenderedReducer;
      if (lastRenderedReducer !== null) {
        let prevDispatcher;
        try {
          const currentState = queue.lastRenderedState; /* 上一次的state */
          const eagerState = lastRenderedReducer(currentState, action); /**/
          update.eagerReducer = lastRenderedReducer;
          update.eagerState = eagerState;
          if (is(eagerState, currentState)) { 
            return
          }
        } 
      }
    }
    scheduleUpdateOnFiber(fiber, expirationTime);
  }
}

  ```
  无论是类组件调用setState,还是函数组件的dispatchAction ，都会产生一个 update对象，里面记录了此次更新的信息，然后将此update放入待更新的pending队列中，dispatchAction第二步就是判断当前函数组件的fiber对象是否处于渲染阶段，如果处于渲染阶段，那么不需要我们在更新当前函数组件，只需要更新一下当前update的expirationTime即可。
如果当前fiber没有处于更新阶段。那么通过调用lastRenderedReducer获取最新的state,和上一次的currentState，进行浅比较，如果相等，那么就退出，这就证实了为什么useState，两次值相等的时候，组件不渲染的原因了，这个机制和Component模式下的setState有一定的区别。
如果两次state不相等，那么调用scheduleUpdateOnFiber调度渲染当前fiber，scheduleUpdateOnFiber是react渲染更新的主要函数。
  我们把初始化mountState和无状态组件更新机制讲明白了，接下来看一下其他的hooks初始化做了些什么操作？

  我们来总结一下初始化阶段,react-hooks做的事情，在一个函数组件第一次渲染执行上下文过程中，每个react-hooks执行，都会产生一个hook对象，并形成链表结构，绑定在workInProgress的memoizedState属性上，然后react-hooks上的状态，绑定在当前hooks对象的memoizedState属性上。对于effect副作用钩子，会绑定在workInProgress.updateQueue上，等到commit阶段，dom树构建完成，在执行每个 effect 副作用钩子。

  上述介绍了第一次渲染函数组件，react-hooks初始化都做些什么，接下来，我们分析一下，
对于更新阶段，说明上一次 workInProgress 树已经赋值给了 current 树。存放hooks信息的memoizedState，此时已经存在current树上，react对于hooks的处理逻辑和fiber树逻辑类似。
对于一次函数组件更新，当再次执行hooks函数的时候，比如 useState(0) ，首先要从current的hooks中找到与当前workInProgressHook，对应的currentHooks，然后复制一份currentHooks给workInProgressHook,接下来hooks函数执行的时候,把最新的状态更新到workInProgressHook，保证hooks状态不丢失。
所以函数组件每次更新，每一次react-hooks函数执行，都需要有一个函数去做上面的操作，这个函数就是updateWorkInProgressHook,我们接下来一起看这个updateWorkInProgressHook。


React Fiber 是Facebook花费两年余时间对 React 做出的一个重大改变与优化，是对 React 核心算法的一次重新实现
