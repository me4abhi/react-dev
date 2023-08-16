import PropTypes from "prop-types";

const DefinitionList = ({ definitionList }) => {
  return (
    <dl>
      {definitionList.map((item) => (
        <>
          <dt>{item.dt}</dt>
          <dd>{item.dd}</dd>
        </>
      ))}
    </dl>
  );
};

DefinitionList.propTypes = {
  definitionList: PropTypes.array.isRequired,
};

export default DefinitionList;
