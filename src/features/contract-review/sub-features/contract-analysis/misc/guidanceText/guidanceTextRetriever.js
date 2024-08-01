import getCorrectGuidanceUK from "./guidanceTextRetrieverUK.jsx";
import getCorrectGuidanceUSA from "./guidanceTextRetrieverUSA.jsx";

function getCorrectGuidance(jurisdiction, contractType, industry) {
    switch (jurisdiction.toLowerCase()) {
        case 'usa':
            return getCorrectGuidanceUSA(contractType, industry)
        case 'uk':
            return getCorrectGuidanceUK(contractType, industry)
        default:
            throw new Error('Jurisdiction not recognised ' + jurisdiction)
    }
}

export default getCorrectGuidance;