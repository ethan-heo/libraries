import { useState as t } from "react";
function s() {
  const [e, n] = t(0);
  return {
    counter: e,
    increaseCount: () => {
      n(e + 1);
    },
    decreaseCount: () => {
      n(e - 1);
    }
  };
}
export {
  s as useCounter
};
