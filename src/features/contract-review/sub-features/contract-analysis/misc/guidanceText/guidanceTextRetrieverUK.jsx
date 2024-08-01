function getCorrectGuidanceUK(contractType, industry) {
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
    commercialAdvice: "Prioritise clarity on roles, responsibilities, and benefits in employment contracts. Consider flexibility for evolving job roles and emphasise training and development opportunities. Ensure alignment with the company's technology goals and maintain a client-centric approach. Prioritise user-centric solutions, stay updated on industry trends, and foster a collaborative network. Balance innovation with stability and invest in continuous learning for sustained success.",
    legalAdvice: "Review contracts for clear intellectual property ownership, confidentiality clauses, and compliance with data protection laws (GDPR). Pay attention to termination and notice provisions. Prioritise cybersecurity and stay aware of evolving legal landscapes."
}

const employmentLegalGuidance = {
    commercialAdvice: "Focus on clearly defining roles, expectations, and career growth opportunities. Emphasise a commitment to ongoing professional development and training. Reflect the values of integrity and client-centric service in contractual expectations.",
    legalAdvice: "Thoroughly review confidentiality clauses, ethical conduct expectations, and compliance with legal professional regulations. In England and Walers, solicitors are regulated by the Solicitors Regulation Authority (SRA) and Barristers are regulated by the Bar Standards Board (BSB). Ensure clear terms regarding client relationships, potential conflicts of interest and termination procedures."
}

const employmentFinanceGuidance = {
    commercialAdvice: "Ensure clarity in roles, responsibilities, and performance metrics within financial industry employment contracts. Emphasise a commitment to professional development, client service excellence, and adherence to industry standards. Align contract terms with the financial firm's strategic goals.",
    legalAdvice: "Review and strengthen confidentiality clauses, compliance with financial regulations, and ethical conduct expectations in employment contracts. Clearly define compensation structures and benefits. The regulator for the financial industry in the UK is the Financial Conduct Authority (FCA)."
}

const employmentCommercialGuidance = {
    commercialAdvice: "Prioritise clarity on roles, responsibilities, and growth opportunities in commercial industry employment contracts. Emphasise a customer-centric approach and ongoing professional development. Ensure alignment with the company's strategic objectives and values.",
    legalAdvice: "Thoroughly review confidentiality clauses, intellectual property rights, and compliance with relevant regulations for the specific industry. Clarify termination and notice periods. Ensure contracts align with industry standards in the field, safeguarding the interests of both the employer and the professional."
}

const servicesTechnologyGuidance = {
    commercialAdvice: "Ensure services contracts in the technology industry outline clear deliverables, milestones, and timelines. Prioritise flexibility to accommodate evolving project needs. Emphasise open communication and collaboration to enhance the client-provider relationship.",
    legalAdvice: "Review and strengthen intellectual property clauses, confidentiality agreements, and liability provisions in services contracts. Clarify payment terms, dispute resolution mechanisms, and termination conditions. Ensure contract is mitigating risks and promoting a fair and transparent business relationship."
}

const servicesLegalGuidance = {
    commercialAdvice: "Ensure services contracts in the legal industry clearly define scope, expectations, and deliverables. Prioritise communication and responsiveness to enhance the client-lawyer relationship. Emphasise a commitment to confidentiality and ethical conduct throughout the engagement.",
    legalAdvice: "Thoroughly review and strengthen confidentiality clauses, compliance with legal professional regulations, and scope of services in legal industry contracts. Clarify fee structures, dispute resolution mechanisms, and termination conditions. Ensure safeguarding the interests of both parties and promoting a transparent and effective legal partnership."
}

const servicesFinanceGuidance = {
    commercialAdvice: "Ensure clarity in services contracts within the financial industry, emphasising precise deliverables, timelines, and reporting structures. Prioritise client satisfaction and highlight the value-addition your financial services bring. Foster transparent communication and flexibility to adapt to evolving financial needs.",
    legalAdvice: "Review and strengthen confidentiality clauses, compliance with financial regulations, and dispute resolution mechanisms in financial services contracts. Clarify compensation structures, liability limitations, and termination conditions. Ensure contracts comply with financial industry standards, mitigating legal risks for both parties and ensuring a robust contractual relationship."
}

const servicesCommercialGuidance = {
    commercialAdvice: "Ensure clarity in services contracts within the commercial industry, defining expectations, deliverables, and timelines. Emphasise flexibility to accommodate changing business needs. Prioritise transparent communication, client satisfaction, and a collaborative approach to strengthen the client-provider relationship.",
    legalAdvice: "Thoroughly review and reinforce confidentiality clauses, intellectual property rights, and compliance with commercial regulations in services contracts. Clarify payment terms, dispute resolution mechanisms, and termination conditions. Ensure contract is mitigating risks and fostering a fair and effective business partnership."
}

const commercialTechnologyGuidance = {
    commercialAdvice: "Ensure clarity in commercial contracts within the technology industry, defining roles, deliverables, and milestones. Emphasise flexibility to adapt to evolving project requirements. Prioritise open communication, client satisfaction, and a collaborative approach to enhance the client-provider relationship.",
    legalAdvice: "Review and strengthen intellectual property clauses, confidentiality agreements, and compliance with technology regulations in commercial contracts. Clarify payment terms, dispute resolution mechanisms, and termination conditions. Ensure contracts comply with industry standards, mitigating legal risks and promoting a strong and transparent business partnership."
}

const commercialLegalGuidance = {
    commercialAdvice: "Ensure clarity in commercial contracts within the legal industry, specifying services, timelines, and deliverables. Prioritise transparent communication, client satisfaction, and a collaborative approach. Highlight the unique value your legal services bring to the client's business.",
    legalAdvice: "Thoroughly review and reinforce confidentiality clauses, ethical conduct expectations, and compliance with legal professional regulations in commercial contracts. Clarify payment terms, dispute resolution mechanisms, and termination conditions. Ensure contracts align with industry standards, mitigating legal risks and fostering a robust and ethical client-lawyer relationship."
}

const commercialFinanceGuidance = {
    commercialAdvice: "Ensure clarity in commercial contracts within the financial industry, defining services, responsibilities, and deliverables. Prioritise transparency, client satisfaction, and a collaborative approach. Emphasise the financial expertise and value your services bring to the client's business.",
    legalAdvice: "Review and strengthen confidentiality clauses, compliance with financial regulations, and dispute resolution mechanisms in commercial contracts. Clarify payment terms, liability limitations, and termination conditions. Ensure contracts align with financial industry standards, mitigating legal risks and promoting a secure and effective business partnership."
}

const commercialCommercialGuidance = {
    commercialAdvice: "Ensure clarity in commercial contracts within the commercial industry, detailing services, obligations, and deliverables. Prioritise open communication, client satisfaction, and a collaborative approach. Highlight the unique value your commercial services provide to the client.",
    legalAdvice: "Thoroughly review and reinforce confidentiality clauses, intellectual property rights, and compliance with commercial regulations in commercial contracts. Clarify payment terms, dispute resolution mechanisms, and termination conditions. Ensure contracts comply with industry standards, mitigating legal risks and fostering a strong and transparent business partnership."
}

const generalGuidance = {
    commercialAdvice: "Ensure clarity in contracts, emphasising roles, responsibilities, and deliverables. Prioritise open communication, client satisfaction, and a collaborative approach. Highlight the unique value your services provide to the client.",
    legalAdvice: "Thoroughly review and reinforce confidentiality clauses, intellectual property rights, and compliance with UK laws and industry regulations in contracts. Clarify payment terms, dispute resolution mechanisms, and termination conditions. Ensure contracts comply with UK laws and industry standards, mitigating legal risks and fostering a strong and transparent business partnership."
}


export default getCorrectGuidanceUK;