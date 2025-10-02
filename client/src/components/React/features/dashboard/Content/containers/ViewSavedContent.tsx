import ArticleReview from "../UserArticles/containers/ArticleReview";
import ResearchReview from "../SavedInvestigations/containers/ResearchReview";
import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";




function ViewSavedContent(): JSX.Element | null {
    const { displayThisArticle, displayThisInvestigation } = useSelector(
        (s: RootState) => ({
            displayThisArticle: s.profileNav.displayThisArticle,
            displayThisInvestigation: s.profileNav.displayThisInvestigation,
        }),
        shallowEqual
    );

    return (
        <section>
            {displayThisArticle && <ArticleReview />}
            {displayThisInvestigation && <ResearchReview />}
        </section>
    )
};


export default React.memo(ViewSavedContent);