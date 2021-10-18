import { Avatar, Col, List } from "antd";
function TopicsList(props) {
  let { loading, data } = props;
  return (
      <List
          className="topic_list"
          loading={loading}
          dataSource={data}
          renderItem={(data) => {
              return (
                  <List.Item>
                    <Col xs={24} md={20}>
                      {data.title}
                    </Col>
                  </List.Item>
              )
            }
          }>

        </List>)
}

export default TopicsList;