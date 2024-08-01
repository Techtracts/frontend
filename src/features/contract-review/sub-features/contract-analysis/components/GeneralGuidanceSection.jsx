import ToggleList from "./ToggleList.jsx";
import DividerLine from "../../../../../common/components/DividerLine.jsx";
import {useSelector} from "react-redux";
import getCorrectGuidance from "../misc/guidanceText/guidanceTextRetriever.js";

function GeneralGuidanceSection() {

    const {jurisdiction, contract_type, industry} = useSelector(state => state.contractAnalysis.contractDetails);
    const {commercialAdvice, legalAdvice} = getCorrectGuidance(jurisdiction, contract_type, industry)

    return (
        <div>
            <ToggleList
                titleString={"General Guidance"}
                childIndentation={'0px'}
                headerStyle={{marginLeft: '16px', marginTop: '16px'}}
            >
                <div style={{marginLeft: '40px', marginTop: '8px', marginBottom: '4px'}}>
                    <ToggleList
                        titleComponent={'Commercial advice:'}
                        showDividerLine={false}
                    >
                        <p className={'toggle-list-content'} style={{
                            whiteSpace: 'pre-wrap',
                            marginLeft: '0px',
                            marginRight: '20px',
                        }}>{commercialAdvice}</p>
                    </ToggleList>
                </div>
                <DividerLine
                    isVertical={false}
                    colorOverride={'#d7d7d7'}
                />
                <div style={{marginLeft: '40px', marginTop: '8px'}}>
                    <ToggleList
                        titleComponent={'Legal advice:'}
                        showDividerLine={false}
                    >
                        <p className={'toggle-list-content'} style={{
                            whiteSpace: 'pre-wrap',
                            marginLeft: '0px',
                            marginRight: '20px',
                        }}>{legalAdvice}</p>
                    </ToggleList>
                </div>
            </ToggleList>
            <DividerLine isVertical={false}/>
        </div>
    )
}

export default GeneralGuidanceSection;