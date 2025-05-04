import React from 'react';
import Content from './components/content';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='min-h-screen flex flex-col'>

        <Header />
        <main className=" flex-grow mx-auto my-6">

          <Content
            img="https://cdn.britannica.com/47/80547-120-839DEBE4/Field-green-tea-Mount-Fuji-Shizuoka-prefecture.jpg"
            img2="https://github.com/scrimba/learn-react/blob/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/marker.png?raw=true"
            link="https://www.google.com/maps/place/Mount+Fuji/@35.3606541,138.7270581,20.09z/data=!4m14!1m7!3m6!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!2sMount+Fuji!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D"
            loc="japan"
            time="4 june 2030"
            title="MOUNT FUJI"
            content="Discover the beauty of Mount Fuji and Lake Kawaguchi on a day trip from Tokyo. Visit the Arakura Sengen Shrine and Chureito Pagoda, Oshino Hakkai, and the Healing Village at Lake Saiko."
            btn="https://www.britannica.com/place/Mount-Fuji"
          />
          <Content
          
          img="https://cdn.britannica.com/47/80547-120-839DEBE4/Field-green-tea-Mount-Fuji-Shizuoka-prefecture.jpg"
          img2="https://github.com/scrimba/learn-react/blob/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/marker.png?raw=true"
          link="https://www.google.com/maps/place/Mount+Fuji/@35.3606541,138.7270581,20.09z/data=!4m14!1m7!3m6!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!2sMount+Fuji!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D"
          loc="japan"
          time="4 june 2030"
          title="MOUNT FUJI"
          content="Discover the beauty of Mount Fuji and Lake Kawaguchi on a day trip from Tokyo. Visit the Arakura Sengen Shrine and Chureito Pagoda, Oshino Hakkai, and the Healing Village at Lake Saiko."
          btn="https://www.britannica.com/place/Mount-Fuji"
          />

        </main>
        <Footer />
      </div>

    </>
  );
}

export default App;