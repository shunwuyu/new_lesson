import * as React from 'react';

function imgPromise(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const i = new Image();
    i.onload = () => resolve();
    i.onerror = reject;
    i.src = src;
  });
}

const stringToArray = (x: string | string[]) => (Array.isArray(x) ? x : [x]);
const removeBlankArrayElements = (a: string[]) => a.filter(x => x);

export interface useImageParams {
  loadImg?: (src: string) => Promise<void>;
  src: string;
}


function useImage({
  loadImg = imgPromise,
  src,
}: useImageParams): { src: string | undefined; loading: boolean; error: any } {
  // console.log(src, '///////')
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [value, setValue] = React.useState(src);


  React.useEffect(() => {
    imgPromise(value)
      .then(() => {
        setLoading(false);
        setValue(src);
      })
      .catch(error => {
        setLoading(false);
        setError(error);
      })
  }, [])

  return { loading: loading, src: value, error: error };
}

export default useImage;