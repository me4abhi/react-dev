import "./CodeBlock.scss";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ codeString }) => {
  return (
    <SyntaxHighlighter
      language="jsx"
      style={vscDarkPlus}
      className="syntax-highlighter"
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

CodeBlock.propTypes = {
  codeString: PropTypes.string.isRequired,
};

export default CodeBlock;
