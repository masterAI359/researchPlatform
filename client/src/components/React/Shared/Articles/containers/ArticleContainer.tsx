import FailedLoading from "../Failed/FailedLoading"
import { useSelector } from "react-redux"
import { RootState } from "@/ReduxToolKit/store"
import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { recordSources } from "@/ReduxToolKit/Reducers/UserContent.ts/SaveInvestigationSlice"
import ErrorBoundary from "../../ErrorBoundaries/ErrorBoundary"
import ErrMessage from "../../ErrorBoundaries/messages/ErrMessage"
import RenderArticles from "@/components/React/Features/Investigate/evidence/reading/components/RenderArticles"
import { getSourcesToRecord, canUpdateSources } from "@/services/RecordSources"

export default function ArticleContainer({ }) {
  const investigateState = useSelector((state: RootState) => state.investigation);
  const { read } = investigateState;
  const sources = useSelector((state: RootState) => state.userWork.sourcesToReview);
  const sourcesToDispatch = sources;
  const { articles, failedNotifications, ContentStatus } = read;
  const firstRecordedSources = useRef<string>("");
  const dispatch = useDispatch();

  useEffect(() => {

    const executeRecordSources = () => {
      const data = getSourcesToRecord(articles, failedNotifications);
      const canUpdate = canUpdateSources(data, firstRecordedSources.current);
      if (canUpdate) {
        dispatch(recordSources(data.urls));
        firstRecordedSources.current = data.recordedString
      };
    };

    if (Array.isArray(articles) && (articles.length > 0)) executeRecordSources();

    if (sources) localStorage.setItem('cachedSources', JSON.stringify(sourcesToDispatch));

  }, [articles, sources]);


  return (
    <ErrorBoundary fallback={<ErrMessage message={"Woops, something broke :/"} />}>
      <div
        className="min-h-screen h-full 2xl:max-w-7xl xl:max-w-5xl 
      lg:max-w-3xl md:max-w-3xl xs:px-2 md:px-8 scroll-smooth
      inset mx-auto border-white/10 xs:mt-10 xl:mt-12 relative"
      >
        <RenderArticles
        />
        {ContentStatus === 'fulfilled' &&
          <FailedLoading
          />
        }
      </div>
    </ErrorBoundary>
  )
}

