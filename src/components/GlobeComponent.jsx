import Globe from 'react-globe.gl';
import { useEffect, useRef } from 'react';

const GlobeComponent = () => {
  const globeEl = useRef();

  const markers = [
    { lat: 19.1162, lng: 72.9083, name: 'Mumbai Office', imgSrc: '/images/mumbai.png' },
    { lat: 28.584953, lng: 77.315888, name: 'NCR Office', imgSrc: '/images/ncr.png' },
    { lat: 18.5362, lng: 73.8997, name: 'Pune Office', imgSrc: '/images/pune.png' },
    { lat: 30.3165, lng: 78.0322, name: 'Dehradun Office', imgSrc: '/images/dehradun.png' },
  ];

  useEffect(() => {
    globeEl.current.pointOfView({ lat: 20.5937, lng: 78.9629, altitude: 2 }, 2000);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '95vh',
      }}
    >
      {/* Globe Section */}
      <div
        style={{
          flex: 1,
          backgroundColor: 'blue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Globe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          htmlElementsData={markers}
          htmlElement={(marker) => {
            const img = document.createElement('img');
            img.src = marker.imgSrc;
            img.style.width = '30px';
            img.style.height = '30px';
            img.style.borderRadius = '50%';
            img.style.transform = 'translate(-50%, -50%)';
            img.style.position = 'relative';
            return img;
          }}
          backgroundColor="#0d1252"
          width={window.innerWidth <= 768 ? '90%' : '50%'} // Adjust size based on screen width
          height={window.innerWidth <= 768 ? '90%' : '50%'}
        />
      </div>
      
    </div>
  );
};

export default GlobeComponent;
