import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/ReduxToolKit/store';
import { getSourceIntegrity } from '@/helpers/Ratings';
import ErrorBoundary from '../../Shared/ErrorBoundaries/ErrorBoundary';
import { useEffect } from 'react';
import { getReportingRatings } from '@/ReduxToolKit/Reducers/UserContent.ts/ChartSlice';

ChartJS.register(ArcElement, Tooltip, Legend);

const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 }
};

const ratings: string[] = [
    'Very High',
    'High',
    'Mostly Factual',
    'Mixed',
    'Low',
    'Very Low',
    'Conspiracy-Pseudoscience',
    'N/A'
];

const tableColors: string[] = [
    '#0d9488',
    '#2628a1',
    '#a1a1aa',
    '#64748b',
    '#eab308',
    '#f97316',
    '#dc2626',
    '#ffffff'
];

export default function PieChart() {
    const userArticles = useSelector((state: RootState) => state.userdata.userArticles);
    const ratingData = useSelector((state: RootState) => state.chart.reportingIntegrity);
    const dispatch = useDispatch();
    const hasArticles = Array.isArray(userArticles) && (userArticles.length > 0);

    useEffect(() => {

        if (!userArticles || userArticles.length === 0) return;

        if (userArticles) getSourceIntegrity(userArticles, dispatch, getReportingRatings);

    }, [userArticles]);



    const data = {
        labels: ratings,
        datasets: [
            {
                label: '# of sources',
                data: ratingData,
                backgroundColor: tableColors,
                borderColor: tableColors,
                borderWidth: 1,
            },
        ],
    };

    return (
        <AnimatePresence>
            {hasArticles && <motion.div
                variants={variants}
                initial='closed'
                animate='open'
                exit='closed'
                transition={{ type: 'tween', duration: 0.2 }}
                className="w-auto h-96 xl:h-128 xl:p-2 flex items-center justify-center"
            >
                <ErrorBoundary>
                    <Pie key='pieChart' data={data} />
                </ErrorBoundary>
            </motion.div>
            }
        </AnimatePresence>
    );
};