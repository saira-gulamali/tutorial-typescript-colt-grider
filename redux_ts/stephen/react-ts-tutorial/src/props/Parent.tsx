import { Child, ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <>
      <Child color="red" handleClick={() => alert("hello")}>
        <h3>Im an H3</h3>
      </Child>
      ;
      <ChildAsFC color="blue" handleClick={() => alert("hello from FC")}>
        <h5>This is the FC</h5>
      </ChildAsFC>
    </>
  );
};
export default Parent;
