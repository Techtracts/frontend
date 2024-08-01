import PropTypes from "prop-types";

export const highRiskClausesPropType = PropTypes.arrayOf(PropTypes.shape({
    clauseLocation: PropTypes.string.isRequired,
    clauseId: PropTypes.string.isRequired,
    riskLevel: PropTypes.number.isRequired,
    riskFactors: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
})).isRequired
