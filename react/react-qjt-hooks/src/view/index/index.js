import React from 'react';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import TopicsList from "../../component/topicsList";
import { useTopicList } from "../../store/action";
// 组件状态被收到store

const Index = () => {
  let page = 1, tab = 'all';
  let getData = useTopicList();
  useEffect(() => {
    getData(tab, page);
  }, [page, tab]);
  // 一般每个页面都对应一个模块的reducer
  let { data, loading } = useSelector((state) => state.topics);
  console.log(data, loading);
  // 加载中的列表展示
  return (
    <>
      <TopicsList data={data} loading={loading} />
    </>
  )
}

export default Index;