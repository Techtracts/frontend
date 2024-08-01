function getCorrectGuidanceUSA(contractType, industry) {
    switch (contractType) {
        case 'employment':
            switch (industry) {
                case 'technology':
                    return employmentTechnologyGuidance;
                case 'legal':
                    return employmentLegalGuidance;
                case 'finance':
                    return employmentFinanceGuidance;
                case 'commercial':
                    return employmentCommercialGuidance;
                default:
                    return generalGuidance;
            }
        case 'services':
            switch (industry) {
                case 'technology':
                    return servicesTechnologyGuidance;
                case 'legal':
                    return servicesLegalGuidance;
                case 'finance':
                    return servicesFinanceGuidance;
                case 'commercial':
                    return servicesCommercialGuidance;
                default:
                    return generalGuidance;
            }
        case 'commercial':
            switch (industry) {
                case 'technology':
                    return commercialTechnologyGuidance;
                case 'legal':
                    return commercialLegalGuidance;
                case 'finance':
                    return commercialFinanceGuidance;
                case 'commercial':
                    return commercialCommercialGuidance;
                default:
                    return generalGuidance;
            }
    }
}

const employmentTechnologyGuidance = {
    commercialAdvice: "Clearly define roles, responsibilities, and growth opportunities. Prioritize open communication, innovation, and a collaborative work culture. Emphasize the unique value technology professionals bring to the company.",
    legalAdvice: "Review and reinforce confidentiality clauses, intellectual property rights, and compliance with employment laws, such as the Fair Labor Standards Act (FLSA) and non-compete regulations. Clarify termination conditions, benefits, and dispute resolution mechanisms. Ensure contracts align with federal and state laws, mitigating legal risks and promoting a fair and transparent employer-employee relationship."
}

const employmentLegalGuidance = {
    commercialAdvice: "Clearly delineate roles, expectations, and career growth opportunities. Emphasize transparent communication, client satisfaction, and a commitment to ethical and professional conduct. Highlight the unique value legal professionals bring to the firm.",
    legalAdvice: "Review and strengthen confidentiality clauses, ethical conduct expectations, and compliance with employment laws such as the Fair Labor Standards Act (FLSA). Clarify termination conditions, compensation structures, and benefits. Ensure contracts align with federal and state laws, mitigating legal risks and fostering a robust and ethical employer-employee relationship."
}

const employmentFinanceGuidance = {
    commercialAdvice: "Clearly outline roles, responsibilities, and growth opportunities. Prioritize transparent communication, client satisfaction, and a commitment to financial excellence. Emphasize the unique value financial professionals bring to the organization.",
    legalAdvice: "Review and reinforce confidentiality clauses, compliance with employment laws such as the Fair Labor Standards Act (FLSA), and adherence to financial regulations. Clarify termination conditions, compensation structures, and benefits. Ensure contracts align with federal and state laws, mitigating legal risks and promoting a secure and ethical employer-employee relationship."
}

const employmentCommercialGuidance = {
    commercialAdvice: "Clearly articulate roles, responsibilities, and growth pathways. Prioritize open communication, collaboration, and a commitment to delivering value to clients and stakeholders. Highlight the unique skills and contributions professionals bring to the company.",
    legalAdvice: "Review and strengthen confidentiality clauses, intellectual property rights, and compliance with employment laws, such as the Fair Labor Standards Act (FLSA). Clarify termination conditions, compensation structures, and benefits. Ensure contracts align with federal and state laws, mitigating legal risks and fostering a fair and transparent employer-employee relationship."
}

const servicesTechnologyGuidance = {
    commercialAdvice: "Clearly define deliverables, timelines, and expectations. Prioritize flexibility to adapt to evolving project needs. Emphasize open communication and collaborative problem-solving to enhance client satisfaction.",
    legalAdvice: "Review and strengthen intellectual property clauses, confidentiality agreements, and compliance with technology regulations in services contracts. Clarify payment terms, dispute resolution mechanisms, and termination conditions. Ensure contracts align with federal and state laws, mitigating legal risks and promoting a secure and effective client-provider relationship."
}

const servicesLegalGuidance = {
    commercialAdvice: "Ensure services contracts explicitly detail scope, timelines, and deliverables. Prioritize transparent communication, client satisfaction, and a collaborative approach to legal services. Emphasize the value of legal expertise and dedication to client success.",
    legalAdvice: "Review and reinforce confidentiality clauses, ethical conduct expectations, and compliance with legal professional regulations in services contracts. Clarify payment terms, dispute resolution mechanisms, and termination conditions. Ensure contracts align with federal and state laws, mitigating legal risks and promoting a robust and ethical client-lawyer relationship."
}

const servicesFinanceGuidance = {
    commercialAdvice: "Clearly define scope, responsibilities, and deliverables. Prioritize transparent communication, client satisfaction, and a commitment to financial excellence. Highlight the unique value financial professionals bring to the client's organization.",
    legalAdvice: "Review and reinforce confidentiality clauses, compliance with financial regulations, and dispute resolution mechanisms in services contracts. Clarify payment terms, liability limitations, and termination conditions. Ensure contracts align with federal and state laws, mitigating legal risks and promoting a secure and ethical client-provider relationship."
}

const servicesCommercialGuidance = {
    commercialAdvice: "Clearly articulate scope, responsibilities, and deliverables. Prioritize transparent communication, client satisfaction, and a commitment to delivering value. Highlight the unique skills and contributions professionals bring to the client's organization.",
    legalAdvice: "Review and reinforce confidentiality clauses, intellectual property rights, and compliance with federal and state regulations in services contracts. Clarify payment terms, dispute resolution mechanisms, and termination conditions. Ensure contracts align with relevant laws, mitigating legal risks and fostering a fair and effective client-provider relationship."
}

const commercialTechnologyGuidance = {
    commercialAdvice: "Clearly define roles, expectations, and deliverables. Prioritize open communication, innovation, and a collaborative work culture. Emphasize the unique value technology professionals bring to the company.",
    legalAdvice: "Review and reinforce intellectual property clauses, confidentiality agreements, and compliance with federal and state regulations in commercial contracts. Clarify payment terms, dispute resolution mechanisms, and termination conditions. Ensure contracts align with relevant laws, mitigating legal risks and promoting a secure and transparent business relationship."
}

const commercialLegalGuidance = {
    commercialAdvice: "Clearly delineate roles, responsibilities, and expectations. Prioritize transparent communication, client satisfaction, and a commitment to ethical and professional conduct. Highlight the unique value legal professionals bring to the firm.",
    legalAdvice: "Review and reinforce confidentiality clauses, ethical conduct expectations, and compliance with federal and state regulations in commercial contracts. Clarify payment terms, dispute resolution mechanisms, and termination conditions. Ensure contracts align with relevant laws, mitigating legal risks and fostering a robust and ethical client-lawyer relationship."
}

const commercialFinanceGuidance = {
    commercialAdvice: "Clearly articulate roles, responsibilities, and deliverables. Prioritize transparent communication, client satisfaction, and a commitment to financial excellence. Highlight the unique expertise and value financial professionals bring to the organization.",
    legalAdvice: "Review and reinforce confidentiality clauses, compliance with financial regulations, and dispute resolution mechanisms in commercial contracts. Clarify payment terms, liability limitations, and termination conditions. Ensure contracts align with federal and state laws, mitigating legal risks and fostering a secure and ethical client-provider relationship."
}

const commercialCommercialGuidance = {
    commercialAdvice: "Clearly articulate roles, responsibilities, and expectations within the commercial industry. Prioritize transparent communication, client satisfaction, and a commitment to delivering value. Highlight the unique skills and contributions professionals bring to the client's organization.",
    legalAdvice: "Review and reinforce confidentiality clauses, intellectual property rights, and compliance with federal and state regulations in commercial contracts. Clarify payment terms, dispute resolution mechanisms, and termination conditions. Ensure contracts align with relevant laws, mitigating legal risks and fostering a fair and effective client-provider relationship."
}

const generalGuidance = {
    commercialAdvice: "Ensure clarity in contracts, emphasising roles, responsibilities, and deliverables. Prioritise open communication, client satisfaction, and a collaborative approach. Highlight the unique value your services provide to the client.",
    legalAdvice: "Thoroughly review and reinforce confidentiality clauses, intellectual property rights, and compliance with UK laws and industry regulations in contracts. Clarify payment terms, dispute resolution mechanisms, and termination conditions. Ensure contracts comply with UK laws and industry standards, mitigating legal risks and fostering a strong and transparent business partnership."
}


export default getCorrectGuidanceUSA;