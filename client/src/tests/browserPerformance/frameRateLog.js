(() => {
    const duration = 5_000;
    const deltas = [];
    let start;
    let last;
    let longTasks = 0;

    const obs = new PerformanceObserver(list => { longTasks += list.getEntries().length });

    obs.observe({
        entryTypes: ['longtask']
    });

    function reqFrames(t) {
        if (start == null) {
            start = t;
            last = t
        } else {
            deltas.push(t - last);
            last = t;
        }
        if (t - start < duration) {
            requestAnimationFrame(reqFrames);
        } else {
            obs.disconnect();
            const totalMs = (t - start);
            const frames = deltas.length;
            const avgFPS = (frames / totalMs) * 1000;
            const sorted = [...deltas].sort((a, b) => a - b)
            const q = (p) => sorted[Math.floor((p / 100) * sorted.length)] || 0;
            const budget = 1000 / 120;
            const dropped = deltas.reduce((a, d) => a + Math.max(0, Math.round(d / budget) - 1), 0);

            console.log(
                {
                    avgFPS: +avgFPS.toFixed(1),
                    medianFrameMs: +q(50).toFixed(2),
                    p95FrameMs: +q(95).toFixed(2),
                    maxFrameMs: +Math.max(...deltas).toFixed(2),
                    frames: frames,
                    durationMs: Math.round(totalMs),
                    approxDroppedFrames: dropped, longTasks
                }
            );
        }
    } requestAnimationFrame(reqFrames);
})();
