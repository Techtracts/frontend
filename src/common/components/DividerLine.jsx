import '../styles/DividerLine.css';
import PropTypes from "prop-types";

function DividerLine({isVertical, colorOverride}) {
    if (colorOverride) {
        return <div className={`${isVertical ? 'vertical-line' : 'horizontal-line'}`}
                    style={{backgroundColor: colorOverride}}/>;
    }
    return <div className={`${isVertical ? 'vertical-line' : 'horizontal-line'}`}/>;
}

DividerLine.defaultProps = {
    isVertical: true,
}

DividerLine.propTypes = {
    isVertical: PropTypes.bool,
    colorOverride: PropTypes.string,
}

export default DividerLine;