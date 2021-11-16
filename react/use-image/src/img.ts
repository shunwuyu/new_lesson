import * as React from "react";

// 将图片加载转为promise调用形式
function imgPromise(src: string) {
  return new Promise((resolve, reject) => {
    const i = new Image();
    i.onload = () => resolve();
    i.onerror = reject;
    i.src = src;
  });
}

export const useImage = ({ src }: { src: string }): {
  src: string | undefined,
  isLoading: boolean,
  error: any,
} => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [value, setValue] = React.useState<string|undefined>(undefined);
  React.useEffect(() => {
    imgPromise(src)
      .then((() => {
        setLoading(false);
        setValue(src);
      }))
      .catch((error) => {
        // 加载失败
        setLoading(false);
        setError(error);
      });
  }, [src])
  return { isLoading: loading, src: value, error: error };
}
