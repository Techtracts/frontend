import '../styles/RiskLevelBars.css';
import PropTypes from "prop-types";

const RiskLevelBars = ({riskScore}) => {
    // Define the colors for each risk level
    const colors = ['#06B050', '#92D051', '#FFFF00', '#FF6619', '#C00000'];

    // Create an array representing the 5 bars
    const bars = Array.from({length: 5}, (_, index) => ({
        filled: index <= riskScore,
        color: index <= riskScore ? colors[riskScore] : '#D9D9D9',
    }));

    return (
        <div className="risk-level-container">
            <div className="risk-level-bars">
                {bars.map((bar, index) => (
                    <div
                        key={index}
                        className="bar"
                        style={{backgroundColor: bar.color, height: `${20 * (index + 1)}%`}}
                    />
                ))}
            </div>
        </div>
    );
};

RiskLevelBars.propTypes = {
    riskScore: PropTypes.number.isRequired,
};

export default RiskLevelBars;