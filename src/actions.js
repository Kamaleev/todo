import { useState } from 'react';

export default init => {
  const [values, set] = useState(init);

  return {
    values,
    add: text => set([...values, text]),
    del: i => set(values.filter((value, index) => index !== i)),
  };
};
