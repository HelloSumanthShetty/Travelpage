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
            loc="Japan"
            time="4 june 2030"
            title="MOUNT FUJI"
            content="Discover the beauty of Mount Fuji and Lake Kawaguchi on a day trip from Tokyo. Visit the Arakura Sengen Shrine and Chureito Pagoda, Oshino Hakkai, and the Healing Village at Lake Saiko."
            btn="https://www.britannica.com/place/Mount-Fuji"
          />
          <Content
          
          img="https://images.ctfassets.net/lba2mur2bccb/NjmructBqAT0bXSEmy5Aq/a7e069b30ea2a13b90b27506ddf7113b/istockphoto-1211097990-2048x2048-transformed.jpeg"
          img2="https://github.com/scrimba/learn-react/blob/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/marker.png?raw=true"
          link="https://www.google.com/maps/place/3800+Interlaken,+Switzerland/@46.6872992,7.8483575,13.7z/data=!4m6!3m5!1s0x1453996a31921a05:0x9c111af14c02be00!8m2!3d46.6863481!4d7.8632049!16zL20vMDJoX2Y4?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D"
          loc="Switzerland"
          time="20 Aug 1994"
          title="Interlaken "
          content="Interlaken is your starting point for unforgettable excursions to the Bernese Oberland and a world leader in adventure sports. Lakes, mountain villages and the Bernese Alps with their glaciers await you here  all accessible all year round by rail, road and mountain railway."
          btn="https://en.wikipedia.org/wiki/Interlaken"
          />
              <Content  
           img="https://images.squarespace-cdn.com/content/v1/62091b41ab8403213f45ce37/1647946214192-GJIEQQAECEENTJ6TXCFY/Amsterdam+canal.jpg"
          img2="https://github.com/scrimba/learn-react/blob/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/marker.png?raw=true"
          link="https://www.google.com/maps/place/Netherlands/@52.3487229,4.8314036,10.94z/data=!4m6!3m5!1s0x47c609c3db87e4bb:0xb3a175ceffbd0a9f!8m2!3d52.132633!4d5.291266!16zL20vMDU5ajI?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D"
          loc="Netherlands"
          time="42 Aug 1030"
          title="AMSTERDAM "
          content="Amsterdam, city and port, western Netherlands, located on the IJsselmeer and connected to the North Sea. It is the capital and the principal commercial and financial centre of the Netherlands.Amsterdam is known for its historical attractions, for its collections of great art, which have been so well preserved. "
          btn="https://en.wikipedia.org/wiki/Amsterdam"
          />
           <Content
                img="https://static.toiimg.com/thumb/msid-81513815,width-748,height-499,resizemode=4,imgsize-274070/Moscows-finest-attractions.jpg"
          img2="https://github.com/scrimba/learn-react/blob/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/marker.png?raw=true"
          link="https://www.google.com/maps/place/Moscow,+Russia/@55.7970592,37.5864366,11.27z/data=!4m6!3m5!1s0x46b54afc73d4b0c9:0x3d44d6cc5757cf4c!8m2!3d55.755826!4d37.6172999!16zL20vMDRzd2Q?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D"
          loc="Russia"
          time="1 oct 2022"
          title="MOSCOW "
          content="An eclectic mix of the historical and modern, Moscow will seduce you with its intriguing line-up of awe-inspiring architectural landmarks, stunning cathedrals, world-class museums and art galleries."
          btn="https://en.wikipedia.org/wiki/Moscow"
          />
                
           
           
 
     
        </main>

  
        <Footer />
      </div>

    </>
  );

}

export default App;