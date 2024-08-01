import {createSlice} from "@reduxjs/toolkit";
import {getExplanation, updateExplanation} from "./explanation_actions.js";
import {reviewContract} from "./review_actions.js";
import {getExplanationOfHighRiskClause, updateHighRiskClauseExplanation} from "./risky_clause_actions.js";

const initialState = {
    contractId: null,
    contractDetails: {
        contract_type: '',
        jurisdiction: '',
        industry: '',
        contractParty: '',
    },
    explanationDetails: {
        clauseLocation: '',
        explanation: '',
        isLoading: false,
        isUpdating: false,
    },
    riskAssessment: {
        isLoading: false,
        assessment: {
            riskScore: null,
            highRiskClauses: [],
        },
        selectedRiskClause: {
            clauseLocation: null,
            isLoading: false,
            description: null,
        },
    }
}

export const contractAnalysisSlice = createSlice({
    name: 'contractAnalysis',
    initialState: initialState,
    reducers: {
        resetAnalysisState: (state) => {
            state.explanationDetails.explanation = '';
            state.explanationDetails.clauseLocation = '';
            state.riskAssessment = initialState.riskAssessment;
            console.log('expl: ' + state.explanationDetails.explanation)
        },
        setContractId: (state, action) => {
            console.log('Set id to: ' + state.contractId);
            state.contractId = action.payload;
        },
        setContractDetails: (state, action) => {
            state.contractDetails = action.payload;
        },
        setExplanationIsUpdating: (state, action) => {
            state.explanationDetails.isUpdating = action.payload;
        },
        setExplanationClauseLocation: (state, action) => {
            state.explanationDetails.clauseLocation = action.payload;
        },
        setSelectedHighRiskClause: (state, action) => {
            state.riskAssessment.selectedRiskClause.clauseLocation = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getExplanation.pending, (state) => {
                // Update the state with the new chunk of explanation
                state.explanationDetails.isLoading = true;
            })
            .addCase(getExplanation.fulfilled, (state, action) => {
                // Handle the final state when the stream is complete
                state.explanationDetails.explanation = action.payload;
                state.explanationDetails.isLoading = false;
            })
            .addCase(updateExplanation.fulfilled, (state, action) => {
                // Update the state with the new chunk of explanation
                state.explanationDetails.explanation = action.payload;
                state.explanationDetails.isLoading = false;
            });

        builder.addCase(getExplanationOfHighRiskClause.pending, (state) => {
            state.riskAssessment.selectedRiskClause.isLoading = true;
        }).addCase(getExplanationOfHighRiskClause.fulfilled, (state) => {
            state.riskAssessment.selectedRiskClause.isLoading = false;
        }).addCase(updateHighRiskClauseExplanation.fulfilled, (state, action) => {
            state.riskAssessment.selectedRiskClause.isLoading = false;
            state.riskAssessment.selectedRiskClause.description = action.payload;
        });

        builder.addCase(reviewContract.pending, (state) => {
            state.riskAssessment.isLoading = true;
        }).addCase(reviewContract.fulfilled, (state, action) => {
            state.contractDetails = action.payload.contract_details;
            state.riskAssessment.isLoading = false;
            state.riskAssessment.assessment.riskScore = action.payload.risk_score;

            const MINIMUM_RISK_LEVEL_TO_BE_COUNTED = 3;

            const highRiskClauses = [];
            console.log(action.payload);
            for (const analysedSection of action.payload.analysed_sections) {
                for (const clause of analysedSection.analysed_clauses) {
                    if (clause.risk_level >= MINIMUM_RISK_LEVEL_TO_BE_COUNTED) {
                        highRiskClauses.push({
                            clauseLocation: clause.clause_id,
                            clauseId: clause.clause_id,
                            riskLevel: clause.risk_level,
                            riskFactors: clause.risk_factor,
                            title: clause.title,
                        });
                    }
                }
            }
            state.riskAssessment.assessment.highRiskClauses = highRiskClauses;

        }).addCase(reviewContract.rejected, (state) => {
            state.riskAssessment.isLoading = false;
            state.riskAssessment.assessment = null;
        });
    },
});

export const {
    resetAnalysisState,
    setExplanationClauseLocation,
    setExplanationIsUpdating,
    setSelectedHighRiskClause,
    setContractId,
    setContractDetails,
} = contractAnalysisSlice.actions;
export default contractAnalysisSlice.reducer;