import * as React from 'react';
import useImage  from './useImage';
const Main = () => {
  const [visible, setVisible] = React.useState(false);
  const { src, loading, error } = useImage({
    src: 'https://dummyimage.com/3000x3000/000/fff',
  });
  return (
    <div>
      <h3>main</h3>
      <p>loading:{JSON.stringify(loading)}</p>
      <p>error:{JSON.stringify(error)}</p>
      <p>src:{src}</p>
      {loading && <p>加载中</p>}
      {error && <p>出错啦</p>}
      {src && <img src={src} alt="100*100" width={100} height={100} />}
      <br />
      {/* <button onClick={() => setVisible(!visible)}>toggle</button>
      {visible && <Another></Another>} */}
    </div>
  );
}
export default Main;