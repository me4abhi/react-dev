import "./styles.scss";
import CodeBlock from "../../../../components/CodeBlock/CodeBlock";
import DefinitionList from "../../../../components/DefinitionList/DefinitionList";

const UseCallback = () => {
  const syntax = `const cachedFn = useCallback(callbackFn, dependencies)`;
  const syntax_params = [
    {
      dt: "callbackFn",
      dd: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eumillo dicta autem facere reprehenderit sint? Sed, fugit, nostrum, quasi aut incidunt reprehenderit minima provident perspiciatis reiciendis mollitia veritatis aliquam?",
    },
  ];

  return (
    <>
      <h2 className="definitionTitle">useCallback</h2>
      <p className="definitionData">
        useCallback is a React Hook that lets us cache a function definition
        between re-renders.
      </p>
      <CodeBlock codeString={syntax} />
      <div>
        <h3>Parameters</h3>
        <DefinitionList definitionList={syntax_params} />
      </div>

      <h3>Usage:</h3>
      <ul>
        <li>Skipping re-rendering of components</li>
        <li>Updating state from a memoized callback</li>
        <li>Preventing an effect from firing too often</li>
        <li>Optimizing a custom hook</li>
      </ul>

      <h3>Returns:</h3>
      <p>
        On the intial render, useCallback returns the fn function which you have
        passed.
      </p>
      <p>
        During subsequent re-renders, it will return either an already stored fn
        function from the last render &#40;if the dependencies haven&#39;t
        changed&#41;, or return the fn function which we have passed during
        current render.
      </p>
    </>
  );
};

export default UseCallback;
