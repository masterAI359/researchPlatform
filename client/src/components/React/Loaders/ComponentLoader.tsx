import loadingComponent from '../../../lotties/loadingComponent.json';
import Lottie from 'lottie-react';

export default function ComponentLoader() {

    return (
        <div
            id='component_loader'
            className='w-24 h-24 mx-auto xl:w-44 xl:h-44 pt-20 flex justify-center items-center'>
            <Lottie
                style={{ height: "100%", width: "100%", position: "relative" }}
                animationData={loadingComponent}
                autoPlay={true}
                loop={true}
            />
        </div>
    );
};
