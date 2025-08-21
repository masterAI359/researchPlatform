import { useEffect, useMemo, useRef } from "react";
import { WebWorkerRequest } from "@/env";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/ReduxToolKit/store";

type ConstructedRequest = {
    type: ChartType,
    input: IntegrityRatings | number[] | null,
    signature: string
};

export default function useChartWorkers(chartTasks: WebWorkerRequest[]): WebWorkerResponse {
    const dispatch = useDispatch<AppDispatch>();
    const processed = useRef<Record<ChartType, string>>({} as any);


    const key = useMemo(() => {
        if (!Array.isArray(chartTasks) || chartTasks.length === 0) return;

        const scheduleWorkers = chartTasks.map((task: WebWorkerRequest) => {
            const signature = task.signature ?? (Array.isArray(task.input) ? task.input.length : 0);
            return `${task.type}: ${signature}`;
        });
        return scheduleWorkers.join("|");
    }, [chartTasks]);

    //todo


    useEffect(() => {
        if (chartTasks.length === 0) return;

        const workers: Partial<Record<ChartType, Worker>> = {};

        for (const task of chartTasks) {
            if (!task?.input?.length) continue;

            const signature = task.signature ?? String(task.input.length);

            if (processed.current[task.type] === signature) continue;

            const path = task.type === 'IntegritySS'
                ? new URL('../services/workers/biasSnapshot.js')
                : new URL('../services/workers/sourceWorker.js');

            const worker = new Worker(path, { type: 'module' });
            workers[task.type] = worker;

            worker.onmessage = (e: MessageEvent<any>) => {
                const payload: WebWorkerResponse = e.data.chartData;
            }
        }




    }, []);


    return null;
}