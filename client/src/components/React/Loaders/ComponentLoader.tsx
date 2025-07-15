import loadingComponent from '../../../lotties/loadingComponent.json';
import Lottie from 'lottie-react';

export default function ComponentLoader() {

    return (
        <div
            id='component_loader'
            className='w-72 h-72 2xl:w-128 2xl:h-128 flex justify-center items-center'>
            <Lottie
                style={{ height: "100%", width: "100%", position: "relative" }}
                animationData={loadingComponent}
                autoPlay={true}
                loop={true}
            />
        </div>
    );
};
