import React from 'react';

function HomeCopy(props) {

  const { title, ...others } = props;

  const c = { d: 1, ...{ b: 2 } };
  const a = Object.assign({}, { a: 1 });

  Object.fromEntries(item).map(() => {});

  const aa = 'xxx';
  aa.matchAll(/x/);


  return (
    <div>
      HomeCopy
    </div>
  );
}

export default HomeCopy;
