import PropTypes from "prop-types";

export default function CTAButton({onTap, text, paddingOverride, marginOverride}) {
    if (paddingOverride || marginOverride) {
        return (
            <button
                onClick={onTap}
                style={{padding: paddingOverride, margin: marginOverride}}>
                {text}
            </button>
        );

    }
    return (
        <button
            onClick={onTap}>
            {text}
        </button>
    );
}

CTAButton.propTypes = {
    onTap: PropTypes.func,
    text: PropTypes.string,
    paddingOverride: PropTypes.string,
    marginOverride: PropTypes.string
};